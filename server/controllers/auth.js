const User=require('../models/users.models');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const userSignup=async(req, res)=>{
    const {name, email, password, roles,experience,techStack, profilePic}=req.body;
    try {
        
       if( !email || !password){
              return res.status(400).json({msg:"Please Fill All The Fields"});
        }
        const user=await User.create({
            name,
            email,
            password,
            roles,experience,techStack,
            profilePic
        });

        res.status(201).json({
            msg:"User SignUp Successfully",
            data:user
        });
    } catch (error) {
        res.status(400).json({error});
    }
}

const userLogin=async(req, res)=>{
    try {
        const {email, password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"User NOt Found"});
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        const token=jwt.sign({id:user._id}, process.env.JWT_SECRET);
        res
        .status(200)
        .cookie('token', token)
        .json({
            token,
            user
        });
        
    } catch (error) {
        return res.status(400).json({error});
    }
}



const userLogout=(req, res)=>{
    try {
        
        res.clearCookie('token');
        
        return res.status(200)
        .json({msg:"User Logged Out Successfully"});
    } catch (error) {
        return res.status(400).json({error});
    }
}

const updateUser=async(req, res)=>{
    try {
        const userId=req.user._id;
        const{email, phoneNo, Address, profilePic,name}=req.body;
        const user=await User.findByIdAndUpdate(userId, {
            name,
            email,
            password,
            roles,experience,techStack,
            profilePic
        }, {new:true});

        res.status(200).json({
            msg:"User Updated Successfully",
            data:user
        });
        
    } catch (error) {
        return res.status(400).json({error});
    }
}

module.exports={
    userSignup,
    userLogin,
    userLogout,
    updateUser
}