const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

let db = admin.firestore();


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
})
app.post("/updateUser", (req, res) => {
    try {
        let users = db.collection("users");
        const uid = req.query.uid
        let currentUser = req.query
        if (Boolean(currentUser.address))
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

module.exports = app;
