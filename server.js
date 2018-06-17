const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+ '/public'));
app.use(express.static(__dirname + '/views'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
//app.use('/assets', express.static(__dirname + '/public/assets/img')); // redirect JS jQuery

// app.get('/',  (req, res) => {
//     // res.send('Hola mundo')
//      let salida = {
//          nombre: 'Josue',
//          edad: 19,
//          url: req.url
//      }
//      res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('Hola data')
// });



app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'josue',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
    });
});

// app.get('/data', (req, res) => {
//     res.send('Hola data')
// });


app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});