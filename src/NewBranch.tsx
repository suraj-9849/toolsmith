import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarForDb from './components/NavbarForDb';
import { GoPlus } from 'react-icons/go';
import user from './icons/bonnie.png';
import { VscAccount } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgOrganisation } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { GoGitBranch } from "react-icons/go";

function NewBranch() {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowAccountModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setShowAccountModal]);
  return (
    <>
      <div className="border-b flex items-center justify-between pr-5 border-gray-300 p-3">
        <h1 className="text-2xl font-mono font-bold text-blue-600">_Ascendix</h1>
        <NavbarForDb />
        <div className="flex items-center">
          {/* <Link to={'/dbenter'}>
                <button className="flex bg-blue-600 rounded-md mr-3 p-1 items-center">
                <GoPlus className="text-white" size={20} />
                <h1 className="text-white font-mono text-md font-light">Add Source</h1>
                </button>
            </Link> */}
          <button
            onClick={() => {
              setShowAccountModal(true);
            }}
          >
            <img src={user} alt="" className=" h-[2rem] w-9 rounded-full" />
          </button>
          {showAccountModal ? (
            <div
              ref={modalRef}
              className="absolute right-10 w-48 top-12 bg-white border border-gray-300 rounded-md p-2"
            >
              <Link to={'/account/profile'}>
                <div className="flex items-center rounded-md hover:bg-gray-200 p-2">
                  <VscAccount className="text-black" size={20} />
                  <h1 className="font-mono text-md ml-2 text-black font-light">Account</h1>
                </div>
              </Link>
              <div className="flex items-center rounded-md hover:bg-gray-200 p-2">
                <IoSettingsOutline className="text-black" size={20} />
                <h1 className="font-mono text-md ml-2 text-black font-light">Settings</h1>
              </div>
              <div className="flex items-center rounded-md hover:bg-gray-200 p-2">
                <CgOrganisation className="text-black" size={20} />
                <h1 className="font-mono text-md ml-2 text-black font-light">Organisations</h1>
              </div>
              <div className="border-t border-gray-300 mb-2 mt-2"></div>
              <div className="flex items-center rounded-md hover:bg-gray-200 p-2">
                <CiLogout className="text-red-500" size={20} />
                <h1 className="font-mono text-md ml-2 text-red-500">Logout</h1>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='mt-10 flex items-start justify-center'>
        <div>
            <div className='flex'>
                <img src={require('./icons/bonnie.png')} alt=""  className='rounded-full h-[8vh]'/>
                <div className='flex-col ml-3'>
                    <h1 className='font-mono text-xl font-bold'>Add a title</h1>
                    <input type="text" className='border font-mono rounded-md p-2 h-[5vh] w-[45vw]' placeholder='Title'/>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold font-mono text-xl'>Add a Description</h1>
                <textarea className='border font-mono rounded-md p-2 h-[45vh] w-[50vw]' placeholder='Description'></textarea>
            </div>
            <div className='flex justify-end items-end w-[50vw]'>
                <button className='p-2 border flex items-center text-white font-mono bg-blue-600 hover:bg-blue-700 rounded-md'>
                    <GoGitBranch />
                    Create Branch
                </button>
            </div>
        </div>
        <div className='ml-10 w-[20vw]'>
            <div className='border-b pb-3'>
                <div className='flex hover:text-blue-600 text-gray-600 items-center justify-between'>
                    <h1 className='font-mono font-semibold'>Contributors</h1>
                    <GoPlus size={22}/>
                </div>
                <h1 className='font-mono mt-2 font-light text-sm text-gray-600'>No Contributors</h1>
            </div>
            <div className='border-b mt-2 pb-3'>
                <div className='flex hover:text-blue-600 text-gray-600 items-center justify-between'>
                    <h1 className='font-mono font-semibold'>Labels</h1>
                    <GoPlus size={22}/>
                </div>
                <h1 className='font-mono mt-2 font-light text-sm text-gray-600'>Not yet</h1>
            </div>
            <div className='border-b mt-2 pb-3'>
                <div className='flex hover:text-blue-600 text-gray-600 items-center justify-between'>
                    <h1 className='font-mono font-semibold'>Databases</h1>
                    <GoPlus size={22}/>
                </div>
                <h1 className='font-mono mt-2 font-light text-sm text-gray-600'>No Databases added</h1>
            </div>
        </div>
      </div>
    </>
  );
}

export default NewBranch;
