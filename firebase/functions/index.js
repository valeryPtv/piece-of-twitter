const functions = require('firebase-functions');
const express = require('express');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users')
const { getAllScreams, postOneScream, getScream } = require('./handlers/screams')
const FBAuth = require('./util/FBAuth');

const app = express();

// Scream routes
app.post('/scream', FBAuth, postOneScream);
app.get('/screams', getAllScreams);
app.get('/scream:screamId', getScream);
// TODO delete scream
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