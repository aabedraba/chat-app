const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) =>{
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, "Unexpected error", 500, e);
        })
    console.log(req.headers)
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message).
        then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => response.error(req, res, "Invalid info", 400, "Error in controller"))
});

module.exports = router;