const jwt = require("jsonwebtoken")


const generateJWT = (uid, name) => {

    const payload = { uid, name };
    // Se transforma el callback a Promise
    return new Promise((resolve, reject) => {
        // Es un callback
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(err);
                resolve(token);
            }
        });
    });
};

module.exports = {
    generateJWT
}