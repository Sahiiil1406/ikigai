"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'

const Signup = () => {
  return (
    <div>
        <Navbar />
        <main className='flex'>
            <div className='p-10 '>
                <img className='w-[700px]' src="body.png" alt="" />
            </div>
            <div><Form/></div>
        </main>
    </div>
  )
}

export default Signup