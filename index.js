const express = require("express");
const cors = require("cors");
require('dotenv').config();
const { dbConnection } = require("./db/config");

var pathsRouter = require('./routes/auth');

// console.log(process.env)
// Create server/app of express
const app = express();

// Base de datos
dbConnection(); 


// Directory public
app.use( express.static("public") );

// CORS
app.use(cors());

// Lectura y parse del body
app.use(express.json());

// Paths, routing
app.use('/api/auth', pathsRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server run in port ${process.env.PORT}`)
})