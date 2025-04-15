const express=require('express');
const router=express.Router();
const URL=require("../models/urlmodel");
const urlmodel=require("../models/urlmodel")

router.get("/",async (req,res)=>{
    const allurls = await URL.find({})
    const shortid = req.query.urlid;
    let url=null;
    if(shortid){
        url = shortid
    }
    return res.render("home",{
        urls: allurls,
        id: url
    });
})


module.exports=router;