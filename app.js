const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3333, ()=> 
    console.log("esta funcionando http://localhost:3333")
);

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});