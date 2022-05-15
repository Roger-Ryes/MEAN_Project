const { Router } = require('express');
const { body, check } = require('express-validator');
const { newAuth, loginUser, validateToken } = require('../controllers/auth');
const { validateCamp } = require('../middlewares/validate-camp');

const router = Router();

// Create new User
router.post('/new',
    check("name", "El Nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La Contraseña es obligatorio").isLength({min: 5}),
    validateCamp,
    newAuth);
// Login user
router.post('/',
    check('email', "El email es obligatorio").isEmail(),
    check('password', "La contraseña es obligatoria").isLength({ min: 5 }),
    loginUser
);
// Validate token
router.get('/renew', validateToken);



module.exports = router;