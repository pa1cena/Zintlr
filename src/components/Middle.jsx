import React from 'react'
import img2 from '../pics/img2'
const Middle = () => {
  return (
    <>
    <div className='flex flex-row items-center ml-2 gap-2 '>
    <div className='flex flex-row mt-5 bg-cyan-50 ml-4'>
        <div className=' p-4  rounded-lg '>
            <p className='text-sky-500 font-bold'>Consumer {'>'} Manage Consumers</p>
            <p className='text-neutral-950 text-xl'>Actions</p>
            <div className='mt-2'>
            <button className='p-2 border-none bg-neutral-950 text-white bg-black-200 rounded-lg'>Add Consumers</button>
            </div>
        </div>
        <img className='w-32 h-40 ml-20' src={img2} alt="2" />
    </div>
    <div className='bg-red-200  p-4  w-64 rounded-lg'>
    <div className='flex flex-row gap-2 items-center'>
        <p className='font-bold text-3xl'>276</p>
        <span>KYC</span>
    </div>
    <p>approval pending</p>
    <button className='mt-2 p-2 border-none bg-neutral-950 text-white bg-black-200 rounded-lg'>View List</button>
    </div>
    <div className='bg-red-100  p-4  w-64 rounded-lg'>
    <div className='flex flex-row gap-2 items-center'>
        <p className='font-bold text-3xl'>182</p>
        <span>high risk</span>
    </div>
    <p>consumers</p>
    <button className='mt-2 p-2 border-none bg-neutral-950 text-white bg-black-200 rounded-lg'>View List</button>
    </div>
    <div className='bg-cyan-50  p-4 h-36 w-64 rounded-lg'>
    <div className='flex flex-row gap-2 items-center'>
        <p className='font-bold text-3xl'>32</p>
        <span>tickets open</span>
    </div>
    <button className='mt-8 p-2 border-none bg-neutral-950 text-white bg-black-200 rounded-lg'>View List</button>
    </div>
    </div>
    </>
  )
}

export default Middle