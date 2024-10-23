import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import { CiCirclePlus } from 'react-icons/ci'
import { useState } from 'react'
import { DiMongodb } from 'react-icons/di'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'

function SidebarForDatabases({setShowModal}: any) {
    const [tableDetailsButton, setTableDetailsButton] = useState(false);
    const [tableDetailsButtonIdx, setTableDetailsButtonIdx] = useState(-1);
    const [SourceIdx, setSourceIdx] = useState(-1);
    const dataSources = [
        {
          name: 'Sales',
          tables: ['orders', 'return_sales'],
          icon: <DiMongodb className="text-green-600" size={24} />,
        },
        {
          name: 'Social App',
          tables: ['users', 'posts', 'comments'],
          icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
        },
        {
          name: 'Employees',
          tables: ['lists', 'teams', 'developers'],
          icon: <SiMysql className="text-yellow-600" size={24} />,
        },
      ];
  return (
        <div className=" w-1/4 h-screen border-r border-gray-300">
          <div className="border-b p-3 border-gray-300">
            <h1 className="text-2xl font-mono font-bold text-blue-600">_Ascendix</h1>
          </div>
          <div className="p-3">
            <h1 className="text-lg text-blue-600 font-mono">Databases</h1>
            <div className="my-3">
              <form className="max-w-md mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="flex border border-gray-300 rounded-lg">
                  <div className=" inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block focus:outline-none w-full p-1 font-mono ps-10 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search.."
                    required
                  />
                </div>
              </form>
            </div>
            {/* Here i should be able to add multiple databases from the backend */}
            {dataSources.map((item, idx1) => {
              return (
                <div key={idx1} className="my-3 transition-all duration-700 ease-in-out">
                  <div className="flex items-center">
                    <div className="border border-gray-300 rounded-lg p-1">{item.icon}</div>
                    <div className="ml-3">
                      <h1 className="text-lg font-mono">{item.name}</h1>
                    </div>
                  </div>
                  {item.tables.map((table, idx) => {
                    return (
                      <div>
                        <div
                          key={idx}
                          className="mt-1 ml-3 flex hover:bg-gray-100 transition-all duration-200 ease-in-out hover:rounded-md items-center"
                        >
                          <button
                            onClick={() => {
                              if (tableDetailsButton === true && tableDetailsButtonIdx === idx && SourceIdx === idx1) {
                                setTableDetailsButton(false);
                                setTableDetailsButtonIdx(-1);
                                setSourceIdx(-1);
                              } else {
                                setTableDetailsButton(true);
                                setTableDetailsButtonIdx(idx);
                                setSourceIdx(idx1);
                              }
                            }}
                            className="tansition-all duration-200 ease-in-out flex items-center"
                          >
                            <MdOutlineChevronRight
                              className={`text-gray-400 ${tableDetailsButton && tableDetailsButtonIdx === idx && SourceIdx === idx1 ? 'transition-all duration-300 ease-in-out rotate-90' : ''}`}
                              size={26}
                            />
                            <h1 className="ml-2 text-sm font-light font-mono">{table}</h1>
                          </button>
                        </div>
                        <div className="ml-10 transition-all duration-700 ease-in-out">
                          {tableDetailsButtonIdx === idx && SourceIdx === idx1 ? (
                            <h1
                              className={`text-gray-400 ${tableDetailsButton && tableDetailsButtonIdx === idx && SourceIdx === idx1 ? 'transition-all duration-300 ease-in-out' : ''}`}
                            >
                              Hello
                            </h1>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    <button className="flex ml-10 items-center mt-2" onClick={() => setShowModal(true)}>
                      <CiCirclePlus className="text-gray-500" size={20} />
                      <h1 className="ml-2 font-mono font-light text-md text-gray-500">Add Table</h1>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default SidebarForDatabases