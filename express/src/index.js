require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

//Start Database
require('./database');

//Start App
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({ type: 'application/*+json' }));
// app.use(bodyParser.json());

//Enable Cors
app.use(cors());

//Routes
app.use(routes);
//Listener
app.listen(8080);
