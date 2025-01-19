import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { AuthUser } = useAuthContext();
	useEffect(() => {
		if (AuthUser) {
            //if user is authenticated create a socket for it and send the user id (basically we create a a connection)
            //Logic is whichever users have logged in they must be online no
			const socket = io("http://localhost:8000",
                {
                    query:
                    {
                        userId: AuthUser.id
                    }
                }
            )

			setSocket(socket);

			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => 
            {
				setOnlineUsers(users);
			});

            //clean up function
			return () => socket.close();
		} else 
        {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [AuthUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>
        {children}
        </SocketContext.Provider>;
};