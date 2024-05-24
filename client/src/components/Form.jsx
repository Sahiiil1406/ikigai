import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')

const signup=async()=>{
  try {
    console.log(email, password, firstName)
    const res=await axios.post('http://localhost:3000/signup',{
      email,
      password,
      name:firstName
    })
    console.log(res)
    
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='p-10'>
        <h1 className='text-4xl text-[#425fc7]'><b>Create An Account</b></h1>
        <h1 className='text-xl text-[#425fc7]'><b>It's quick and easy</b></h1>
        <br />
        <div>
            <input type="text" placeholder='first name' className='border-black border mr-5 shadow-inner ' onChange={(e)=>{
              setFirstName(e.target.value)
            }}/>
            <input type="text" placeholder='last name'  className='border-black border shadow-2xl'/>
        </div>
        <br />
        <input type="text" className='border-black border' placeholder='Email/Phone Number'
        onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        <br />
        <input type="text" className='border-black border' placeholder='Password'
        onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <br />
        <br />
        <div  className=' text-[#425fc7]'><b>Date of birth</b></div>
        <input type="date" />
        <br />
        <br />
        <div  className=' text-[#425fc7]'><b>Gender</b></div>

        <div className='p-2 flex gap-2 text-[#425fc7] text-balance'>
        <input type="checkbox" id="male"/>
        <label htmlFor="male">Male</label>
        <input type="checkbox" id="female"/>
        <label htmlFor="female">Female</label>
        <input type="checkbox" id="female"/>
        <label htmlFor="female">Custom</label>
        </div>
        <br />
        <p className=' text-[#425fc7]'> By Clicking SignUp, you agree to our Terms, Data Policy
            <br />
             and Cookie Policy.
             You may receive SMS notifications from us and
             <br /> can opt out at any time.</p>
             <br />
        <div className='bg-green-600 w-40 p-2 text-white' onClick={signup}>Create An Account</div>
    </div>
  )
}

export default Form