import useConvo from "../../zustand/useConvo";
const Conversation = ({user,emoji,lastidx}) => 
{
	const {selectedconversation,setselectedConvo}=useConvo()
	const defaultProfilePic = 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png';
	//checking if the id of the user matches the selected conversation
	const isSelected=selectedconversation?._id===user._id
	    	return (
    		<>
    			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected?"bg-cyan-400":""}`}
				onClick={()=>setselectedConvo(user)}
				>
    				<div className='avatar online'>
    					<div className='w-12 rounded-full'>
    						<img
    							src={user.profilePicUrl || defaultProfilePic}
    							alt='user avatar'
    						/>
    					</div>
    				</div>
					
    				<div className='flex flex-col flex-1'>
    					<div className='flex gap-3 justify-between'>
    						<p className='font-bold text-gray-200'>{user.name}</p>
    						<span className='text-xl'>{emoji}</span>
    					</div>
    				</div>
    			</div>
    
    			{!lastidx && <div className='divider my-1 py-1 h-2 ' />}
    		</>
    	);
    };
    export default Conversation;