import React from 'react'

import Conversation from "./Conversation";
import useGetUsers from '../../hooks/useGetUsers';
import { getRandomEmoji } from '../../utils/emoji';


const Conversations = () => {
	const{loading,users}=useGetUsers();
	//users is an array of objects so we map through each user to get convo of the logged in user


	// In JavaScript, if you use curly braces {} inside an arrow function, you need to explicitly use
	// the return statement to return a value. Alternatively, you can use parentheses () to implicitly
	// return the value.


	//last index is for checking the last user
	//if user is a last user , we dont use the divider below it
	return (
		<div className='py-3 flex flex-col overflow-auto'>
	{users.map((user,idx)=>
	{
		{
		return <Conversation key={user._id} user={user} emoji={getRandomEmoji()} lastidx={idx===users.length-1}/>
	}
	})}
		</div>
	);
};
export default Conversations;
