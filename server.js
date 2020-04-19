const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', (req, res) => {
    res.send("Message list");
})

router.post('/message', (req, res) => {
    res.send("Message added");
})
// app.use('/', (req, res) => {
//     res.send('Hola')
// });

app.listen(3000);
console.log("Listening in http://localhost:3000")