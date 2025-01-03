import Message from "../models/message.js"
import Conversation from "../models/conversation.js"
import User from "../models/user.js"

export const sendMessage=async(req,res)=>
{
  //since we successfully passed from the protectRoute middleware,we have access to req.user which has the current user
  try {
    const {message}=req.body
    ///send/:id is the receiver's id
    const receiverId=req.params.id
    const receiverName=await User.findById(receiverId)
    
    //in the middleware protect route,after verifying the token and getting the user,
    //we set req.user=user so the sender's id is stored in req.user._id
    const senderId=req.user._id
    const senderName=await User.findById(senderId)

    console.log('senderId',senderId);
    console.log('receiverID',receiverId);
    console.log('receivername',receiverName.name);
    
        
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
        //and by default,the messages array of the convo is []
      }

      
        const newMessage=await Message.create({
          senderId,
          receiverId,
          message,
        })
        
        
        //if new message is created successfully, add it to the messages array of the convo
        if(newMessage)
        {
          convo.messages.push(newMessage._id)
          await convo.save()
        }

        //Socket.io functionality here

        res.status(201).json({newMessage,convo})
      
  } catch (error) {
    res.status(500).json({error:"Server error"})
  }
}

//mongoose provides us with a populate method to populate the fields of the document referenced in another collection
export const getMessage=async(req,res)=>
{
  try{
    const receiverId=req.params.id
    const senderId=req.user._id    

    //now find the conversation between the sender and receiver
    const convo=await Conversation.findOne({
      participants:{$all:[senderId,receiverId]}
    }).populate('messages') //returns array of objects with msgid andn puts in the message


    //we can either use populate or the below method to get the message(without using populate)
    //below method specifically gets the message while populate returns the whole message object

    // const messagesId=convo.messages
    // const msgs=await Promise.all(messagesId.map(async(messageId)=>
    // {
    //   const messageObj=await Message.findById(messageId)
    //   const mssg=messageObj.message
    //   console.log('message:',mssg)
    //   return mssg
    // }))

    if (!convo) {
      return res.status(200).json([]);
    }
    
    const messages=convo.messages
    res.status(200).json(messages)
  }
  catch(error)
  {
    res.status(500).json({error:"Server error"})
  } 
}
