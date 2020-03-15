const express = require('express');
const cors = require('cors');

//Controllers
const NewGame = require('./controllers/newGame');

//Services
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();

const app = express();

app.use(cors({ origin: '*' }));

/**
 * @route /new
 * @description creates a new game in the database and returns the game id as response.
 */
app.post('/new', NewGame(firestore));

module.exports = app;