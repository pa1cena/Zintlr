import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
const App = () => {
  return (
    <>
    <div className="flex flex-row relative ">
      <div className='top-0 left-0'>
      <Sidebar/>
      </div>
      <div className='pl-64 mr-4'>
      <Content/>
      </div>
    </div>
    
    </>
  )
}

export default App