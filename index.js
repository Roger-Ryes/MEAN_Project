const express = require("express");

// Create server/app of express
const app = express();

// GET
app.get('/', (req, res) => {
    // res.send("Hello world");
    res.status(200).json({
        ok:true, 
        msg: "Todo bien"
    })
})

app.listen(4000, () => {
    console.log(`Server run in port ${4000}`)
})