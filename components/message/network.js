const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    const filterUser = req.query.user || null;
    const filterChat = req.query.chat || null;
    controller.getMessages(filterUser, filterChat)
        .then((messageList) =>{
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, "Unexpected error", 500, e);
        })
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message, req.body.chat).
        then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => response.error(req, res, "Invalid info", 400, "Error in controller"))
});

router.patch('/', (req, res) => {
    console.log(req.body.id)
    controller.updateMessage(req.body.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.delete('/', (req, res) => {
    controller.deleteMessage(req.body.id)
        .then(() => {
            response.success(req, res, `User ${req.body.id} deleted`, 200);
        })
        .catch(err => response.error(req, res, 'Internal error', 500, err))
})

module.exports = router;