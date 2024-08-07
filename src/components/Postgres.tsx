import React from 'react'
import SideBar from './SideBar'
import { DiMongodb } from 'react-icons/di'
import {BiLogoPostgresql} from 'react-icons/bi'
import { CgSpinner } from 'react-icons/cg'
import { Link, redirect } from 'react-router-dom'

function Postgres() {
    const [title, setTitle] = React.useState<string>('')
    const [connectionString, setConnectionString] = React.useState<string>('')
    const [isProcessing, setIsProcessing] = React.useState<boolean>(false)
    const [processed, setProcessed] = React.useState<boolean>(true)
    const SaveConnection = () => {
        setIsProcessing(true)
        window.location.href = '/databases'  // please provide the correct redirection this makes the page non single page
        setIsProcessing(false)
    }
  return (
    <>
        <div className='h-full w-full'>
            <h1 className='text-blue-600 border-2 border-black font-mono text-2xl'>_Ascendix</h1>
        </div>
        <div className='flex'>
            <SideBar idx={1}/>
            <div className='ml-10 mt-3 w-3/4'>
                <h1 className='text-3xl font-mono text-blue-500'>Postgresql</h1>
                <div className='mt-3 flex items-center'>
                    <BiLogoPostgresql className='text-blue-500' size={50}/>
                    <textarea className='font-mono border-b-2 p-2 resize-none border-blue-500 focus:outline-none' cols={18} rows={1} placeholder='Untitled Datasource'/>
                </div>
                <div className='ml-4 mt-5'>
                    <h1 className='text-xl font-mono text-blue-500 font-semibold'>Enter Your Connection String</h1>
                    <textarea className='font-mono border-2 p-2 w-1/2 mt-2 resize-none border-blue-500 rounded-md focus:outline-none' cols={20} rows={1} placeholder='Connection String'/>
                    {
                        isProcessing === true ?
                        <button 
                        className='w-1/2 p-2 bg-blue-500 font-mono mt-2 text-white rounded-md justify-center flex items-center'> 
                            <CgSpinner className='animate-spin mx-2' size={20}/>
                            Processing...
                        </button>
                        :
                        <button 
                        onClick={SaveConnection}
                        className='w-1/2 p-2 bg-blue-500 font-mono mt-2 text-white rounded-md justify-center flex items-center'> 
                            Save & Continue
                        </button>
                    }
                    {
                        
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Postgres