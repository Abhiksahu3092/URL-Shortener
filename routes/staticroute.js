const express=require('express');
const router=express.Router();
const URL=require("../models/urlmodel");
const { restriction } = require('../midleware/auth');

router.get("/admin/allurls",restriction(["ADMIN"]),async (req,res)=>{
    if(!req.user){
        return res.render("login")
    }
    const allurls=await URL.find({})
    return res.render("home",{
        urls: allurls,
    });
})

router.get("/",restriction(["NORMAL","ADMIN"]),async (req,res)=>{
    if(!req.user){
        return res.render("login")
    }
    const allurls=await URL.find({createdby:req.user._id})
    return res.render("home",{
        urls: allurls,
    });
})

router.get("/signup", async (req,res)=>{
    return res.render("signup")
})

router.get("/login", async (req,res)=>{
    return res.render("login")
})

module.exports=router;