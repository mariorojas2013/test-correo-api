const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];

//Get all students
router.get('/', (req, res) => {

 const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');

    // Cargar la imagen
    const img = new Image();
        ctx.drawImage(img, 10, 10); // Dibujar la imagen en la posición 10, 10
        // Dibujar el texto
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText('escribiendo algo', 50, 100);
   
   
    img.src = 'https://lh3.googleusercontent.com/fife/ALs6j_E3DCqRWBJn_zb1SB1X2LQu0874UpaAgh-eHZeCvBNmfzevdc7fagoDHP1uY0Li1EuhlZaJ8tPVCK8iRIZpUA_nWN9whl4bPy_BobaRQZ_5E7duwp05NiPFB6z4YFQjUJTxvSte9nSuprhT1QMbyA69CEw3dYa23h2B9MetlikKOLEwO6xeexDIpJR4yt6rMLJFEYz0cneos4qlC7naqXkXyxHsX-g_HF90YuUDsikQEk8KZXqC3J3DnIZ0f6wWo23GRPP3R_d2T035_Nyd5D-0rIqijYIPATdhJyeq4gFYbbZYlEVu0nJyNVvKu7YV_Vxj9__JK3vMtq5KfjnIFAe9SYtpnktKVbBnhcH5XClB1Pt8YGgfsZYxzKqcNyabVA2eSrGWvO9SC5nUjANnXG7FIesdvz8X78JzY6_BJRkWE1c-sYp2qOor1yjHFKIheRJfnLgzw9dn-iZHsLUTBZTt60UKBwc1W9PRWdJCG7R84cy_kfpQpW0ZfD2T34rDCcVTCcU456B6_faRRLeh01JpKcnZBtO9I07NSJcYnbdE83OuzPlZzxGaNhCCuFA6IxWfYD5RRlYkU-_K3vr_NNkPT9qUq-wLaiuhBa0EXWk66-6LlAkYQX46-aNUMsgJ9oGJcwGq0QLR704lZFveBjj4OFHyf03cX_2fFm5iPvQR0ZrSvAxKMDtyDjK1Q4n4K_TkXljFa0ItB1jr0l78xOffM6NpAmEQxfKa00_6Uq6_DCIjJ2iF8cQpa-X_hgq83L1FLz6a7nXwy2ggb0I364TokYc5b9IWbTKi-tM_nq8gI-NR6Ed-M8ekngosunMmrWbe5drD83elt-jGhSE65wNJaBY_QFsdPmR6CitRSly3EMzYAnJsNoxJgGegZxrMxO7JRZeAo4xnf_HRihLnaKUcufYiCg_wgiAkERRP_XEmb7wSWYxldTOGJPY69yj6VhM0OwL7CwD6eeY_dQmIOpagE3UZaXfoSWbR0KJihr_IFBmDsuqv9P8AwNU4OmnQwKVAMjfo9RWfRS5Ev3CxMUnFvhbOM5A2KvCUA43JV2lYQdPWX9aavikab92gokMx_TbtDQ8QDGRnPoSrud18IZL23qtq6YsVgLRmyp4i7NI9voa2b0KsZziVqgeJTp-wT89K5WHf3fLKUExo2ylW2rE94h06bgGDj8UpO_RCqydWpwDME4EC3k7kBKa-i8yZTn1eFpfUROq23Z2MZhRKbInbJbARgV6ple64Kuq9040kGCNWczEca0awtv7IF7iHWtCvuDn7q58C5RIAgRKWYhjuagz5q5PBp0ZBZMJaHyHrkzT0E5W78iCBSmbUNRawrvQ1TAx4FktzyFSaWJwxrHAAnRFo4ajSXGqNY_Plg0rciWCEFupmFKDH3JZsJlJB9A5bHd0Pw3VFKyre-Gs1owOEAi8l9J_wZnvzL4ccl44tz9YKA0gps6Zh2Mx4rOOooetU3IoqZoLdva48fm8QWbic20waJxBsV-ks16EA8O44vjPiM-UUzQ5oQ9EMVycJY1BlNlCrM9hMfOZMq-vrOa2LbYqvhBaJxOXhs7rR7lNQy60ak20HCV7GPdck2Txu9zbMIN-Y8YTGFztUKa8=w1920-h912'; // Reemplaza con la ruta de tu imagen
  
  //  const canvas = Canvas.createCanvas(200, 100);
  // const ctx = canvas.getContext('2d');
  // ctx.fillStyle = 'blue';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

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
