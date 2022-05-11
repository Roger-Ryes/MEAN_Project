const { response, request } = require("express");
const { validationResult } = require("express-validator");



const newAuth = (req = request, res = response) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(404).json({
    //         ok: false,
    //         errors: errors.mapped()
    //     });
    // }

    const { name, email, password } = req.body;
    return res.json({
        ok: true,
        msg: 'Crear nuevo usuario'
    });
};
const loginUser = (req, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({
            ok: false,
            errors: errors.mapped()
        })
    };
    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login user'
    })
};
const validateToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    })
};

module.exports = {
    newAuth,
    loginUser,
    validateToken
}