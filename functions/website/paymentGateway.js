const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const url = require('url')
const fetch = require('node-fetch');
const { paytmConfig } = require('../extensions/config');
const paytmChecksum = require('../extensions/checksum');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));


let db = admin.firestore();



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
        console.log(request.body)
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

module.exports = app;