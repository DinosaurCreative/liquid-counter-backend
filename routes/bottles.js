const router = require('express').Router();
const {
  createBottle, getBottles, deleteBottle, updateBottle,
} = require('../controllers/bottles');
const { createBottleValidation, deleteBottleValidation, updateBottleValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.post('/bottles', auth, createBottleValidation, createBottle);
router.delete('/bottles/:id', auth, deleteBottleValidation, deleteBottle);
router.patch('/bottles/:id', auth, updateBottleValidation, updateBottle);
router.get('/', getBottles);

module.exports = router;
