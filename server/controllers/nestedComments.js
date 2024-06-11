/* const Comment = require('../models/comment');


const createComment=(req,res)=>{
    try {
        const {comment}=req.body;

        const newComment=new Comment({
            comment,
            user:req.user._id
        });
        newComment.save();

        return res.json({
            msg:"Comment Added",
            newComment
        })
        
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}

const addReply=async(req,res)=>{
    try {
        const {comment}=req.body;
        const parentCommentId=req.params.id;
        //console.log(comment,parentCommentId)
        //convert parentCommentId to ObjectId
        const parentComment=await Comment.findById(parentCommentId);
        console.log(parentComment)
        const reply=new Comment({
            comment,
            user:req.user.id,
            parentCommentId:parentComment._id
        });
        
        parentComment.replies.push(reply);
        await parentComment.save();
        return res.json({
            msg:"Reply Added",
            reply
        })
        
    } catch (error) {
        return res.json({
            msg:"Error",
            error
        })
    }
}

const getComment=async(req,res)=>{
    try {
        //const {id}=req.params;
        const a=[{
            $match: {
              parentCommentId: null
            }
          },{
          $lookup: {
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: 'author',
            pipeline:[{
               $project:{
                 email:1
               }
            }]
          }
        },{
        $unwind: {
          path: '$replies',
        }
        },{
          $lookup: {
            from: 'comments',
            localField: 'replies',
            foreignField: '_id',
            as: "reply",
            pipeline:[{
              $lookup:{
              from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: "author",
            pipeline:[{
              $project:{
                email:1
              }
            }]
              }
            },{
              $project:{
                 comment:1,
                replies:1,
                author:1
              }
            },{
            $lookup:{
            from: 'comments',
            localField: 'replies',
            foreignField: '_id',
            as: "reply",
              pipeline:[{
                $lookup:{
            from: 'users',
            localField: 'user',
            foreignField: '_id',
            as: "author",
                pipeline:[{
                  $project:{
                      email:1
                  }
                }]}
              },{
                  $project:{
                      createdAt:0,
                    updatedAt:0,
                    parentCommentId:0,
                    user:0,
                    __v:0
                  }
              }]
        }
            },{
        $project:{
            replies:0
        }
            }]
          }
        },{
        $sort: {
          updatedAt: -1
        }
        },{
        $project: {
          createdAt:0,
          updatedAt:0,
          parentCommentId:0,
          user:0,
          replies:0,
          __v:0
        }},
         {
           $group: {
             _id:{
               id:"$_id",
               comment:"$comment",
               author:"$author"
             },
             reply: {
               $push: "$reply"
             }
           }
         },{
           $project: {
             reply:1,
             _id:"$_id.id",
             comment:"$_id.comment",
             author:"$_id.author",
           }
         }
        ]
        const comment=await Comment.aggregate(a)
        return res.json({
            comment
        })

    } catch (error) {
        return res.status(500).json({
            msg:error.message
        })
    }}

 const deleteAll=async(req,res)=>{
    try {
        const comment=await Comment.deleteMany({});
        return res.json({
            msg:"Comment Deleted",
            comment
        })
    }
    catch(error){
        return res.status(500).json({
            msg:error.message
        })
    }   }

    const getAll=async(req,res)=>{
     const comment=await Comment.find({});
      return res.json({
          comment
      })
    }
module.exports={
    createComment,
    addReply,
    getComment,
    deleteAll,
    getAll
}
/*
 */ */