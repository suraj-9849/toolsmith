import React, { useState, useEffect } from 'react';
import NavbarForDb from './NavbarForDb';
import { GoPlus } from 'react-icons/go';
import user from '../icons/bonnie.png';
import { VscAccount } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgOrganisation } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { LiaTagSolid } from 'react-icons/lia';
import { GoIssueOpened } from 'react-icons/go';
import { PiChatsThin } from 'react-icons/pi';

const branches = [
  {
    title: 'Running Daily query to get expensive products',
    tags: ['enhancement', '🚀feature'],
    created_by: 'Bonnie',
  },
  {
    title: 'Running Daily query to get expensive products',
    tags: ['enhancement', 'feature'],
    created_by: 'Bonnie',
  },
  {
    title: 'Run query to fetch the details of most products brought by a user',
    tags: ['enhancement'],
    created_by: 'Bonnie',
  },
];

const colors = ['green', 'blue', 'cyan', 'red', 'pink'];

function Branches() {
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
      <div>
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
        <div className="flex justify-center items-center">
          <div className="flex items-center mt-10">
            <div>
              <input
                type="text"
                className=" w-[60vw] border rounded-md font-light font-mono p-2"
                placeholder="Search Branches.."
              />
            </div>
            <button className="ml-4 border flex hover:bg-gray-100 items-center p-2 rounded-md">
              <LiaTagSolid className="text-gray-600" size={18} />
              <h1 className="ml-2 font-mono font-light text-gray-600">Labels</h1>
            </button>
            <Link to={'/newBranch'}>
              <button className="flex bg-blue-600 hover:bg-blue-700 items-center rounded-md ml-2 p-2">
                <h1 className="font-mono text-white font-light">New Branch</h1>
              </button>
            </Link>
          </div>
          {/* <div className='border rounded-md'>
                <div className='border-b p-2'>
                    <h1>he</h1>
                </div>
            </div> */}
        </div>
        <div className="flex items-center mt-5 justify-center">
          <div className="w-[77vw]">
            <div className="border rounded-md">
              <div className="px-4 py-2 flex items-center border-b">
                <GoIssueOpened className="text-green-500" size={24} />
                <h1 className="ml-3 font-light font-mono">Branches open</h1>
              </div>

              {branches.map((branch, idx) => {
                return (
                  <div className="p-4 border-b hover:bg-gray-50">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <GoIssueOpened className="text-green-500" size={24} />
                        <div className="flex-col">
                          <div className="flex items-center">
                            <h1 className="ml-3 font-bold font-mono hover:text-blue-600">{branch.title}</h1>
                            {branch.tags.map((tag, idx) => {
                              return (
                                <div
                                  className={`ml-2 border border-blue-300 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50  px-2 rounded-2xl`}
                                >
                                  <h1 className={`font-mono font-light text-sm text-blue-500`}>{tag}</h1>
                                </div>
                              );
                            })}
                          </div>
                          <div className="ml-3">
                            <h1 className="text-gray-600 font-mono">#9 opened by {branch.created_by}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <PiChatsThin size={24} />
                        <h1 className="ml-1 font-light text-gray-600">2</h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branches;
