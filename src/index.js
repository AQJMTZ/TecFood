const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const sesion = requiere('express-session');
const passport = require('passport');

//Inicializa
//Inicia la base de datos
require('./database');
require('./config/passport');

//Aqui termina inicializa


//Settings(todo lo que ayuda a nuestra app ya sea paths o servicios)
app.set('port', process.env.PORT || 3000);

//Aqui termina Settings 

//Middlewares 
//Solo requiero datos
app.use(express.urlencoded({extended: false}));


//Sirve para que los formularios agregen mas metodos
app.use(methodOverride('_method'));

//Permite autenticar el usuario y guardarlo despues
app.use(sesion({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.sesion());
app.use(flash());
//aqui termina Middlewares

//Variables globales(los datos que sean accesibles)

//Routes 
app.use(require('./routes/index'));
app.use(require('./routes/customer'));


//Aqui termina rutas

//Static filers



//Server is listeting
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});