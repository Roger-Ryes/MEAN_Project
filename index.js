const express = require("express");
const cors = require("cors");
require('dotenv').config();

var pathsRouter = require('./routes/auth');

console.log(process.env)
// Create server/app of express
const app = express();

// CORS
app.use(cors());

// Lectura y parse del body
app.use(express.json());

// Paths, routing
app.use('/api/auth', pathsRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server run in port ${process.env.PORT}`)
})