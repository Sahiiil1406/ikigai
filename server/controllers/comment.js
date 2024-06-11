const { text } = require("express");
const Comment = require("../models/comment");

const createComment = async (req, res) => {
    try {
        const { comment } = req.body;
    
        const newComment = new Comment({
        text: comment,
        postedBy: req.user._id,
        });
        newComment.save();
    
        return res.json({
        msg: "Comment Added",
        newComment,
        });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
    }
  
    
 const addReply = async (req, res) => {
    try {
        const {commentId} = req.params;
        
        const newReply=await Comment.create({
        text:req.body.comment,
        postedBy:req.user._id,
        parentComment:commentId
        });

        await Comment.findOneAndUpdate({_id:commentId},{$push:{replies:newReply._id}})

        return res.json({
        msg: "Reply Added",
        newReply,
        });
        

        
    } catch (error) {
        return res.json({
        msg: "Error",
        error,
        });
    }
 }

 const get=async(req,res)=>{
    try {
        const postId="sahil"
       const comments= await Comment.find({  postId,parentComment: null }).populate('replies');
    
       
       return res.json({comments});
    } catch (error) {
        return res.json({msg:"Error",error});
    }
 }

 module.exports={
        createComment,
        addReply,
        get
 }