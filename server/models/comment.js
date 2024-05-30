const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    post:{
        type:String,
        ref:'Sahil'
    },
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    parentCommentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
        default:null
    },
    replies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]


},{timestamps:true});

module.exports=mongoose.model('Comment',commentSchema);
