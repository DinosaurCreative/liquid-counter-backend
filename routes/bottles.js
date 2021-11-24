const router = require('express').Router();
const { createBottle, getBottles, deleteBottle } = require('../controllers/bottles');
const { createBottleValidation, deleteBottleValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.post('/bottles', auth, createBottleValidation, createBottle);
router.delete('/bottles/:id', auth, deleteBottleValidation, deleteBottle);

router.get('/', getBottles);

module.exports = router;
