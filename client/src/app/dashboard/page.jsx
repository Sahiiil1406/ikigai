"use client"
import React, { useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [open,setOpen]=useState(false)
    const [user,setUser]=useState({})
    const [array,setArray]=useState([])
    const [data,setData]=useState('')
    const check=()=>{
        if(open){
            setOpen(false)
        }
        setOpen(true)
    }
   const getUser=async()=>{
        try {
            const res=await axios.get('http://localhost:3000/user',{
                withCredentials:true
            })
            console.log(res)
            //setUser(res.data)
        } catch (error) {
            console.log(error)
        }}

    const Add=async()=>{
        console.log(data)
        array.push(data)
        setData('')
        console.log(data)
    }    
    useEffect(() => { 
        getUser()
    },[])
  return (
    <div className='bg-black w-screen h-screen text-white'>
        <header className="bg-slate-800 h-[55px] flex flex-row-reverse p-3 gap-2">
        <p className='mr-6'><b>Sahil kr</b></p>
            <div className='w-[15px]'>
                <img src="s.png" alt="" />
            </div>
        </header>
        <main className='flex'><div> {
                open?<Sidebar/>:<div className='bg-slate-800 h-[50px] w-[50px] flex flex-row-reverse p-3 gap-2
                 absolute top-0 mt-2' onClick={check}>
                <div className='w-[55px]'>
                    <img src="ikigai.png" alt="" />
                </div>
            </div>
          }</div>
          <br />
          <div>
          <div className='border border-slate-800 w-[1100px] h-[50px] p-8 '><i>Software Engineering</i></div>
          <br />
          <div className='text-slate-400 p-10 m-2'>
            {array.map((item)=>{
                return(
                    <div className='p-4 flex gap-4'>
                        <div className='w-[25px]'><img src="ikigai.png" alt="" /></div>
                        <div>{item}</div>
                    </div>
                )

            })}
          </div>
          <div className='border border-slate-800 w-[1100px] h-[100px] p-4 ml-10 mr-10 mb-5 rounded-lg overflow-hidden flex absolute bottom-0 '>
            <input type="text" className='w-[100%] mr-10 rounded-lg bg-slate-800 h-10'
            onChange={(e)=>{
                setData(e.target.value)
            }}/>
            <button className='w-[55px]' type='submit' onClick={Add}><img src="send.png" alt="" /></button>
          </div>
          </div>
        </main>
    </div>
  )
}

export default Dashboard