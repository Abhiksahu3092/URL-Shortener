const sessiontousermap= new Map()

function setuser(id,user){
    sessiontousermap.set(id,user);
}

function getuser(id){
    return sessiontousermap.get(id);
}

module.exports={
    setuser,
    getuser
}