const express = require ("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');

app.use(express.static("./public"));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, 'views'));


app.listen(3333, ()=> 
    console.log("esta funcionando http://localhost:3333")
);

const indexRoutes = require("./routes/indexRoutes")
const userRoutes = require("./routes/userRoutes")
const productsRoutes = require("./routes/productsRoutes")


app.use("/users",userRoutes)
app.use("/products",productsRoutes)
app.use("/",indexRoutes)


//en el crear y editar creo que no deberia ir el follow us
//falta hacer el productos
//en el loguearse esta mal puesto el continuar con google y facebook--------------
//cambiar la letra de los follow us
//en el loguarse podriamos hacer que solo el form tenga el fondo naranja
//en el index se ven corridas las imagenes