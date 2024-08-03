import React from 'react'
import { FaDatabase } from "react-icons/fa";

function Databases() {
  return (
    <>
        <div className='h-full w-full'>
            <h1 className='text-blue-600 border-2 border-black font-mono text-2xl'>_Ascendix</h1>
        </div>
        <div className='flex'>
            <div className='w-10 p-2 h-screen border-r-2 border-black'>
                <FaDatabase className='text-blue-600' size={20}/>
            </div>
        </div>
    </>
  )
}

export default Databases