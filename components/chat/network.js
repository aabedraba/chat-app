const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        })
})

router.get('/', (req, res) => {
    controller.listChats(req.query.userId)
     .then(users => {
        response.success(req, res, users, 200);
     })
     .catch(err => {
         response.error(req, res, 'Internal error', 500, err);
     })
    
})

module.exports = router;