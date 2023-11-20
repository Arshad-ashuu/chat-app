import { addDoc,collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {db } from '../firebase'
import {UserAuth} from '../Context/AuthContext'
const SendMsg = () => {
    const [value, setvalue] = useState("")
    const {currentUser}=UserAuth()
 
    const handleSendMsg=async (e)=>{
    e.preventDefault();

if(value.trim()===""){
  alert("Enter valid message in TextBOX!")
  return;
}

    try {
      const {uid,displayName,photoURL}=currentUser;
      await addDoc(collection(db,"messages"),
        {
          text:value,
          name:displayName,
          avatar:photoURL,
          createdAt:serverTimestamp(),
          uid
        }
      )
    } catch (error) {
      console.log(error);
    }
    console.log(value);
    setvalue("")
  }

  return (
    <>
    <div className="container-nav ">
    <div className="fixed bottom-0 w-full py-10 shadow-lg ">
        <form onSubmit={handleSendMsg}>
        <input value={value} onChange={e=>setvalue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-5/12 ml-14" />
        <button type='submit' className="btn ml-2 px-10 bg-green-500 text-white">Send</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default SendMsg