require('dotenv').config();

const express=require('express');
const connect=require('./connect');
const path=require("path")

const urlroute=require('./routes/route');
const staticroute=require('./routes/staticroute');
const cookieparser=require("cookie-parser");

const app=express();
const port=process.env.PORT || 2000;

connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection Successful")
})

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());


app.use("/output",urlroute)
app.use("/input",staticroute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})