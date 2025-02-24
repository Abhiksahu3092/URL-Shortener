const {getuser}=require("../service/auth")
function onlyloggedinuser(req,res,next){
    const userid=req.cookies?.uuid;

    if(!userid){
        return res.render("login")
    }

    const user=getuser(userid);

    if(!user){
        return res.render("login")
    }

    req.user=user;
    next();
}

async function checkauth(req,res,next){
    const userid=req.cookies?.uuid;


    const user=getuser(userid);


    req.user=user;
    next();
}
module.exports={
    onlyloggedinuser,
    checkauth
}