import React from 'react'

import { IoSearchSharp } from "react-icons/io5";
import useConvo from '../../zustand/useConvo';
import useGetUsers from '../../hooks/useGetUsers';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Search = () => {
	const [search,setSearch]=useState("")
	const {setselectedConvo}=useConvo();
	const {users}=useGetUsers()
	console.log(users)
	const handleSubmit=(e)=>
	{
		e.preventDefault();
		if (!search) return;
		const conversation = users.find((convo) => convo.name.toLowerCase().includes(search.toLowerCase()));
		console.log(conversation)

		if (conversation) 
		{
			setselectedConvo(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	}
	return (
		<form className='flex items-center gap-2' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' 
			value={search}
			onChange={(e)=>setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};

export default Search
