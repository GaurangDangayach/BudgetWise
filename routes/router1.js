const express = require('express');

const router1 = express.Router();

router1.get('/', (req, res) => {
  res.send('<h1>Welcome to blog!</h1>');
});

router1.get('/settings', (req, res) => {
  res.send('<h1>these are settings!</h1>');
});

router1.get('/:topic', (req, res) => {
  res.send(`This is my new topic: ${req.params.topic}`);
});

module.exports = router1;

