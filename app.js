import express from "express";
import hbs from "hbs";
import path from 'path';
import "dotenv/config";



const __dirname = path.resolve();
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') )


app.get('/', (req, res) => { 
    res.render('home', {
        nombre: 'Luis Angel',
        titulo: 'Curso de Node'
    })
})


app.get('/generic', (req, res) => { 
    res.render('generic', {
        nombre: 'Luis Angel',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => { 
    res.render('elements', {
        nombre: 'Luis Angel',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => { 
    res.sendFile( __dirname + '/public/404.html')
})



app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${ port }`)
})