import User from "../models/user.js"
import bcrypt from "bcrypt"
import generateTokenAndSetCookie from "../services/auth.js"

export const signup=async(req,res)=>
{
    try {
        const {name,username,email,password,confirmPassword,gender}=req.body
        //if password doesn't matches confirm password
        if(password!=confirmPassword)
        {
            return res.status(404).json({error:"Passwords dont match"})
        }
        

        //if user with a username already exists, return 404 page with error
        const user= await User.findOne({username})
        if(user)
        {
            return res.status(404).json({error:"User already exists !!"})
        }

        
        //Hashing the password
        const salt=await bcrypt.genSalt(10); //generate random string of 10 char(salt)
        const hashedPassword=await bcrypt.hash(password,salt) //password that we received from req.body



        //The below urls will generate diff profile pic of boys and girls acc to username
        const boyprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        //adding new user to the db
        const newUser=await User.create({
            name,
            username,
            email,
            password:hashedPassword,
            gender,
            //profile pic acc to gender
            profilePicUrl:gender==="male"?boyprofilePic:girlprofilePic,
        })

        //new user created successfully-> To test in postman
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            username:newUser.username,
            profilePicUrl:newUser.profilePicUrl,
        })

    } catch (error) {
        console.log("Error in signup controller",error.message)
        res.status(500).json({error:"Server error"})
    }
}

export const login=async(req,res)=>
{
    try {
        const {username,password}=req.body
        const user= await User.findOne({username})
        const comparePassword=await bcrypt.compare(password,user?.password || "") //comparing password entered by user and pass stored in database using bcrypt


        if(!user || !comparePassword) 
        {
        res.status(400).json({error:"Invalid Credentials or password"})
        }

        const token=generateTokenAndSetCookie(user._id,res)

        res.status(200).json({
            id:user._id,
            name:user.name,
            username:user.username,
            email:user.email,
            profilePicUrl:user.profilePicUrl,
        })
        
    } catch (error) {
        console.log("Error in login controller",error.message)
        res.status(500).json({error:"Server error"})
    }
    
}

export const logout=(req,res)=>
{
   try {
     res.clearCookie("token")
     res.status(200).json({message:"Logged out successfully!!"})
   } 
   catch (error) {
    console.log("Error in logput controller",error.message)
    res.status(500).json({error:"Server error"})
   } 
  
}
