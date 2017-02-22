'use strinct'

var Marcador = require('../models/marcador');
//function(req, res)
//app.get("/prueba/:nombre?",(req, res)=>{
function prueba(req, res) {

    var nombre = req.params.nombre;
    res.status(200).send({
        data: [2, 3, 4],
        message: "Hola Mundo con node js express " + nombre
    });
}

function getMarcador(req, res) {
    var idMarcador = req.params.id; 
    
    Marcador.findById(idMarcador,function(err,marcador){
        if(err){
            res.status(500).send({
                message: "Error al devolver el marcador"
            });
        }else{
            if(!marcador){
                res.status(404).send({
                        message: "No hay marcador"
                });
            }else{
                res.status(200).send({
                    marcador
                });   
            }


        }
    });
}

function getMarcadores(req, res) {
    console.log("Entro a get marcadores");
    Marcador.find({}).sort('-titulo').exec((err,marcadores)=>{

        if(err){
            res.status(500).send({message:"Error al devolver marcadores"});
        }else{
            if(!marcadores){
                res.status(404).send({message:"No hay marcadores"});
            }else{ 
                 res.status(200).send({marcadores});
            } 
        }

    });
}

function saveMarcador(req, res) {
    var marcador = new Marcador();
    var params = req.body;
    marcador.id = params.id;
    marcador.titulo = params.titulo;
    marcador.descripcion = params.descripcion;
    marcador.url = params.url;
    //se le envia una funcion callback como parametro
    console.log('Entro al metodo guardar');
   // console.dir(marcador);
    marcador.save((err, marcadorStored)=>{
      if(err){
          console.log('Error al guardar');
          req.status(500).send({message:'Error al guardar el marcador'});
      }else{
            console.log('Sin errores');
            res.status(200).send({
             marcador: marcadorStored
             }); 
      }

    });

}

function updateMarcador(req, res) {
    var idMarcador = req.params.id; 
    var update = req.body;
    console.log(update);
    
    Marcador.findByIdAndUpdate(idMarcador,update,(err, marcadorUpdated)=>{
        if(err){
            res.status(500).send({
                message: "Error al actualizar el marcador."
            });
        }else{
            
            res.status(200).send({
                marcador: marcadorUpdated
            }); 
            
        }
        
    });
    
}

function deleteMarcador(req, res) {
    var idMarcador = req.params.id;

    Marcador.findById(idMarcador,function(err,marcador){
        if(err){
            res.status(500).send({
                message: "Error al devolver el marcador"
            });
        } else {
             
            if(!marcador){
                res.status(404).send({
                        message: "No hay marcador"
                });
            }else{
                marcador.remove(err=>{
                    if(err){
                        res.status(500).send({
                            message:"El marcador fue eliminado"
                        }); 
                    }else{
                        res.status(200).send({
                            message:"El marcador fue eliminado"
                        });
                    }
                });
            } 
            
        }

        

    });
    
}

module.exports = {
        prueba,
        getMarcador,
        getMarcadores,
        saveMarcador,
        updateMarcador,
        deleteMarcador
}