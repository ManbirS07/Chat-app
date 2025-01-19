import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useRef } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useListenlivemsgs from "../../hooks/useListenlivemsgs";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenlivemsgs()
	//If we are somewhere above in the chat and we sent a message,the scrollbar should automatically 
	//take us to the latest msg -> with the help of useeffect

	// This hook creates a reference (lastMessageRef) that can be attached to 
	// a DOM element. This reference will persist across re-renders.
	const lastMessageRef = useRef();

	// // Inside the effect, a setTimeout is used to delay the execution by 100 milliseconds.
	// // This delay ensures that the DOM has updated with the new message before attempting to scroll
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
	return (
		
		<div className='px-4 flex-1 overflow-scroll'>
			{loading?<span className="loading loading-spinner"></span>:""}
				{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef} >
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;