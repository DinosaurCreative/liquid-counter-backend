const router = require('express').Router();
const { getInventarizations, createInventarization, deleteInventarization } = require('../controllers/inventarizations');
const { createInventarizationValidation, deleteInventarizationValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.get('/', auth, getInventarizations);
router.post('/create_inventa', createInventarizationValidation, createInventarization);
router.delete('/delete_inventa', deleteInventarizationValidation, deleteInventarization);

module.exports = router;
