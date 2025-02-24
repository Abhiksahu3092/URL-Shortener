const express=require('express');
const router=express.Router();
const {handleusersignup,handleuserlogin}=require("../controllers/handleuserreq")

router.route("/").post(handleusersignup);
router.route("/login").post(handleuserlogin);

module.exports=router;