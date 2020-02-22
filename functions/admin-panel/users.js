const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, exposedHeaders: ['Content-Range', 'X-Content-Range'] }));
let db = admin.firestore();

app.get('/users', async (req, res) => {
    try {

        db.collection('users').get()
            .then((snapshot) => {
                let userList = []
                snapshot.forEach((doc) => {
                    let payload = doc.data();
                    payload.id = payload.uid
                    userList.push(payload)
                })
                res.set('Access-Control-Allow-Methods', 'GET');
                res.set('Access-Control-Allow-Headers', 'Content-Type');
                res.set('Acess-Control-Expose-Headers', 'Content-Range');
                // res.set('Acess-Control-Expose-Headers', 'X-Total-Count');
                res.set('Access-Control-Max-Age', '3600');
                res.set('Content-Range', 'bytes */500')
                res.set('X-Total-Count', userList.length)
                res.send(userList);
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
app.get('/users/:uid', async (req, res) => {
    try {
        db.collection('users').where('uid', '==', req.params.uid).get()
            .then((snapshot) => {
                let responseFinal = {}
                snapshot.forEach((doc) => {
                    let payload = doc.data();
                    payload.id = payload.uid
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

module.exports = app;