require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// TODO: require('hbs')
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir el contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Hazael López',
        title: 'Curso de Node'
    });
});

app.get('/home', (req, res) => {
    res.render('home', {
        nombre: 'Hazael López',
        title: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Hazael López',
        title: 'Curso de Node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Hazael López',
        title: 'Curso de Node'
    })
});

app.get('*', (req, res) => {
    res.render(__dirname + '/public/404.html', {
        nombre: '404. Page Not Found',
        title: 'Error: 404'
    })
  });

app.listen(port, () =>{
    console.log(`Aplication runing in Port: ${port}`)
});