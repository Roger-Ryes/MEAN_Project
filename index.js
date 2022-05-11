const express = require("express");
var pathsRouter = require('./routes/auth');


// Create server/app of express
const app = express();

// Paths, routing
app.use('/api/auth', pathsRouter);


app.listen(4000, () => {
    console.log(`Server run in port ${4000}`)
})