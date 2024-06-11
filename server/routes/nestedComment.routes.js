const express = require("express");
const router=express.Router();
const auth=require('../middleware/auth');

const {createComment,addReply,get}=require('../controllers/comment.js');

router.post('/comment',auth,createComment);
router.post('/reply/:commentId',auth,addReply);
router.get('/get',get);

module.exports=router;