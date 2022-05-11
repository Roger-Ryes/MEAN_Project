const { response, request } = require("express")


const newAuth = (req = request, res = response) => {
    const { name, email, password} =  req.body;
    console.log(name, email, password);
    return res.json({
        ok: true,
        msg: 'Crear nuevo usuario'
    })
}
const loginUser = (req, res)=>{
    const { email, password } = req.body;
    console.log(email, password)

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