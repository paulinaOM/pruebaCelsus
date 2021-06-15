const Estado = require('../models/catalogo_estado');

module.exports = {
    index: async (req, res, next) => { //GET
        const estados =  await Estado.find({}).populate('nacionalidadid');
        res.status(200).json(estados);
    },
    nuevoEstado: async (req, res, next) => { //POST
        const nuevoEstado = new Estado(req.body); 
        const estado = await nuevoEstado.save(); 
        res.status(201).json({message: 'Creado', estado: estado});
    },
    modificarEstado: async (req, res, next) => { //PUT
        const {estadoId} = req.params 
        const nuevoEstado= req.body
        const anteriorEstado = await Estado.findOneAndReplace({"_id":estadoId}, nuevoEstado);
        res.status(200).json({success: true});
    },
    eliminarEstado: async (req, res, next) => { //DELETE
        const {estadoId} = req.params 
        const anteriorEstado = await Estado.findByIdAndRemove(estadoId);
        res.status(204).json({message: 'No content'});
    },
};