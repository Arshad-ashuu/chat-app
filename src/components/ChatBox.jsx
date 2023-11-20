import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, onSnapshot, orderBy, limit} from "firebase/firestore";
import { db } from '../firebase'

const ChatBox = () => {
const [messages, setmessages] = useState([])
const messagesEndRef=useRef();

const scrollToBootom=()=>{
    messagesEndRef.current.scrollIntoView({behavior:"smooth"})
}

useEffect(scrollToBootom,[messages])
 useEffect(() => {
    const q = query(collection(db, "messages"),
    orderBy("createdAt"),
     limit(50));
     
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages= [];
      querySnapshot.forEach((doc) => {
      messages.push({ ...doc.data(),id:doc.id })
        setmessages(messages);
        
      });
     return ()=>{unsubscribe}
    });
 }, [])
 
  return (
    <>
    <div className='container-nav pb-52 pt-20 -z-10'>
        {messages.map(message=>(
            <Message key={message.id} message={message}/>
        ))}
        
     </div>
     <div ref={messagesEndRef}></div>

    </>
  )
}


export default ChatBox