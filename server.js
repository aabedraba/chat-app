import express from "express";

var app = express();

app.use('/', (req, res) => {
    res.send('Hola')
});

app.listen(3000);
console.log("Listening in http://localhost:3000")