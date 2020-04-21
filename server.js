const config = require('./config')
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');


var app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
router(app);

app.use('/app', express.static('public'));

app.listen(config.port);
console.log(`Listening in http://localhost:${config.port}`)