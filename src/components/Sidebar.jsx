import React from 'react'
import logo from '../pics/zintlr.jpg'
import { DASHBOARD } from '../utils/dashboardItems'
const Sidebar = () => {
  return (
    <div className="bg-slate-100  h-full text-neutral-500  flex flex-col fixed">
        <div className='flex items-center mt-8 mr-8 ml-7 mb-12 gap-2'> 
            <img src={logo} className="w-8 h-8" alt="logo" />
            <span className="text-xl text-blue-500">ZINTLR</span> 
        </div>
        {
            DASHBOARD.map((item)=>{
                return(
                    <>
                    {item.label==='Consumers'? 
                    <div className='text-xl flex gap-2 items-center p-3 pb-3 ml-2 bg-sky-400 rounded-3xl text-white'>
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                    :
                    <div className='text-xl h-20 flex gap-2 items-center p-3 pb-4 ml-2 hover:bg-sky-400 rounded-3xl hover:text-white'>
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
            }
                </>
                )
            })
        }
  </div>
  )
}

export default Sidebar