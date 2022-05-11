const { request, response } = require("express");
const { validationResult } = require("express-validator");


const validateCamp = (req = request, res = response, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    // Si todo es ok, procede al siguiente middleware
    next();
}

module.exports = {
    validateCamp
}