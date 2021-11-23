const router = require('express').Router();
const { createBottle, getBottles } = require('../controllers/bottles');
const { createBottleValidation } = require('../middlewares/validators');

router.post('/bottles', createBottleValidation, createBottle);

router.get('/', getBottles);

module.exports = router;
