//const sessiontousermap= new Map()
const jwt= require("jsonwebtoken")
const secretkey="cyberpunkk2077@"
function setuser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email
    },secretkey)
}

function getuser(token){
    if(!token){
        return null;
    }
    try {
        return jwt.verify(token,secretkey);   
    } catch (error) {
        return null;
    }
}

module.exports={
    setuser,
    getuser
}