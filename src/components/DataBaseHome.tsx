import React from 'react'
import dbimg from '../icons/db.webp'
import db2 from '../icons/db2.webp'
import { CgArrowTopRight } from "react-icons/cg";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function DataBaseHome() {
    // we should check here whether the user has logged in or not and then show the content accordingly
  return (
    <>
        <Navbar />
        <div className='flex-row'>
            <div className='flex justify-between mt-5 mx-10 p-5'>
                <div className='mx-10 w-1/2'>
                    <h1 className="bg-gradient-to-r p-2 border-l-4 border-blue-500 from-blue-200 from-10% to-white to-90% font-medium font-mono text-4xl">
                        Get Your Database Gui 
                    </h1>
                    <h1 className='font-mono text-4xl mt-3 font-medium'>
                        in minutes
                    </h1>
                    <p className=' mt-2 font-light text-lg'>
                        Accelerate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste illum natus rerum molestiae minus cumque doloribus. Cupiditate quo animi saepe? Nihil quaerat fuga necessitatibus, ab debitis quod doloribus distinctio esse placeat, maiores, iure temporibus quidem totam. Ex libero ab magnam ipsum possimus asperiores repudiandae doloremque doloribus pariatur aperiam! Excepturi dolorem nisi voluptates commodi ducimus recusandae quod animi hic illum repellendus.
                    </p>
                    <Link to={"/dbenter"}>
                    <button className='mt-8 p-4 border-2 font-mono hover:bg-blue-600 text-blue-600 text-lg transition duration-300 bg-blue-100 hover:text-white  border-blue-600 rounded-md'>Try Now
                        <CgArrowTopRight className='inline-block ml-1 mb-1' size={20}/>
                    </button>
                    </Link>
                </div>
                <div className='w-3/4'>
                    <img src={dbimg} alt="" />
                </div>
            </div>
            <div className='mx-24 h-[330px] rounded-md text-white pl-10 pt-10 mt-5 bg-gradient-to-r from-blue-500 to-blue-600 flex'>
                <div className='flex-row w-3/4'>
                    <h1 className='font-mono font-bold text-3xl'>Build Your own Database GUI Today</h1>
                    <h1 className='mt-2 font-mono text-white text-xl'>Visualize your data with more than 50 integration options </h1>
                    <button className=' bg-white mt-20 text-blue-500 rounded-md p-4 text-xl font-mono'>Explore more</button>
                </div>
                <div className='mr-[-14px]'>
                    <img className=' h-80 w-auto' src={db2} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default DataBaseHome