require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

// Servir el contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });

app.listen(port, () =>{
    console.log(`Aplication runing in Port: ${port}`)
});