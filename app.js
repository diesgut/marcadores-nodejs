'use strinct'

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var api = require('./routes/marcadorRoute')

//app.listen(3399,function(){

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //tratara como json y devolvera objeto java
/*Compatibilidad y errores cross domain*/
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
     
    next();
});

app.use('/api', api);


module.exports = app;