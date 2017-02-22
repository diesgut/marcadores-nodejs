'use strinct'

var app=require("./app.js");
var port=process.env.PORT || 3678;
var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/marcadores_db",(err,res)=>{
	if(err){
                console.log('Error al conectarse');
		throw err;
	}else{
		console.log('Conexión a MongoDB correcta');
		app.listen(port,function(){
			//comilla simple no reconoce variable
			//console.log('este api rest marcadores, funciona en http://localhost:${port}');
			//comilla invertida si reconoce variable
			//console.log(`este api rest marcadores, funciona en http://localhost:${port}`);
			console.log('este api rest marcadores, funciona en http://localhost:'+port);
			console.log('bienvenido');
			console.log('ejemplo http://localhost:3678/api/prueba/diego');
		});
		
	}
});


