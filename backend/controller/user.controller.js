import User from "../model/user.model.js";
import bcrypt from "bcrypt"
export const signup=async (req,res)=>{
    try{
        const {fullname,email,password}= req.body;
        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exist"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password:hashPassword,
        })
          await createdUser.save()
          res.status(201).json({message:"User created successfully",user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
          }})
    }catch(error){
      console.log("Error: "+error.message)
      res.status(500).json({message:"Internal server error"})
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email})
        const  isMatch = await bcrypt.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Password"})
        }else{
            res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: "+ error.message)
    }
}