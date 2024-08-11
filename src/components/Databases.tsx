import React from 'react'
import SideBarForDashboard from './SideBarForDashboard';
import { DiMongodb } from 'react-icons/di';
import { MdOutlineChevronRight } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { SiMysql } from "react-icons/si";
import user from '../icons/user.jpg';
import { IoSettingsOutline } from "react-icons/io5";
import Editor, {loader} from '@monaco-editor/react';
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";

function Databases() {
    // get datasources from the backend 
    const dataSources = [{name: 'MongoDB', tables: ['users', 'posts', 'comments'], icon: <DiMongodb className='text-green-600' size={24} />},
        {name: 'Postgres', tables: ['users', 'posts', 'comments'], icon: <BiLogoPostgresql className='text-blue-600' size={24} />},
        {name: 'Mysql', tables: ['users', 'posts', 'comments'], icon: <SiMysql className='text-yellow-600' size={24} />},
    ];
    
    const headings = ['Id', 'FirstName', 'LastName', 'email', 'phone'];

    const tableData = [['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'], 
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393'],
        ['1', 'Nikhil', 'Bhatia', 'bhatianikhil551@gmail.com', '8790372393']
    ];

    loader.init().then((monaco) => {
        monaco.editor.defineTheme('myTheme', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#f9fafb',
            },
        });
    });
  return (
    <>
        <div className ='flex'>
            <div className=' w-1/4 h-screen border-r border-gray-300'>
                <div className='border-b p-3 border-gray-300'>
                    <h1 className='text-2xl font-mono font-bold text-blue-600'>_Ascendix</h1>
                </div>
                <div className='p-3'>
                    <h1 className='text-lg text-blue-600 font-mono'>Databases</h1>
                    <div className='my-3'>
                        <form className="max-w-md mx-auto">   
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-1 font-mono ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search.." required />
                                {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-mono rounded-md text-sm px-4 py-2">Search</button> */}
                            </div>
                        </form>
                    </div>
                    {/* Here i should be able to add multiple databases from the backend */}
                    {
                        dataSources.map((item, idx) => {
                            return (
                                <div key={idx} className='my-3'>
                                    <div className='flex items-center'>
                                        <div className='border border-gray-300 rounded-lg p-1'>
                                            {item.icon}
                                        </div>
                                        <div className='ml-3'>
                                            <h1 className='text-lg font-mono'>{item.name}</h1>
                                        </div>
                                    </div>
                                    {
                                        item.tables.map((table, idx) => {
                                            return (
                                                <div key={idx} className='mt-1 ml-3 flex items-center'>
                                                    <button className='flex items-center'>
                                                        <MdOutlineChevronRight className='text-gray-400' size={26}/>
                                                        <h1 className='ml-2 text-sm font-mono'>{table}</h1>
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                    <div>
                                        <button className='flex ml-10 items-center mt-2'>
                                            <CiCirclePlus className='text-gray-500' size={20}/>
                                            <h1 className='ml-2 font-mono text-gray-500'>Add Table</h1>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-screen'>
                <div className='border-b flex items-center justify-end pr-5 border-gray-300 p-3'>
                    <button>
                        <IoSettingsOutline className='text-gray-500 mr-5' size={24}/>
                    </button>
                    <button>
                        <img src={user} alt="" className=' h-[2rem] w-9 rounded-full'/>
                    </button>
                </div>
                <div className='flex'>
                    <div className='w-3/4 p-4 h-[93vh] border-r flex-row border-gray-300'>
                        <div className=''>
                            <div className='p-2 justify-between border-t border-r border-l rounded-t-md border-gray-300 flex items-center'>
                                <div className=''>
                                    <h1 className='font-mono ml-3 text-sm'>SQL Editor</h1>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-5'>
                                        <button className='flex items-center'>
                                            <h1 className='text-sm border-r pr-3 border-gray-300 font-mono text-blue-600'>Updated Right now • 100 rows</h1>
                                        </button>
                                    </div>
                                    <button className='flex border border-gray-300 hover:bg-gray-100 rounded-md p-2 items-center'>
                                        <IoPlayOutline />
                                        <h1 className='ml-2 font-mono text-sm'>Run Query</h1>
                                    </button>
                                </div>
                            </div>
                            <Editor 
                                height={'40vh'}
                                defaultLanguage='sql'
                                defaultValue='SELECT * FROM users'
                                theme='myTheme'
                                className='border p-1 border-gray-300 bg-[#f9fafb] rounded-b-md'
                            />
                        </div>
                        <div className='mt-4'>
                            <div className='flex p-2 border-t border-l border-r border-gray-300 rounded-t-md items-center justify-between'>
                                <h1 className='font-mono ml-3 text-md'>Results</h1>
                                <button className='flex border p-2 rounded-md hover:bg-gray-100 border-gray-300 items-center'>
                                    <MdOutlineFileDownload />
                                    <h1 className='text-sm ml-1 font-mono'>Download .csv</h1>
                                </button>
                            </div>
                            <div className='relative max-h-64 overflow-y-auto overflow-x-auto'>
                                <table className='w-full'>
                                    <thead className='bg-gray-50 text-xs'>
                                        <tr className='border-l border-r uppercase border-t border-gray-300'>
                                        {
                                            headings.map((heading, idx) => {
                                                return (
                                                    <th key={idx} scope='col' className=' px-6 py-3 font-mono'>{heading}</th>
                                                )
                                            })
                                        }
                                        </tr>
                                    </thead>
                                    <tbody className='border border-gray-300 rounded-md'>
                                        {
                                            tableData.map((row, idx) => {
                                                return (
                                                    <tr key={idx} className='text-sm border-x hover:bg-gray-50 border-gray-300 border-t justify-center'>
                                                        {
                                                            row.map((data, idx) => {
                                                                return (
                                                                    <td key={idx}  className='px-10 text-center py-4 font-mono'>{data}</td>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <div className='p-3 mt-1 flex-row items-center justify-center justify-items-center'>
                            <div className='flex-row items-center justify-center border border-gray-300 rounded-md p-2'>
                                <div>
                                    <h1 className='font-mono text-md text-center text-blue-600'>Import Excel data</h1>
                                </div>
                                <div className='flex items-center justify-items-center justify-center mt-3'>
                                    <button className='flex items-center p-2 rounded-md hover:bg-green-600 bg-green-500'>
                                        <RiFileExcel2Line className='text-white' size={22}/>
                                        <h1 className='font-mono text-sm ml-2 text-white'>Import</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Databases