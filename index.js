const express=require('express');
const connect=require('./connect');
const urlroute=require('./routes/route');
const path=require("path")
const staticroute=require('./routes/staticroute');

const app=express();
const port=2000;

connect("mongodb://127.0.0.1:27017/urlshortner").then(()=>{
    console.log("Connection Successful")
})

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/output",urlroute)
app.use("/input",staticroute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})