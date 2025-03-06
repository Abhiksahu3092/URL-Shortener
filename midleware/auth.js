const {getuser}=require("../service/auth")

//AUTHENTICATION
function checkforauth(req,res,next){
    //console.log(req.cookies);
    const authvalue= req.cookies?.uuid;
    //console.log(authvalue);
    req.user=null;
    if(!authvalue){
        return next();
    }

    const token=authvalue;
    const user=getuser(token);

    if(!user){
        return res.render("login")
    }

    req.user=user;
    return next();
}

//AUTHORIZATION
function restriction(roles=[]){
    return function(req,res,next){
        if(!req.user){
            return res.render("login");
        }

        if(!roles.includes(req.user.role)){
            return res.end("unauthorized");
        }

        return next();
    }
}

/*function onlyloggedinuser(req,res,next){
    const userid=req.cookies?.uuid;
    //const userid=req.headers["authorization"]

    if(!userid){
        return res.render("login")
    }

    //const token=userid.split("Bearer ")[1];
    const token=userid;

    const user=getuser(token) ;

    if(!user){
        return res.render("login")
    }

    req.user=user;
    next();
}

async function checkauth(req,res,next){
    const userid=req.cookies?.uuid;
    //const userid=req.headers["authorization"]
    //console.log(userid);
    //const token=userid.split("Bearer ")[1];
    const token=userid;
    const user=getuser(token);
    //console.log(user);


    req.user=user;
    next();
}*/


module.exports={
    checkforauth,
    restriction
}