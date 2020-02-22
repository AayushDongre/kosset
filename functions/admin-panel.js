const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const users = require('./admin-panel/users');
const orders = require('./admin-panel/orders');
const app = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, exposedHeaders: ['Content-Range', 'X-Content-Range'] }));

app.use('/', users);
app.use('/', orders);


exports.admin = functions.https.onRequest(app);