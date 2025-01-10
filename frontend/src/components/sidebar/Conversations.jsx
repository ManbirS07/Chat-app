import React from 'react'

import Conversation from "./Conversation";
import useConvo from '../../zustand/useConvo';
import { BsColumnsGap } from 'react-icons/bs';
import useGetUsers from '../../hooks/useGetUsers';


const Conversations = () => {
	const{loading,users}=useGetUsers();
	console.log(users)
	return (
		<div className='py-3 flex flex-col overflow-auto'>
			<Conversation />
		</div>
	);
};
export default Conversations;
