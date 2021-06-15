const router = require('express-promise-router')();

const {
    index,
    nuevaNacionalidad,
    modificarNacionalidad,
    eliminarNacionalidad
} = require('../controllers/nacionalidad');

router.get('/',index);
router.post('/',nuevaNacionalidad);
router.put('/:nacionalidadId', modificarNacionalidad);
router.delete('/:nacionalidadId', eliminarNacionalidad);

module.exports = router;