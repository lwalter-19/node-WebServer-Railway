const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
    res.send('404 Page not found')
  });

app.listen(8080, () =>{
    console.log('Aplicación corriendo en el puerto:', 8080)
});