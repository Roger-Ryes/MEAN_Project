const { Router } = require('express');

const router = Router();

// Create new User
router.post('/new', (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Crear usuario'
    })
});
// Login user
router.post('/', (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Login user'
    })
});
// Validate token
router.get('/renew', (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Renew'
    })
});



module.exports = router;