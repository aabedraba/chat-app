const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers)
    response.success(req, res, 'Message list');
})

router.post('/message', (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok"){
        response.error(req, res, "Simulated error", 400);
    } else {
        response.success(req, res, 'Created correctly', 201)
    }
    
})

app.listen(3000);
console.log("Listening in http://localhost:3000")