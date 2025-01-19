import React from 'react'
import { useSocketContext } from '../context/socketContext'
import useConvo from '../zustand/useConvo'
import { useEffect } from 'react'
import frontend_src_assets_sound from 'C:\\Users\\jaspa\\OneDrive\\Desktop\\chat\\Chat-app\\frontend\\src\\assets\\frontend_src_assets_sounds_notification.mp3'

const useListenlivemsgs = () => {
    const {socket}=useSocketContext()
    const {messages,setMessages}=useConvo()

    //listening for the new msg
    useEffect(()=>
    {
        socket.on("New Message",(newMessage)=>
        {
            const sound =new Audio(frontend_src_assets_sound)
            sound.play()
            setMessages([...messages,newMessage])
        })
        //returning a cleanup function as we dont want to listen to this socket for a new message when the component unmounts
        return ()=>socket.off("New Message")
    },[socket,messages,setMessages])
}

export default useListenlivemsgs
