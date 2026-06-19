const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

const myLogger2 = function (req, res, next) {
  console.log(`Logged at ${new Date().toLocaleString()}`);
  next();
};

app.use(myLogger);

app.use((req, res, next) => {
  console.log('Application middleware');
  next();
});

app.use('/admin', (req, res, next) => {
  console.log('Admin middleware');
  next();
});

app.get('/admin', (req, res) => {
  res.send('Hello Admin!');
});

app.get('/home', myLogger2, (req, res) => {
  res.send('Home');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000,() => {console.log("http://127.0.0.1:3000");});