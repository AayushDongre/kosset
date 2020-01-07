const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const url = require('url')
const fetch = require('node-fetch');
const { paytmConfig } = require('./extensions/config');
const paytmChecksum = require('./extensions/checksum');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: true }));


admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

app.post('/createUser', (req, res) => {
    try {
        let users = db.collection('users');
        const currentUser = {
            "uid": req.query.uid,
            "name": req.query.name,
            "email": req.query.email,
            "phone": req.query.phone,
            "days": req.query.days ? req.query.days : "",
            "last_date": req.query.last_date ? req.query.last_date : "",
            "address": req.query.address ? JSON.parse(req.query.address) : []
        }
        // const templates = JSON.parse(req.body)
        console.log("yesss", req.body.htmlAdmin)
        users.doc(req.query.uid).set(currentUser).then((val) => {

            db.collection('mail').add({
                to: [ "support@sudodevs.com","support@kossetcare.com"],
                message: {
                    subject: 'New user alert!',
                    html: req.body.htmlAdmin
                }
            });
            db.collection('mail').add({
                to: req.query.email,
                message: {
                    subject: 'Login to kossetcare.com',
                    html: req.body.htmlUser
                }
            });

            res.status(200);
            res.send("Success");
        }).catch((err) => {
            res.send(err);
        })
    } catch (err) {
        res.status(500);
        res.send(err);
    }

});
app.get("/fetchUser", (req, res) => {
    try {
        let users = db.collection("users")
        const user = users.doc(req.query.uid).get().then((val) => {
            if (!val.exists) {
                res.status(400);
                res.send("No user found")
            } else {
                res.send(val.data());
            }
        }).catch((err) => {
            res.status(500);
            res.send(err);
        })

    } catch (err) {
        res.status(500)
        res.send(err);
    }
})

app.post("/deleteUser", (req, res) => {
    try {
        let users = db.collection("users");
        let subscriptions = db.collection("subscriptions")

        subscriptions.doc(req.query.uid).get()
            .then((subscription) => {
                if (subscription.exists) {
                    res.status(400)
                    res.send("Cancel active subscriptions first to continue")
                }
                else {
                    users.doc(req.query.uid).delete().then(() => {
                        res.send("success");
                    }).catch((err) => {
                        res.send(err);
                    })
                }
            })
            .catch((err) => {
                res.send(err)
            })
    } catch (err) {
        res.send(err);
    }
}
)
app.post("/addOrder", (req, res) => {
    try {
        let orders = db.collection("orders");
        let products = JSON.parse(req.query.products);
        const currentOrder = {
            "uid": req.query.uid,
            "email": req.query.email,
            "timestamp": req.query.timestamp,
            "products": products,
            "address": req.query.address,
            "phone": req.query.phone,
            "cost": req.query.cost,
            "orderid": req.query.orderid
        }
        orders.doc(req.query.orderid).set(currentOrder).then(() => {

            db.collection('mail').add({
                to: [ "support@sudodevs.com","support@kossetcare.com"],
                message: {
                    subject: 'New Order alert!',
                    html: req.body.htmlAdmin
                }
            });
            db.collection('mail').add({
                to: req.query.email,
                message: {
                    subject: 'Your order has been placed!',
                    html: req.body.htmlUser
                }
            });
            res.send("success");
        }).catch((err) => {
            res.send(err);
        })
    } catch (err) {
        res.send(err);
    }
})
app.post("/updateUser", (req, res) => {
    try {
        let users = db.collection("users");
        const uid = req.query.uid
        let currentUser = req.query
        if (!!currentUser.address)
            currentUser.address = JSON.parse(currentUser.address)
        let updates = Object.assign({}, currentUser)

        users.doc(uid).update(updates)
            .then(() => {
                res.status(200)
                res.send("success")
            })
            .catch((err) => {
                res.send(err)
            })

    } catch (err) {
        res.send(err);
    }
})
app.post("/deleteUser", (req, res) => {
    let users = db.collection("users");
    const uid = req.query.uid;
    users.doc(uid).delete()
        .then(() => {
            res.status(200)
            res.send("success")
        })
        .catch((err) => {
            res.send(err)
        })
})

app.post("/addAddress", (req, res) => {
    try {
        let users = db.collection("users");
        const uid = req.query.uid
        const address = req.query.address
        users.doc(uid).update({
            address: admin.firestore.FieldValue.arrayUnion(address)
        })
            .then(() => {
                res.status(200)
                res.send("success")
            })
            .catch((err) => {
                res.send(err)
            })
    } catch (err) {
        res.send(err)
    }
})
app.post("/pay", (request, response) => {
    try {
        // const orders = db.collection('orders');
        const data = {};
        data.MID = paytmConfig.MID; // Provided by Paytm
        data.ORDER_ID = request.query.uid
            + request.query.timestamp; // unique OrderId for every request
        data.CUST_ID = request.query.uid; // unique customer identifier
        data.INDUSTRY_TYPE_ID = paytmConfig.INDUSTRY_TYPE_ID; // Provided by Paytm
        data.CHANNEL_ID = paytmConfig.CHANNEL_ID; // Provided by Paytm
        data.TXN_AMOUNT = request.query.price; // transaction amount
        data.WEBSITE = paytmConfig.WEBSITE; // Provided by Paytm
        data.CALLBACK_URL = paytmConfig.CALLBACK_URL; // Provided by Paytm
        data.EMAIL = request.query.email; // customer email id
        data.MOBILE_NO = request.query.phone; // customer 10 digit mobile no.
        paytmChecksum.genchecksum(
            data,
            paytmConfig.MERCHANT_KEY,
            (err, checksum) => {
                console.log('Checksum: ', checksum, '\n');
                response.status(200).json(
                    {
                        CHECKSUMHASH: checksum,
                        ...data,
                    },
                );
            },
        );

    } catch (err) {
        response.status(500).json({
            error: err,
        });
    }
})
app.post("/callback", (request, response) => {
    try {
        const checksumhash = request.body.CHECKSUMHASH
        const data = {
            ...request.body
        };
        delete data.CHECKSUMHASH

        var isValid = paytmChecksum.verifychecksum(data, paytmConfig.MERCHANT_KEY, checksumhash)
        if (isValid) {
            response.redirect(url.format({
                pathname: "https://kossetcare.com/status",
                query: {
                    "success": true,
                    "checksumhash": checksumhash,
                    "orderid": request.body.ORDERID
                }
            }));
        }
        else {
            response.redirect(url.format({
                pathname: "https://kossetcare.com/status",
                query: {
                    "success": false,
                    "checksumhash": checksumhash,
                    "orderid": request.body.ORDERID
                }
            }));
        }

    } catch (err) {
        response.status(500).json({
            error: err,
        });
    }
})
app.get("/status", (request, response) => {
    const params = {
        MID: paytmConfig.MID,
        ORDER_ID: request.query.ORDER_ID,
        CHECKSUMHASH: request.query.CHECKSUMHASH,
    }
    fetch(url.format({
        pathname: paytmConfig.STATUS_URL,
        query: params
    }), { method: "post" })
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`);
            response.status(res.statusCode).json(res);
        })
        .catch((error) => {
            console.error(error);
        });
})
app.post("/newUser", async (req, res) => {
    try {
        const htmlAdmin = req.body.htmlAdmin;
        const htmlUser = req.body.htmlUser;

        const mailAdmin = {
            from: "admin@sudodevs.com",
            to: "support@sudodevs.com",
            subject: "New User Alert",
            html: htmlAdmin
        }
        const mailUser = {
            from: "admin@sudodevs.com",
            to: "support@sudodevs.com",
            subject: "Welcome to Kosset",
            html: htmlUser
        }
        await mailer.sendMail(mailUser, (err) => {
            if (err) {
                console.log(err)
            }
        })
        await mailer.sendMail(mailAdmin, (err) => {
            if (err) {
                console.log(err)
            }
        })
        res.send(200)
    } catch (err) {
        res.send(err)
    }
})

// app.post("/emailSender", (req, response) => {
//     const secret = req.body.secret;
//     if (secret !== "sony1234") {
//         response.status(403).json({
//             error: "wrong secret you dufus",
//         })
//     }
//     const request = mailjet
//         .post("send", { 'version': 'v3.1' })
//         .request({
//             "Messages": [
//                 {
//                     "From": {
//                         "Email": "anurag@sudodevs.com",
//                         "Name": "Anurag"
//                     },
//                     "To": [
//                         {
//                             "Email": "support@sudodevs.com",
//                             "Name": "Anurag"
//                         }
//                     ],
//                     "Subject": "Greetings from Mailjet.",
//                     "TextPart": "My first Mailjet email",
//                     "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//                     "CustomID": "AppGettingStartedTest"
//                 }
//             ]
//         })
//         .then((result) => {
//             console.log(result)
//         })
//         .catch((err) => {
//             console.log(err.statusCode)
//         });
//         response.send(200).json({
//             success: 200
//         });
//     });
exports.api = functions.https.onRequest(app);