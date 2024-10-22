import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { CgOrganisation } from 'react-icons/cg';
import { IoAccessibility } from 'react-icons/io5';
import { GrKey } from 'react-icons/gr';

function SideBarForAccount() {
  return (
    <>
      <div className="pr-2 w-1/6 h-[92vh]">
        <div>
          <h1 className="font-semibold text-gray-600 ">My Account</h1>
          <div className="flex-col items-center">
            <div className="flex items-center hover:bg-gray-200 rounded-md p-2 mt-2">
              <VscAccount className="" size={18} />
              <h1 className="ml-4 font-light">Profile</h1>
            </div>
            <div className="flex items-center hover:bg-gray-200 rounded-md p-2">
              <CgOrganisation className="" size={18} />
              <h1 className="ml-4 font-light">Organisations</h1>
            </div>
            <div className="flex items-center hover:bg-gray-200 rounded-md p-2">
              <IoAccessibility className="" size={18} />
              <h1 className="ml-4 font-light">Security & Access</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-600 mt-5">Settings</h1>
          <div className="flex items-center hover:bg-gray-200 rounded-md p-2 mt-2">
            <GrKey className="" size={18} />
            <h1 className="ml-4 font-light">Passwords</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarForAccount;
