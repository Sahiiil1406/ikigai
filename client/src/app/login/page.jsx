"use client"
import React from 'react'
import axios from 'axios'

const Login = () => {

  const update = async() => {
  
    const x=await fetch('http//:localhost/3000/auth/all')
    console.log(x)
  
  console.log(x)
  }

  const updateByaxios=async()=>{
    try {
      const x=await axios.get('http//:localhost/3000/auth/all')
      console.log(x)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div>Login</div>
    <b onClick={update}>Update</b>
    <b onClick={updateByaxios}>Update by axios</b>
    </>
  )
}

export default Login