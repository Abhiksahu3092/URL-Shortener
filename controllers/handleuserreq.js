const user=require("../models/usermodel")
const {v4:uuidv4}=require("uuid")
const {setuser}=require("../service/auth")

//post req;
async function handleusersignup(req,res) { 
    const {name,email,password}=req.body;
    await user.create({
        name,
        email,
        password
    });
    return res.render("home");
}

async function handleuserlogin(req,res){
    const {name,email,password}=req.body;
    //console.log(req.body);
    const loggeduser=await user.findOne({email,password});
    //console.log(logggeduser)
    if(!loggeduser){
        return res.render("login");
    }
    
    const sessionid=uuidv4();
    setuser(sessionid,loggeduser);

    const token=setuser(loggeduser)
    res.cookie("uuid",token)

    return res.redirect("/input");
    //return res.json({token})

}

module.exports={
    handleusersignup,
    handleuserlogin
}