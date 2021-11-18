const router = require('express').Router();

const { createBottle, getBottles } = require('../controllers/bottles');

router.post('/bottles', createBottle);
router.get('/bottles', getBottles);

module.exports = router;
