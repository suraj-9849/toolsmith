import React from 'react'
import dbimg from '../icons/db.webp'
import { CgArrowTopRight } from "react-icons/cg";

function DataBaseHome() {
  return (
        <div className='flex justify-between mt-5 mx-10 p-5'>
            <div className='mx-10 w-1/2'>
                <h1 className="bg-gradient-to-r p-2 border-l-4 border-blue-500 from-blue-200 from-10% to-white to-90% font-medium font-mono text-4xl">
                    Get Your Database Gui 
                </h1>
                <h1 className='font-mono text-4xl mt-3 font-medium'>
                    in minutes
                </h1>
                <p className=' mt-2 font-light  text-lg'>
                    Accelerate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste illum natus rerum molestiae minus cumque doloribus. Cupiditate quo animi saepe? Nihil quaerat fuga necessitatibus, ab debitis quod doloribus distinctio esse placeat, maiores, iure temporibus quidem totam. Ex libero ab magnam ipsum possimus asperiores repudiandae doloremque doloribus pariatur aperiam! Excepturi dolorem nisi voluptates commodi ducimus recusandae quod animi hic illum repellendus.
                </p>
                <button className='mt-8 p-4 border-2 font-mono hover:bg-blue-600 text-blue-600 text-lg transition duration-300 bg-blue-100 hover:text-white  border-blue-600 rounded-md'>Try Now
                    <CgArrowTopRight className='inline-block ml-1 mb-1' size={20}/>
                </button>

            </div>
            <div className='w-3/4'>
                <img src={dbimg} alt="" />
            </div>
        </div>
  )
}

export default DataBaseHome