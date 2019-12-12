/* eslint-disable promise/always-return */
const admin = require('firebase-admin');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.addUser = functions.https.onRequest((request, response) => {

    admin.initializeApp(functions.config().firebase);
    let db = admin.firestore();
    let docRef = db.collection('users').doc();

    let setAda = docRef.set({
        first: request.query.username,
        last: 'Lovelace',
        born: 1815
    }).catch((err) => {
        response.send(("error" + err))
    })

});

exports.createUser = functions.https.onRequest(async (req, res) => {

    try {
        admin.initializeApp(functions.config().firebase);
        let db = admin.firestore();
        let users = db.collection('users');
        const currentUser = {
            "uid": req.query.uid,
            "name": req.query.name,
            "email": req.query.email,
            "password": req.query.password,
            "phone": req.query.phone,
            "days": req.query.days,
            "last_date": req.query.last_date
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
})


exports.readUsers = functions.https.onRequest((request, response) => {
    admin.initializeApp(functions.config().firebase);
    let db = admin.firestore();

    db.collection('users').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                response.send(doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
})
