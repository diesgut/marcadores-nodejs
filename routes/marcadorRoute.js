'use strinct'

var express = require("express");
var FavoritoController = require("../controllers/marcadorController");
var api = express.Router();

//function(req, res)
api.get("/prueba/:nombre?", FavoritoController.prueba);

api.get("/marcador/:id", FavoritoController.getMarcador);
api.get("/marcadores", FavoritoController.getMarcadores);
api.post("/marcador", FavoritoController.saveMarcador);
api.put("/marcador/:id", FavoritoController.updateMarcador);
api.delete("/marcador/:id", FavoritoController.deleteMarcador);

module.exports = api;