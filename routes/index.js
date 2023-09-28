const router = require('express').Router();
const { login, addUser } = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const { validateLogin, validateUser } = require('../utils/validation');
const NotFoundError = require('../utils/errors/NotFoundError');

router.post('/signin', validateLogin, login);
router.post('/signup', validateUser, addUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', (req, res, next) => next(new NotFoundError()));

module.exports = router;
