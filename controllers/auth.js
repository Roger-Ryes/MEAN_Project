const { response, request } = require("express");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const newAuth = async (req = request, res = response) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(404).json({
    //         ok: false,
    //         errors: errors.mapped()
    //     });
    // }

    const { name, email, password } = req.body;

    try {
        // Verificar email
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "El email ya existe"
            });
        }
        // Crear usuario con el modelo
        const dbUser = new User(req.body);

        // hashear contraseña
        var salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generar el JWT(JavaWebToken)
        // Crear user en BDD
        dbUser.save();

        // Generar respuesta    
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Informar al administrador'
        });
    }


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