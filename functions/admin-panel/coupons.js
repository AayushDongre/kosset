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

app.get('/coupons', (req, res) => {
    try {
        db.collection('coupons').get()
            .then((snapshot) => {
                let couponList = []
                snapshot.forEach((doc) => {
                    let payload = doc.data();
                    payload.id = payload.name
                    couponList.push(payload)
                })
                res.set('Access-Control-Allow-Methods', 'GET');
                res.set('Access-Control-Allow-Headers', 'Content-Type');
                res.set('Acess-Control-Expose-Headers', 'Content-Range');
                res.set('Access-Control-Max-Age', '3600');
                res.set('Content-Range', 'bytes */500')
                res.set('X-Total-Count', couponList.length)
                res.send(couponList);
            })
            .catch((err) => {
                res.status(500);
                res.send(err)
            })
    } catch (err) {
        res.status(500);
        res.send(err)
    }
})
app.get('/coupons/:name', async (req, res) => {
    try {
        db.collection('coupons').where('name', '==', req.params.name).get()
            .then((snapshot) => {
                let responseFinal = {}
                snapshot.forEach((doc) => {
                    let payload = doc.data();
                    payload.id = payload.name
                    responseFinal = payload
                })
                res.set('Access-Control-Allow-Methods', 'GET');
                res.set('Access-Control-Allow-Headers', 'Content-Type');
                res.set('Acess-Control-Expose-Headers', 'Content-Range');
                // res.set('Acess-Control-Expose-Headers', 'X-Total-Count');
                res.set('Access-Control-Max-Age', '3600');
                res.set('Content-Range', 'bytes */500')
                res.set('X-Total-Count', 1)
                res.send(responseFinal);
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
app.delete('/coupons/:name', (req, res) => {
    try {
        let coupons = db.collection("coupons");

        coupons.doc(req.params.name).delete().then(() => {
            res.send({ "data":null });
        }).catch((err) => {
            res.send(err);
        })

    } catch (err) {
        res.send(err);
    }
})
app.put('/coupons/:name', (req, res) => {
    try {
        let coupons = db.collection("coupons");
        const name = req.params.name

        coupons.doc(name).update({ ...req.body })
            .then(() => {
                res.status(200)
                res.send({ "data": {...req.body} })
            })
            .catch((err) => {
                res.send(err)
            })

    } catch (err) {
        console.log(err)
        res.send(err);
    }
})
app.post('/coupons', (req, res) => {
    try {
        let coupons = db.collection('coupons');
        const currentCoupon = {
            "name": req.body.name,
            "discount": {
                "percentage": req.body.discount.percentage,
                "total": req.body.discount.total,
                "delivery": req.body.discount.delivery
            }
        }
        coupons.doc(req.body.name).set(currentCoupon).then((val) => {
            res.status(200);
            res.send({ "data":currentCoupon });
        }).catch((err) => {
            res.send(err);
        })
    } catch (err) {
        console.log(err)
        res.status(500);
        res.send(err);
    }

})
module.exports = app;