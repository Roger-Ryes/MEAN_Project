const { Router } = require('express');
const { newAuth, loginUser, validateToken } = require('../controllers/auth');

const router = Router();

// Create new User
router.post('/new', newAuth);
// Login user
router.post('/', loginUser);
// Validate token
router.get('/renew', validateToken);



module.exports = router;