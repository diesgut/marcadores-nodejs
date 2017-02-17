'use strinct'


//function(req, res)
//app.get("/prueba/:nombre?",(req, res)=>{
function prueba(req, res) {

    var nombre = req.params.nombre;

    res.status(200).send({
        data: [2, 3, 4],
        message: "Hola Mundo con node js express " + nombre
    });

}

module.exports = {
    prueba
}