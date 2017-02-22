'use strinct'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarcadorSchema = Schema({
    id: String,
    titulo: String,
    descripcion: String,
    url: String
});

module.exports = mongoose.model('Marcador', MarcadorSchema);