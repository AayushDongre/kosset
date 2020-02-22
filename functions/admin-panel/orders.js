const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, exposedHeaders: ['Content-Range', 'X-Content-Range'] }));
// admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

app.get('/orders', (req, res) => {
    try {
        if (Boolean(req.query.filter)) {
            if (Boolean(Object.keys(JSON.parse(req.query.filter)).length)) {
                db.collection('orders').where('uid', 'in', [...JSON.parse(req.query.filter).id]).get()
                    .then((snapshot) => {
                        let orderList = []
                        snapshot.forEach((doc) => {
                            let payload = doc.data();
                            payload.id = payload.orderid;
                            orderList.push(payload)
                        })
                        res.set('Access-Control-Allow-Methods', 'GET');
                        res.set('Access-Control-Allow-Headers', 'Content-Type');
                        res.set('Acess-Control-Expose-Headers', 'Content-Range');
                        // res.set('Acess-Control-Expose-Headers', 'X-Total-Count');
                        res.set('Access-Control-Max-Age', '3600');
                        res.set('Content-Range', 'bytes */500')
                        res.set('X-Total-Count', orderList.length)
                        res.send(orderList);
                    })
                    .catch((err) => {
                        console.log(err)
                        res.status(500);
                        res.send(err)
                    })

            } else {
                db.collection('orders').get()
                    .then((snapshot) => {
                        let orderList = []
                        snapshot.forEach((doc) => {
                            let payload = doc.data();
                            payload.id = payload.orderid;
                            orderList.push(payload)
                        })
                        let responseFinal = { 'orders': orderList }
                        res.set('Access-Control-Allow-Methods', 'GET');
                        res.set('Access-Control-Allow-Headers', 'Content-Type');
                        res.set('Acess-Control-Expose-Headers', 'Content-Range');
                        // res.set('Acess-Control-Expose-Headers', 'X-Total-Count');
                        res.set('Access-Control-Max-Age', '3600');
                        res.set('Content-Range', 'bytes */500')
                        res.set('X-Total-Count', orderList.length)
                        res.send(orderList);
                    })
                    .catch((err) => {
                        console.log(err)
                        res.status(500);
                        res.send(err)
                    })
            }
        } else {
            db.collection('orders').get()
                .then((snapshot) => {
                    let orderList = []
                    snapshot.forEach((doc) => {
                        let payload = doc.data();
                        payload.id = payload.orderid;
                        orderList.push(payload)
                    })
                    let responseFinal = { 'orders': orderList }
                    res.set('Access-Control-Allow-Methods', 'GET');
                    res.set('Access-Control-Allow-Headers', 'Content-Type');
                    res.set('Acess-Control-Expose-Headers', 'Content-Range');
                    // res.set('Acess-Control-Expose-Headers', 'X-Total-Count');
                    res.set('Access-Control-Max-Age', '3600');
                    res.set('Content-Range', 'bytes */500')
                    res.set('X-Total-Count', orderList.length)
                    res.send(orderList);
                })
                .catch((err) => {
                    console.log(err)
                    res.status(500);
                    res.send(err)
                })
        }
    } catch (err) {
        console.log(err)
        res.status(500);
        res.send(err);
    }
});
app.get('/orders/:uid', async (req, res) => {
    try {
        db.collection('orders').where('uid', '==', req.params.uid).get()
            .then((snapshot) => {
                let orderList = []
                snapshot.forEach((doc) => {
                    let payload = doc.data();
                    payload.id = payload.uid;
                    orderList.push(payload)
                })
                res.set('Access-Control-Allow-Methods', 'GET');
                res.set('Access-Control-Allow-Headers', 'Content-Type');
                res.set('Acess-Control-Expose-Headers', 'Content-Range');
                // res.set('Acess-Control-Expose-Headers', 'X-Total-Count');
                res.set('Access-Control-Max-Age', '3600');
                res.set('Content-Range', 'bytes */500')
                res.set('X-Total-Count', orderList.length)
                res.send(orderList);
            })
            .catch((err) => {
                console.log(err)
                res.status(500);
                res.send(err)
            })
    } catch (err) {
        console.log(err)
        res.status(500);
        res.send(err);
    }
});
app.put('/orders/:orderid', (req, res) => {
    try {
        let orders = db.collection("orders");
        const orderid = req.params.orderid

        orders.doc(orderid).update({ status: 'DELIVERED' })
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
app.delete("/orders/:orderid", (req, res) => {
    try {
        let orders = db.collection("orders");
        orders.doc(req.params.orderid).delete().then(() => {
            res.send("success");
        }).catch((err) => {
            res.send(err);
        })
    } catch (err) {
        res.send(err);
    }
})

module.exports = app;