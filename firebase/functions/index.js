const functions = require('firebase-functions');
const express = require('express');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users')
const { getAllScreams, postOneScream, getScream, deleteScream, commentOnScream, likeScream, unlikeScream } = require('./handlers/screams')
const FBAuth = require('./util/FBAuth');

const app = express();

// Scream routes
app.post('/scream', FBAuth, postOneScream);
app.get('/screams', getAllScreams);
app.get('/scream/:screamId', getScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
app.get('/scream/:screamId/like', FBAuth, likeScream);
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
app.delete('/scream/:screamId', FBAuth, deleteScream)
// TODO like a scream
// TODO unlike a scream
// TODO comment on scream

// users route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.region('europe-west1').https.onRequest(app);