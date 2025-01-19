import User from "../models/user.js"
export const getUsers=async(req,res)=>
{
    try 
    {
//we need to find all users except logged-in user as in the sidebar we dont show the user itself
// so we use $ne: not equal to id of logged-in user
const loggedInUserId=req.user._id
const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password") //select all fields except password

return res.status(200).json({filteredUsers})
    } 
    catch (error) {
        console.log("Error in getuser controller",error.message)
        res.status(500).json({error:"Server error"})
    }
}


