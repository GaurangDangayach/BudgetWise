const express = require('express');
const app = express();
const port = 3000;

app.use('/user/:username/profile', (req, res, next) => {
  console.log('Admin middleware');
  next();
});

app.get('/login', myLogger, (req, res) => {
  res.send('Logged In');
});

app.get('/user/logout', (req, res) => {
  res.send(`<h1>You are logged out</h1>`);
});

app.get('/user/:username', (req, res) => {
  res.send(`<h1>Hello ${req.params.username}</h1>`);
});

app.get('/user/:username/profile', (req, res) => {
  res.send(`<h1>This is profile of ${req.params.username}</h1>`);
});

app.listen(port, () => {console.log(`http://127.0.0.1:${port}`);} );