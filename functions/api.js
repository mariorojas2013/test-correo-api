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
 
});
 

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);