const { response, request } = require("express");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");
const { findOne } = require("../models/user");


// Crear User
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
        const token = await generateJWT(dbUser._id, name);

        // Crear user en BDD
        dbUser.save();

        // Generar respuesta    
        return res.status(201).json({
            ok: true,
            uid: dbUser._id,
            name,
            email,
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
        const dbUser = await User.findOne({ email: email });
        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: "El correo no existe"
            });
        }
        // Confirmar si password hace match
        const validPass = bcrypt.compareSync(password, dbUser.password);
        if (!validPass) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valido'
            });
        }

        // Generar el JWT
        const token = await generateJWT(dbUser._id, dbUser.name);

        return res.status(201).json({
            ok: true,
            uid: dbUser._id,
            name: dbUser.name,
            email: dbUser.email,
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
const validateToken = async (req = request, res = response) => {
    const { uid, name } = req;
    try {
        // Consulta a BD
        const db = await User.findOne({ _id: uid })
        if(!db){
            return res.status(501).json({
                ok: false,
                msg: "No existe uid"
            })
        }
        return res.status(201).json({
            ok: true,
            uid: uid,
            name: name,
            email: db.email
        })
    } catch (error) {
        return res.status(501).json({
            ok: false,
            msg: "Consulta con administrador"
        })
    }
};

// Revalidar Token
const reValidateToken = async (req = request, res = response) => {

    const { uid, name } = req.body;

    try {
        // Conexion BD
        const bd = await User.findOne({ _id: uid });
        if (!bd) {
            res.status(401).json({
                ok: false,
                msg: "No existe usuario"
            })
        }
        // Generate Token
        const token = await generateJWT(uid, name);
        return res.json({
            ok: true,
            uid: uid,
            name: name,
            token
        })
    } catch (error) {
        res.status(501).json({
            ok: false,
            msg: "Comunicarse con Administrador"
        })
    }

};

module.exports = {
    newAuth,
    loginUser,
    validateToken,
    reValidateToken
}