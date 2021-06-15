const Nacionalidad = require('../models/catalogo_nacionalidad');

module.exports = {
    index: async (req, res, next) => { //GET
        const nacionalidades =  await Nacionalidad.find({});
        res.status(200).json(nacionalidades);
    },
    nuevaNacionalidad: async (req, res, next) => { //POST
        const nuevaNacionalidad = new Nacionalidad(req.body); 
        const nacionalidad = await nuevaNacionalidad.save(); 
        res.status(201).json({message: 'Creado', nacionalidad: nacionalidad});
    },
    modificarNacionalidad: async (req, res, next) => { //PUT
        const {nacionalidadId} = req.params 
        const nuevaNacionalidad= req.body
        const anteriorNacionalidad = await Nacionalidad.findOneAndReplace({"_id":nacionalidadId}, nuevaNacionalidad);
        res.status(200).json({success: true});
    },
    eliminarNacionalidad: async (req, res, next) => { //DELETE
        const {nacionalidadId} = req.params 
        const anteriorNacionalidad = await Nacionalidad.findByIdAndRemove(nacionalidadId);
        res.status(204).json({message: 'No content'});
    },
};