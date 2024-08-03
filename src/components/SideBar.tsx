import React from 'react'
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { Link } from 'react-router-dom';

function SideBar(props: any) {
    const [idx, setIdx] = React.useState<number>(props.idx);
  return (
    <div className=' pt-2 h-screen w-64 border-r-2 border-black'>
        <h1 className='font-mono text-xl p-2 text-blue-600'>Choose datasource</h1>
        {
            idx === 0 ? 
                <div className='border-t-2 p-2 flex bg-green-600 border-black'>
                    <button 
                        onClick={() => setIdx(0)}
                    className='flex items-center'>
                        <DiMongodb className='text-white' size={30}/>
                        <h1 className='mx-2 font-mono text-xl text-white'>
                            MongoDB
                        </h1>
                    </button>
                </div>
                :
                <div className='border-t-2 p-2 flex border-black'>
                    <Link to={"/dbenter/mongo"}>
                        <button 
                            onClick={() => setIdx(0)}
                        className='flex items-center'>
                            <DiMongodb className='' size={30}/>
                            <h1 className='mx-2 font-mono text-xl text-blue-600'>
                                MongoDB
                            </h1>
                        </button>
                    </Link>
                </div>
        }
        {
            idx === 1 ? 
                <div className='border-t-2 border-b-2 p-2 flex bg-blue-600 border-black'>
                    <button 
                        onClick={() => setIdx(1)}
                    className='flex items-center'>
                        <BiLogoPostgresql className='text-white' size={30}/>
                        <h1 className='mx-2 font-mono text-xl text-white'>
                            Postgres
                        </h1>
                    </button>
                </div>
                :
                <div className='border-t-2 border-b-2 p-2 flex border-black'>
                    <Link to={"/dbenter/postgres"}>
                        <button 
                            onClick={() => setIdx(1)}
                        className='flex items-center'>
                            <BiLogoPostgresql className='text-black' size={30}/>
                            <h1 className='mx-2 font-mono text-xl text-blue-600'>
                                Postgres
                            </h1>
                        </button>
                    </Link>
                </div>
        }
    </div>
  )
}

export default SideBar