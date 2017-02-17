'use strinct'

var express=require("express");

var bodyParser=require("body-parser");

var app=express();
var port=process.env.PORT || 3678;

//app.listen(3399,function(){

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //tratara como json y devolvera objeto java

							//function(req, res)
app.get("/prueba/:nombre?",(req, res)=>{

	var nombre=req.params.nombre

	res.status(200).send({
		data:[2,3,4],
		message:"Hola Mundo con node js express "+nombre
	});
});

app.listen(port,function(){
	//comilla simple no reconoce variable
	//console.log('este api rest marcadores, funciona en http://localhost:${port}');
	//comilla invertida si reconoce variable
	//console.log(`este api rest marcadores, funciona en http://localhost:${port}`);
	console.log('este api rest marcadores, funciona en http://localhost:'+port);
	console.log('bienvenido');
});