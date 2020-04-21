const config = require('./config')
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

const db = require('./db');
db({
    url: config.dbUrl,
    user: config.dbUser, 
    password: config.dbPassword,
})

var app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
router(app);

app.use('/app', express.static('public'));

app.listen(config.port);
console.log(`Listening in http://localhost:${config.port}`)