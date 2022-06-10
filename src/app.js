

const express = require ("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');


app.use(express.static("./public"));
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

