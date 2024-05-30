const express = require("express");
const router=express.Router();
const auth=require('../middleware/auth');

const {createComment,addReply,getComment}=require('../controllers/nestedComments');


router.post('/comment',auth,createComment);
router.post('/reply/:id',auth,addReply);
router.get('/get',getComment);


module.exports=router;