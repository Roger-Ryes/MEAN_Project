const { response } = require("express")


const newAuth = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Crear nuevo usuario'
    })
}
const loginUser = (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Login user'
    })
}
const validateToken = (req, res)=>{
    return res.json({
        ok: true,
        msg: 'Renew'
    })
}

module.exports = {
    newAuth,
    loginUser,
    validateToken
}