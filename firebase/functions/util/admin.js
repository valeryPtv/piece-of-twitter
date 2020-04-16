const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore()
// const firebase = require('firebase')
//
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

/*
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://socialape228.firebaseio.com"
});
*/

module.exports = { admin, db };