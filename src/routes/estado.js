const router = require('express-promise-router')();

const {
    index,
    nuevoEstado,
    modificarEstado,
    eliminarEstado
} = require('../controllers/estado');

router.get('/',index);
router.post('/',nuevoEstado);
router.put('/:estadoId', modificarEstado);
router.delete('/:estadoId', eliminarEstado);

module.exports = router;