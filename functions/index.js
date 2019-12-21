/* eslint-disable promise/always-return */
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const axios = require("axios")
const cors = require('cors');
const querystring = require('query-string');
const { paytmConfig } = require('./extensions/config');
const paytmChecksum = require('./extensions/checksum');


const app = express();
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
        users.doc(req.query.uid).set(currentUser).then((val) => {
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
            "cost": req.query.cost
        }
        orders.doc(req.query.address + req.query.timestamp).set(currentOrder).then(() => {
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
        const currentUser = {
            "name": req.query.name ? req.query.name : null,
            "email": req.query.email ? req.query.email : null,
            "phone": req.query.phone ? req.query.phone : null,
            "days": req.query.days ? req.query.days : null,
            "last_date": req.query.last_date ? req.query.last_date : null,
            "address": req.query.address ? req.query.address : null
        }
        let updates = Object.assign({}, req.query)

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
app.get("/status", (request, response) => {
    axios
        .post(paytmConfig.STATUS_URL, {
            MID: paytmConfig.MID,
            ORDER_ID: request.query.ORDER_ID,
            CHECKSUMHASH: request.query.CHECKSUMHASH,
        })
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`);
            response.status(res.statusCode).json(res);
        })
        .catch((error) => {
            console.error(error);
        });
})
app.post("/status", (request, response) => {
    axios
        .post(paytmConfig.STATUS_URL, {
            MID: paytmConfig.MID,
            ORDER_ID: request.query.ORDER_ID,
            CHECKSUMHASH: request.query.CHECKSUMHASH,
        })
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`);
            response.status(res.statusCode).json(res);
        })
        .catch((error) => {
            console.error(error);
        });
})
exports.api = functions.https.onRequest(app);