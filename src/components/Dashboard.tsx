import React from 'react'
import SideBarForDashboard from './SideBarForDashboard'

function Dashboard() {
  return (
    <>
        <div className='h-full w-full'>
            <h1 className='text-blue-600 border-2 border-black font-mono text-2xl'>_Ascendix</h1>
        </div>
        <div className='flex'>
            <SideBarForDashboard idx={2}/>
        </div>
    </>
  )
}

export default Dashboard