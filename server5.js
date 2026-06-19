const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

const myLogger = function (req, res, next) {
    counter++;
    console.log(`You have logged in ${counter} times`);
    next();
};

app.get('/', myLogger, (req, res) => {
  res.send(`You have logged in ${counter} times`);
});

app.listen(port, () => {console.log(`http://127.0.0.1:${port}`);} );