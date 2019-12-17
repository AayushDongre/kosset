/* eslint-disable promise/always-return */
const admin = require('firebase-admin');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

exports.createUser = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        let users = db.collection('users');
        const currentUser = {
            "uid": req.query.uid,
            "name": req.query.name,
            "email": req.query.email,
            "phone": req.query.phone,
            "days": req.query.days,
            "last_date": req.query.last_date,
            "address": req.query.address ? req.query.address : ""
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
exports.fetchUser = functions.https.onRequest(async (req, res) => {
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

exports.deleteUser = functions.https.onRequest(async (req, res) => {
    try {
        let users = db.collection("users");
        users.doc(req.query.uid).delete().catch((err) => {
            res.send(err);
        })
        res.send("success");
    } catch (err) {
        res.send(err);
    }

});
exports.addOrder = functions.https.onRequest(async (req, res) => {
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
       orders.doc(req.query.address+req.query.timestamp).set(currentOrder).then(() => {
            res.send("success");
        }).catch((err) => {
            res.send(err);
        })
    } catch (err) {
        res.send(err);
    }
})

