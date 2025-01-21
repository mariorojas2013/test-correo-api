const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta raíz (endpoint)
app.get('/', (req, res) => {
  res.send('¡Hola desde mi API en Netlify!');
});

// Otra ruta (endpoint) para mostrar datos dinámicos
app.get('/datos', (req, res) => {
  const datos = {
    mensaje: 'Estos son algunos datos de ejemplo',
    numero: 42
  };
  res.json(datos);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});