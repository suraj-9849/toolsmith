import React from 'react'
import SideBarForAccount from './SideBarForAccount'
import { VscAccount } from "react-icons/vsc";

function Account() {
  return (
    <>
        <div className='flex bg-gray-100 p-8'>
            <SideBarForAccount />
            <div className='bg-white h-[90vh] mt-[-4px] w-[80vw] border border-gray-300 rounded-md'>
                <div className='border-b p-2 flex items-center'>
                    <h1 className='text-gray-500'>My Account / </h1>
                    <div className='flex items-center'>
                        <VscAccount className='ml-2' size={18}/>
                        <h1 className='text-black ml-2 font-light'>Profile</h1>
                    </div>
                </div>
                <div className='flex-col items-center mt-10 justify-center'>
                    <div className='flex items-center justify-center'>
                        <img src={require('../icons/bonnie.png')} alt="" className='rounded-full h-[15vh]'/>
                    </div>
                    <h1 className='mt-4 text-2xl flex items-center justify-center font-light'>Joe Rogan</h1>
                    <h1 className='text-gray-500 flex items-center justify-center'>joe.example@gmail.com</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Account