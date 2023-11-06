import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { tableData } from '../utils/tabledata'
const Bottom = () => {
  return (
    <>
    <div className='pl-12 mt-2'>
      <p className='text-neutral-950 text-xl'>Customer Overview</p>
      <div className="flex items-center bg-slate-100 rounded-md border border-sky-500 py-2 pl-4 pr-10 h-9 w-72 mt-2 ">
    <input className='focus:outline-none bg-slate-100 w-64' type='text' placeholder='Search Consumers'></input>
    <span><BsSearch/></span>
    </div>
    <div className='mt-2'>
      <table>
        <thead>
          <tr className='bg-sky-300  h-12 '>
            <th className='pl-9'>Consumer Name</th>
            <th className='pl-9'>Assests</th>
            <th className='pl-9'>Revenue</th>
            <th className='pl-9'>KYC Status</th>
            <th className='pl-9'>Facilitator</th>
            <th className='pl-9'>Zone</th>
            <th className='pl-15'>Account Type</th>
            <th className='pl-20 pr-3'>TPA</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((item,index)=>{
              return(
                <>
                <tr key={item.id} className={index % 2 !== 0 ? 'bg-slate-100 h-20 pl-3' : 'h-20 pl-3'}>
                  <td>{item.name}</td>
                  <td>{item.assests}</td>
                  <td>{item.revenue}</td>
                  <td>{item.kyc}</td>
                  <td>{item.facilitator1}</td>
                  <td>{item.facilitator2}</td>
                  <td>{item.zone}</td>
                  <td>{item.account}</td>
                  <td>{item.tpa}</td>
                </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default Bottom