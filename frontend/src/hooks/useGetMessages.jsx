import { useEffect, useState } from "react";
import useConvo from "../zustand/useConvo";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedconversation } = useConvo();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`http://localhost:8000/api/messages/${selectedconversation._id}`,
                    {
                        credentials:'include'
                    }
                );
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedconversation._id) getMessages();
	}, [selectedconversation._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;