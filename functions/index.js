/* eslint-disable promise/always-return */
const admin = require('firebase-admin');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.addUser = functions.https.onRequest((request, response) => {

    admin.initializeApp(functions.config().firebase);
    let db = admin.firestore();
    let docRef = db.collection('users');

    let setAda = docRef.set({
        first: request.query.username,
        last: 'Lovelace',
        born: 1815
    }).catch((err)=>{
        response.send(("error" + err))
    })

});



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
