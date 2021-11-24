const router = require('express').Router();
const { createUser, login, signOut } = require('../controllers/users');
const { createUserValidation, loginValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

router.post('/signup', createUserValidation, createUser);
router.post('/signin', loginValidation, login);
router.delete('/signout', auth, signOut);

module.exports = router;
