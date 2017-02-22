'use strinct'

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var api = require('./routes/marcadorRoute')

//app.listen(3399,function(){

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //tratara como json y devolvera objeto java
app.use('/api', api);


module.exports = app;