const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NacionalidadSchema = new Schema({
    nacionalidad: {type: String, required: true},
    pais: String,
    clavesit: {type: Number, required: true},
    tipo: {type: Number, required: true},
    codigopid: Number
});

NacionalidadSchema.indexes({clavesit: 1, nacionalidad: 1, pais: 1}, {unique: true});

module.exports = mongoose.model('catalogo_nacionalidad', NacionalidadSchema);