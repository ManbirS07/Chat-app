import Message from "../models/message.js"
import Conversation from "../models/conversation.js"

export const sendMessage=async(req,res)=>
{
  try {
    const {message}=req.body
    const {id:receiverId}=req.params 
    const senderId=req.user._id

    console.log('senderId',senderId);
    
        
    //Now we need to find if a conversation exists between these 2 users
    let convo=await Conversation.findOne({
      participants:{$all:[senderId,receiverId]},  //find a conversation where the participants are the sender and receiver
    })

      //if no convo exists we need to create a new convo
      if(!convo)
      {
        convo=await Conversation.create
        ({
          participants:[senderId,receiverId],
        })

      
        const newMessage=await Message.create({
          senderId,
          receiverId,
          message,
        })

        //if new message is created successfully, add it to the messages array of the convo
        if(newMessage)
        {
          convo.messages.push(newMessage._id)
        }

        res.status(201).json(newMessage)
      }
  } catch (error) {
    res.status(500).json({error:"Server error"})
  }
}
