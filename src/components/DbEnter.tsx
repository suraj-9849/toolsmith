import React from 'react'
import SideBar from './SideBar'

function DbEnter() {
  return (
    <div>
        <div className='h-full w-full'>
            <h1 className='text-blue-600 border-2 border-black font-mono text-2xl'>_Ascendix</h1>
        </div>
        <div className='flex items-center'>
            <SideBar idx={-1}/>
            <div className='flex justify-center items-center w-3/4'>
                <div className='items-center justify-center'>
                    <h1 className='text-4xl text-blue-600 font-mono'>Choose Your Data Source</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DbEnter