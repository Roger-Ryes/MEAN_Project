const { response, request } = require("express");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

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
        const token = await generateJWT(dbUser.uid, name) ;

        // Crear user en BDD
        dbUser.save();

        // Generar respuesta    
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
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



// Login
const loginUser = async (req, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({
            ok: false,
            errors: errors.mapped()
        })
    };
    const { email, password } = req.body;
    // console.log(`email: ${email}, password: ${password}`);

    try {
        const dbUser= await User.findOne({ email: email });
        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: "El correo no existe"
            });
        }
        // Confirmar si password hace match
        const validPass = bcrypt.compareSync(password, dbUser.password);
        if(!validPass){
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valido'
            });
        }

        // Generar el JWT
        const token = await generateJWT(dbUser.uid, dbUser.name);

        return res.status(201).json({
            ok: true,
            uid: dbUser.uid,
            name: dbUser.name,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }
};


// Validar Token
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