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
app.use(bodyParser.json());
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
//Enable Cors
app.use(cors(corsOptions));

//Routes
app.use(routes);
//Listener
app.listen(8080);
