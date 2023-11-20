import React, { useEffect } from 'react'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()
 const {currentUser,signInWithGoogle}=UserAuth()
 console.log(currentUser);

const handleLogin=async ()=>{
  try {
    await signInWithGoogle()
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  if (currentUser) {
    navigate("/chat")
  }
}, [currentUser])


  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white ">Hello there👋🏻</h1>
      <p className="py-6">join the conversation and meet new people and make new connections in one shared room </p>
      <button  onClick={handleLogin} className="btn btn-primary rounded-full text-white">Login With Google</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Login