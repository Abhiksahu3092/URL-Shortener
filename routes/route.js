const express=require('express');
const {handlepostreq,handlegetreq,handleanalyticreq}=require('../controllers/handleurlreq');
const router=express.Router();

router.route('/').post(handlepostreq)
router.route('/:url').get(handlegetreq)
router.route('/analytics/:url').get(handleanalyticreq)

module.exports=router;