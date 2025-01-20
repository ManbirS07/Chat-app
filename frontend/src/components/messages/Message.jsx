import React from 'react'
import useConvo from '../../zustand/useConvo';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
	const { AuthUser } = useAuthContext();
	const { selectedconversation,setMessages} = useConvo();
	console.log(AuthUser.id)
	console.log(message.senderId)
	const fromMe = message.senderId === AuthUser.id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? AuthUser.profilePicUrl : selectedconversation.profilePicUrl;
	const bubbleBgColor = fromMe ? "bg-blue-500" :"bg-red-300";
	
	
 return (
    <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src={profilePic}/>
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formattedTime}</div>
		</div>
  )
}

export default Message
