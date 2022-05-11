const express = require("express");
const cors = require("cors");

var pathsRouter = require('./routes/auth');


// Create server/app of express
const app = express();

// CORS
app.use( cors() );

// Lectura y parse del body
app.use( express.json() );

// Paths, routing
app.use('/api/auth', pathsRouter);


app.listen(4000, () => {
    console.log(`Server run in port ${4000}`)
})