import React from 'react'

const Sidebar = () => {
    const array=["temp1","temp2"]
  return (
<div className='h-screen p-4 w-[290px] bg-slate-800'>
<header className='flex gap-8 p-4 absolute top-0 mt-4'>
<div className='w-[35px] h-[20px]'><img src="ikigai.png" alt="" /></div>
<div className='text-lg'><b>IKIGAI</b></div>
</header>
<br />
{
    array.map((item)=>{
        return(
            <div className='p-2'>
            <div className='flex gap-4'>
            <div className='text-2xl'><b>*</b></div>
            <div className='text-lg'>{item}</div>
            </div>
            </div>
        )
    })
}
<br />
<div className='p-2'>New +</div>

</div>
  )
}

export default Sidebar