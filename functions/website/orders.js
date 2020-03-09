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
            "orderid": req.query.orderid,
            "paymentMode":req.query.paymentMode,
            "status":req.query.status
        }
        orders.doc(req.query.orderid).set(currentOrder).then(() => {

            db.collection('mail').add({
                to: [ "support@sudodevs.com","support@kossetcare.com"],
                // to: [ "support@sudodevs.com",],
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

module.exports = app;
