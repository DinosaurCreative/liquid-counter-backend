const router = require('express').Router();
const { getUnknownBottles, deleteUnknownBottle, createUnknownBottle } = require('../controllers/unknownBottles');
const auth = require('../middlewares/auth');

router.get('/manually_get_unk', auth, getUnknownBottles);
router.post('/create_manually_unk', auth, createUnknownBottle);
router.delete('/manualy_dlt_unk/:id', auth, deleteUnknownBottle);

module.exports = router;
