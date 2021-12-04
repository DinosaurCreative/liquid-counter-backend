const router = require('express').Router();
const {
  getInventarizations, createInventarization, deleteInventarization, getCertainInventarization,
} = require('../controllers/inventarizations');
const { createInventarizationValidation, deleteInventarizationValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.get('/inventa', auth, getInventarizations);
router.get('/inventa/:id', auth, getCertainInventarization);
router.post('/create_inventa', createInventarizationValidation, createInventarization);
router.delete('/delete_inventa/:id', deleteInventarizationValidation, deleteInventarization);

module.exports = router;
