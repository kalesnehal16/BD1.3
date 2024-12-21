const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/check-number', (req, res) => {
  let num = parseFloat(req.query.number);
  let result;
  if (num >= 0) result = 'Positive';
  else result = 'Negative';
  res.send('Number is ' + result);
});

app.get('/check-even-odd', (req, res) => {
  let num = parseFloat(req.query.number);
  let result;
  if (num % 2 === 0) result = 'Even';
  else result = 'Odd';
  res.send('Number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) result = 'User is Logged In';
  else result = 'User is not Logged In';
  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) result = 'User is eligible for a discount';
  else result = 'User is not eligible for a discount';
  res.send(result);
});

app.get('/check-number-type', (req, res) => {
  let num = parseFloat(req.query.number);
  let result;
  if (num < 0) result = 'Negative';
  else if (num > 0) result = 'Positive';
  else result = 'Zero';
  res.send('Number is ' + result);
});

app.get('/check-temperature', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) result = 'Cold';
  else if (temperature < 25) result = 'Warm';
  else result = 'Hot';
  res.send('Temperature is ' + result);
});

app.get('/check-activity-level', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) result = 'low';
  else if (steps < 10000) result = 'moderate';
  else result = 'high';
  res.send('Activity level is ' + result);
});

app.get('/check-engagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) result = 'low';
  else if (likes < 500) result = 'medium';
  else result = 'high';
  res.send('Engagement level is ' + result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
