import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router=useRouter()

    const Login=async()=>{
        try {
            console.log(email, password)
            const res = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password
            })
            router.push('/dashboard')
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
    
  }, [])
  return (
    <div className='bg-[#425fc7] flex w-screen h-28'>
        <div className='ml-16 p-10 flex-auto'>
            <img src="Logo.png" alt="" />
        </div>
        <div className='p-8 flex gap-3'>
        <div className=' ml-24'>
            <div className='text-white'>Email/Phone</div>
            <input type="text" className=' ' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className=' '>
            <div className='text-white'>Password</div>
            <input type="text" className='shadow-inner ' onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className='text-white'>forgotten account?</div>
        </div>
        <div className=' mt-6 mr-[100px]'>
            <button className=' bg-[#2d47a2] text-white' onClick={Login}>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar