const mongoose = require("mongoose");

const dbConnection = async () => {
    try {

        await mongoose.connect( process.env.BD_CNN );
        console.log("BD Online");

    } catch (error) {
        console.log(error);
        throw new Error("Error en conexion BDD");
    }
}

module.exports = {
    dbConnection
}