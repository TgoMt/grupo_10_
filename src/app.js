const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, 'views'));


app.listen(3333, ()=> 
    console.log("esta funcionando http://localhost:3333")
);

const indexRoutes = require("./routes/indexRoutes")
const userRoutes = require("./routes/userRoutes")
const productCartRoutes = require("./routes/productCartRoutes")
const productDetailRoutes = require("./routes/productDetailRoutes")

app.use("/",indexRoutes)
app.use("/users",userRoutes)
app.use("/cart",productCartRoutes)
app.use("/detail",productDetailRoutes)





/* 
app.post("/register", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
}) */

