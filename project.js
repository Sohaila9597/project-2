const express =require ("express");
const app=("express");

app,use(express.json());
app,use(express.urlencoded({extended: true}));
app.use(express.static('upload'));
const cors = require ("cors");
app.use(cors());

const auth= require("./routes/auth");
const books= require("./routes/books");

app.listen(3307,"localhost",() => {
console.log("SERVER IS RUNNING");
})

app.use ("/auth",auth);
app.use ("/movies",movies);


