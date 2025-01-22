const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const { createCanvas, loadImage } = require('canvas');
let records = [];

//Get all students
router.get('/', (req, res) => {
  const canvas = createCanvas(200, 100);
  const ctx = canvas.getContext('2d');
ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText('escribiendo algo', 50, 100);
const buffer = canvas.toBuffer('image/png');
res.writeHead(200, { 'Content-Type': 'image/png' });
res.end(buffer);
  // res.send('App is running..');
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);