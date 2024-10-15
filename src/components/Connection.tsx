import React from 'react'
import DbEnter from './DbEnter'
import { useParams } from 'react-router-dom'
import { BiLogoPostgresql } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Connection() {
    const Source = useParams().source;
    const [icon, setIcon] = React.useState<any>(null);
    React.useEffect(() => {
        // set the logo of the database based on the source 
        if(Source === 'Postgres') {
            setIcon(<BiLogoPostgresql className='text-blue-600' size={30}/>)
        }
        else {
            setIcon(<h1>Icon</h1>);
        }
    }, []);
  return (
    <>
        <DbEnter page={2}/>
        <div className='flex justify-center'>
            <div className='h-[80vh] w-[90vw] flex items-center justify-center content-center'>
                <div className='w-[35vw] h-[40vh] border border-gray-300 rounded-md'>
                    <div className='flex p-2 items-center border-b border-gray-300'>
                        <div className='p-2 border border-gray-300 rounded-md'>
                            {icon}
                        </div>
                        <h1 className='ml-2 text-xl font-mono text-blue-600'>{Source}</h1>
                    </div>
                    <div className='p-2'>
                        <h1 className='font-mono text-blue-600 text-lg font-light'>Name</h1>
                        <textarea className='border border-gray-300 p-2 w-full mt-2 rounded-md focus:outline-none resize-none font-mono font-light bg-gray-50 h-[5vh]' aria-expanded={false} placeholder='Untitled Datasource'/>
                        <h1 className='font-mono text-blue-600 text-lg font-light'>Enter Your Connection String</h1>
                        <textarea className='border border-gray-300 p-2 w-full mt-2 rounded-md focus:outline-none resize-none font-mono font-light bg-gray-50 h-[5vh]' placeholder='Connection String'/>
                        <div className='flex justify-center mt-2'>
                            <Link className='w-full' to={`/databases`}>
                                <button className='p-2 w-full bg-blue-600 text-white rounded-md'>Save & Continue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Connection