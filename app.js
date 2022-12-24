require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

// TODO: require('hbs')
app.set('view engine', 'hbs');

// Servir el contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Hazael López',
        title: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });

app.listen(port, () =>{
    console.log(`Aplication runing in Port: ${port}`)
});