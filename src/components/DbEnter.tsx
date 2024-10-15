import React, { useState } from 'react';
import SideBar from './SideBar';
import { TiTick } from 'react-icons/ti';
import { FaChevronRight } from 'react-icons/fa';
import SelectDs from './SelectDs';
import Connection from './Connection';

function DbEnter(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(props.page);
  return (
    <div className="">
      <div className="flex items-center border-b p-4 border-gray-300 justify-center">
        {selectedIndex === 1 ? (
          <div className="bg-blue-400 border-2 rounded-full border-blue-600">
            <h1 className="px-2 text-white font-mono">1</h1>
          </div>
        ) : (
          <div className=" border-2 rounded-full bg-blue-600 border-blue-600">
            {/* <h1 className='px-2 text-gray-500 font-mono'>1</h1> */}
            <TiTick className="text-white" size={24} />
          </div>
        )}
        {/* <div className='bg-blue-400 border-2 rounded-full border-blue-600'>
                <h1 className='px-2 text-white font-mono'>1</h1>
            </div> */}
        <div>
          <h1 className="font-mono ml-2 text-2xl text-blue-600">Sources</h1>
        </div>
        <div className="mt-1 ml-3">
          <FaChevronRight className=" text-blue-600" />
        </div>
        <div className="ml-3 border-2 rounded-full border-blue-600">
          <h1 className="px-2 font-mono text-blue-600">2</h1>
        </div>
        <div>
          <h1 className="font-mono ml-2 text-2xl text-blue-600">Connection Url</h1>
        </div>
      </div>
    </div>
  );
}

export default DbEnter;
