const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3333, ()=> 
    console.log("esta funcionando http://localhost:3333")
);

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.post("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});
app.post("/register", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
})

app.get("/login", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get("/productCart", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

app.get("/productDetail", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});