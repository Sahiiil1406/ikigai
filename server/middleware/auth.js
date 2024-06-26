
const User=require('../models/users.models');
const jwt=require('jsonwebtoken');

const auth=async(req, res, next)=>{
    try {
       // console.log("middke ware")
        
        const token=req.cookies.token;
       // console.log(token)
        if(!token){
            return res.status(401).json({msg:"No Token, Authorization Denied"});
        }
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        const user=await User.findOne({_id:decoded.id})
       // console.log(user)
        if(!user){
            return res.status(400).json({msg:"User Not Found"});
        }
        req.user=user;
        next();

} catch (error) {
        res.status(401).send({error});
    }
}

module.exports=auth;