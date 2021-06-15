const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstadoSchema = new Schema({
    nombreestado: {type: String, required: true},
    nivelderiesgo: {type: Number, required: true},
    claveestado: String,
    claveinegi: {type: Number, required: true},
    nacionalidadid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'catalogo_nacionalidad'
    },
    claveestadoburo: String
});

module.exports = mongoose.model('catalogo_estado', EstadoSchema);