//session
const session = require("express-session");
//express
const express = require ("express");
const app = express();
//path
const path = require("path");

const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const rememberMeMiddleware = require ("./middlewares/rememberMeMiddleware");

app.use(express.static("./public"));
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Cosas que aparecen cuando logueamos(header)(session)
const usserLoggedMiddleware = require("./middlewares/usserLoggedMiddleware");
//va con lo de arriba(session)
app.use(session({
    secret: "grupo10 secret",
    resave:false,
    saveUninitialized:false
}));
app.use(cookieParser());

app.use(usserLoggedMiddleware);
/* app.use(rememberMeMiddleware); */

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, 'views'));

//Servidor funcionando(puerto)
app.listen(3333, ()=> 
    console.log("esta funcionando http://localhost:3333")
);
//Rutas 
const indexRoutes = require("./routes/indexRoutes");
const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");
const routesApiProducts = require("./routes/api/routesApiProdcuts");
const routesApiUsers = require("./routes/api/routesApiUsers")

app.use("/users",userRoutes);
app.use("/products",productsRoutes);
app.use("/api",routesApiProducts);
app.use("/api",routesApiUsers)
app.use("/",indexRoutes);
app.use((req, res, next)=>{
    res.status(404).render("error404")
})







//Product Detail Precio por mayor
//boton product detail --> carrito
//css React 


