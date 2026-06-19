const express = require('express');
const app = express();
const port = 3000;
const router1 = require('./routes/router1');

app.use(express.static("public"));

app.use('/blog',router1);

app.get('/blog', (req, res) => {
  res.send('<h1>Hello World 2!</h1>');
});


app.get('/home',(req,res) => {
  res.sendFile("/templates/hello.html",{root: __dirname});
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/error', (req, res, next) => {
  next(new Error('Demo error'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {console.log(`http://127.0.0.1:${port}`);} );