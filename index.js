const express=require('express');
const connect=require('./connect');
const urlroute=require('./routes/route');

const app=express();
const port=2000;

connect("mongodb://127.0.0.1:27017/urlshortner").then(()=>{
    console.log("Connection Successful")
})

app.use(express.json());

app.use("/",urlroute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})