const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));


admin.initializeApp(functions.config().firebase);

const paymentGateway = require('./website/paymentGateway');
const users = require('./website/users');
const orders = require('./website/orders');
app.use('/', paymentGateway);
app.use('/', users);
app.use('/', orders);
exports.api = functions.https.onRequest(app);

const adminAPI = require('./admin-panel');
exports.admin = adminAPI.admin