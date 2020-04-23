const config = require('./config')
const express = require('express');
const app = express();
//const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket')
const router = require('./network/routes');
const db = require('./db');

db({
    url: config.dbUrl,
    user: config.dbUser, 
    password: config.dbPassword,
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//socket.connect(server);

router(app);

app.use('/app', express.static('public'));

app.listen(config.port, () => {
    console.log(`Listening in http://localhost:${config.port}`)
});