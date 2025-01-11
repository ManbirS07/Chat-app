import {create} from 'zustand'

//useConvo is a zustand hook to store the conversation between two users and highlight the background color of the selected chat
//The set function is used to update the state of the useConvo store.
//creating a global store for the conversation

const useConvo=create((set)=>({
    //intially the conversation is empty
    selectedconversation:null,
    setselectedConvo:(convo)=>
    {
        set({selectedconversation:convo})
    },
    //the messages are also empty initially
    messages:[],
    setMessages:(messages)=>
    {
        set({messages})
    }
}))

export default useConvo
