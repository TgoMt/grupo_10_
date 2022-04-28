const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

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

/* app.post("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
}); */ 


/* app.get("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
}); */

app.post("/register", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
})

/* app.get("/login", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
 */
/* app.get("/productCart", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});
 */
/* app.get("/productDetail", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
}); */