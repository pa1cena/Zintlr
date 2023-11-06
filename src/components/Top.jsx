import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {TbMoneybag} from 'react-icons/tb'
import {AiTwotoneFolderOpen} from 'react-icons/ai'
import {FaRegBell} from 'react-icons/fa'
import {BiNotification} from 'react-icons/bi'
import img1 from '../pics/img1.jpg'
const Top = () => {
  return (
    <>
    <div className=''>
    <div className='flex flex-row  mt-10 items-center justify-between ml-5 gap-4'>
    <div className="flex items-center bg-slate-100 rounded-full py-2 pl-4 pr-10 h-12  ">
    <input className='focus:outline-none border-none bg-slate-100 w-64' type='text' placeholder='Search (Eg:Rewards)'></input>
    <span><BsSearch/></span>
    </div>
    <div className='flex flex-row gap-2'>
    <TbMoneybag fontSize={32}/>
    <AiTwotoneFolderOpen fontSize={32}/>
    <BiNotification fontSize={32}/>
    <FaRegBell fontSize={32}/>
    </div>
    <div className='flex flex-row bg-white-100 p-4 border-2  rounded-lg items-center'>
      <p className='text-orange-500 font-semibold '>Gold</p>
      <div className='ml-2 mr-2'>
        <p className='text-lime-500'>0.34%</p>
      </div>
      <div className='ml-3'>
      <p>Buy:$7300.00</p>
      <p>Sell:$7300.00</p>
      </div>
    </div>
    <div className='w-20'>
        <img className='rounded-full' src={img1} alt="1" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Top