import { useState } from "react";

import toast from "react-hot-toast";
import useConvo from "../zustand/useConvo";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedconversation } = useConvo();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`http://localhost:8000/api/messages/send/${selectedconversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
                credentials:'include',
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data.newMessage]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;