import React from 'react'
import { FaDatabase } from 'react-icons/fa';
import { RiDashboard3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

function SideBarForDashboard(props: any) {
  return (
    <>
        <div className='w-14 p-2 h-screen border-r-2 border-black'>
            {
                props.idx === 1 ?
                <div className='rounded-md bg-gray-300 p-2'>
                    <FaDatabase className='text-blue-600' size={20}/>
                </div>
                :
                <div className='rounded-md p-2'>
                    <Link to={'/databases'}>
                        <FaDatabase className='text-blue-600' size={20}/>
                    </Link>
                </div>
            }
            {
                props.idx === 2 ?
                <div className='rounded-md bg-gray-300 p-2 mt-4'>
                    <RiDashboard3Line className='text-blue-600' size={20}/>
                </div>
                :
                <div className='rounded-md p-2 mt-4'>
                    <Link to={"/dashboard"}>
                        <RiDashboard3Line className='text-blue-600' size={20}/>
                    </Link>
                </div>
            }
        </div>
    </>
  )
}

export default SideBarForDashboard