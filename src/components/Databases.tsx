import React, { useEffect, useRef } from 'react';
import SideBarForDashboard from './SideBarForDashboard';
import { DiMongodb } from 'react-icons/di';
import { MdOutlineChevronRight } from 'react-icons/md';
import { BiLogoPostgresql } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';
import { SiMysql } from 'react-icons/si';
import user from '../icons/user.jpg';
import { IoSettingsOutline } from 'react-icons/io5';
import Editor, { loader } from '@monaco-editor/react';
import { IoPlayOutline } from 'react-icons/io5';
import { MdOutlineFileDownload } from 'react-icons/md';
import { RiFileExcel2Line } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { HiOutlineTableCells } from 'react-icons/hi2';
import { TiTick } from 'react-icons/ti';
import { Interface } from 'readline';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { VscAccount } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { CgOrganisation } from "react-icons/cg";

function Databases() {
  // get datasources from the backend
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

  interface Columns {
    colName: string;
    colDataType: string;
    attribute: string;
  }

  interface addTable {
    tableName: String;
    columns: [Columns];
  }

  let columnToEnter: Columns = {
    colName: '',
    colDataType: '',
    attribute: '',
  };

  let tableToEnter: addTable = {
    tableName: '',
    columns: [columnToEnter],
  };

  // const [addNewColumn, setAddNewColumn] = React.useState<Columns>(columnToEnter);

  const [table, setTable] = React.useState<Columns[]>([]); // for adding the table

  const [colName, setColName] = React.useState<string>(''); // this is for the column name

  const [dataType, setDataType] = React.useState<string>(''); // this is for the datatype

  const [attr, setAttr] = React.useState<string>(''); // this is for the attribute

  const [showModal, setShowModal] = React.useState<boolean>(false); // this is for showing the modal or not

  const [tableName, setTableName] = React.useState<string>(''); // for storing the table name

  const [addCol, setAddCol] = React.useState<number>(1); // this is for adding a new column

  const [saved, setSaved] = React.useState<boolean>(false); // this is for saving the column

  const [tillSavedIdx, setTillSavedIdx] = React.useState<number>(-1); // this is for saving the column

  const [fillingErrorIdx, setFillingErrorIdx] = React.useState<number>(-1); // this is for error finding

  const [fillingError, setFillingError] = React.useState<boolean>(false); // this is for error finding

  const [tableDetailsButton, setTableDetailsButton] = React.useState<boolean>(false); // this is for showing the table details

  const [tableDetailsButtonIdx, setTableDetailsButtonIdx] = React.useState<number>(-1); // this is for showing the table details

  const [SourceIdx, setSourceIdx] = React.useState<number>(-1); // this is for showing the table details

  const [showAccountModal, setShowAccountModal] = React.useState<boolean>(false); // this is for showing the account modal

  const modalRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowAccountModal(false);
    }
  }

  const headings = ['Id', 'FirstName', 'LastName', 'email', 'phone'];

  const tableData = [
    ['1', 'Aarav', 'Sharma', 'aarav.sharma123@example.com', '91234567'],
    ['2', 'Isha', 'Verma', 'isha.verma234@example.com', '98765432'],
    ['3', 'Rahul', 'Kapoor', 'rahul.kapoor345@example.com', '93456781'],
    ['4', 'Sneha', 'Mehta', 'sneha.mehta456@example.com', '94567812'],
    ['5', 'Vikram', 'Singh', 'vikram.singh567@example.com', '95678923'],
    ['6', 'Anjali', 'Patel', 'anjali.patel678@example.com', '96789034'],
    ['7', 'Rohan', 'Gupta', 'rohan.gupta789@example.com', '97890145'],
    ['8', 'Tanya', 'Rao', 'tanya.rao890@example.com', '98901256'],
    ['9', 'Kunal', 'Desai', 'kunal.desai901@example.com', '99012367'],
    ['10', 'Priya', 'Nair', 'priya.nair012@example.com', '90123478'],
    ['11', 'Ritika', 'Joshi', 'ritika.joshi123@example.com', '91234589'],
    ['12', 'Aman', 'Malik', 'aman.malik234@example.com', '92345690'],
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
  // loader.init().then((monaco) => {
  //     monaco.editor.defineTheme('myTheme1', {
  //         base: 'vs',
  //         inherit: true,
  //         rules: [],

  //         colors: {
  //             'editor.background': '#000000',
  //             'editorUnnecessaryCode.opacity': "#000",
  //         },
  //     });
  // });
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [setShowAccountModal])
  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {/* <h1>{changeTable.columns.length}</h1> */}
        <div
          className={`bg-white transition-all duration-700 flex-row ease-in-out rounded-md w-[50vw] max-h-[60vh] h-[60vh] ${showModal ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
        >
          <div className="flex p-2 border-b border-gray-300 items-center justify-between">
            <div className="flex items-center">
              <div className="border p-2 border-gray-300 rounded-md">
                <HiOutlineTableCells className="text-blue-600" size={20} />
              </div>
              <h1 className="font-mono ml-2 text-lg text-blue-600">Add Table to source</h1>
            </div>
            <div className="">
              <button
                onClick={() => {
                  setFillingError(false);
                  // setChangeTable(tableToEnter);
                  setTable([]);
                  setColName('');
                  setDataType('');
                  setAttr('');
                  setAddCol(1);
                  setSaved(false);
                  setTillSavedIdx(-1);
                  setFillingErrorIdx(-1);
                  setShowModal(false);
                }}
                className="p-2 border font-light border-gray-300 text-sm rounded-md"
              >
                X
              </button>
            </div>
          </div>
          <div className="p-2 max-h-[46vh] h-[46vh] overflow-y-scroll">
            <div className="flex-row w-full">
              <h1 className="font-mono text-blue-600 font-light">Table Name</h1>
              <input
                onChange={(e) => {
                  // changeTable.tableName = e.target.value;
                  // setChangeTable(changeTable);
                  setTableName(e.target.value);
                }}
                type="text"
                placeholder="Untitled table"
                className="border p-2 bg-gray-50 font-mono font-light border-gray-300 rounded-md focus:outline-none w-full"
              />
            </div>
            {Array.from({
              length: table.length + addCol,
            }).map((_, idx) => {
              return (
                <div key={idx} className="flex-row transition-all duration-300 ease-in mt-2">
                  <h1 className="font-mono text-blue-600 font-light">Column {idx + 1}</h1>
                  <div className="flex items-center transition-all duration-300 ease-in justify-between">
                    {tillSavedIdx >= idx ? (
                      <>
                        <div className="p-2 w-1/2 border bg-gray-50 rounded-md border-gray-300">
                          <h1 className="font-mono text-md">{table[idx].colName}</h1>
                        </div>
                        <div className="p-2 w-1/2 ml-2 rounded-md border bg-gray-50 border-gray-300">
                          <h1 className="font-mono text-md">{table[idx].colDataType}</h1>
                        </div>
                        <div className="p-2 w-1/2 ml-2 border rounded-md bg-gray-50 border-gray-300">
                          <h1 className="font-mono text-md">{table[idx].attribute}</h1>
                        </div>
                      </>
                    ) : (
                      <>
                        <input
                          // value={changeTable.columns[idx].colName}
                          onChange={(e) => {
                            //setColName(e.target.value);
                            setColName(e.target.value);
                          }}
                          type="text"
                          placeholder="Untitled column"
                          className={`border p-2 w-1/2 bg-gray-50 font-mono font-light  ${fillingError && fillingErrorIdx === idx ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none`}
                        />
                        <input
                          // value={changeTable.columns[idx].colDataType}
                          onChange={(e) => {
                            //setDataType(e.target.value);
                            setDataType(e.target.value);
                          }}
                          type="text"
                          placeholder="datatype"
                          className={`border p-2 w-1/2 bg-gray-50 font-mono font-light  ${fillingError && fillingErrorIdx === idx ? 'border-red-500' : 'border-gray-300'} ml-2 rounded-md focus:outline-none`}
                        />
                        <input
                          onChange={(e) => {
                            setAttr(e.target.value);
                          }}
                          type="text"
                          placeholder="attribute"
                          className={`border p-2 w-1/2 ml-2 bg-gray-50 font-mono font-light  ${fillingError && fillingErrorIdx === idx ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none`}
                        />
                      </>
                    )}
                    <button
                      onClick={() => {
                        if (colName === '' || dataType === '' || attr === '') {
                          setFillingError(true);
                          setFillingErrorIdx(idx);
                        } else {
                          setFillingError(false);
                          setFillingErrorIdx(-1);
                          setTillSavedIdx(idx);
                          setSaved(true);
                          setTable([
                            ...table,
                            {
                              colName: colName,
                              colDataType: dataType,
                              attribute: attr,
                            },
                          ]);
                          setColName('');
                          setAddCol(0);
                          setDataType('');
                          setAttr('');
                        }
                      }}
                      className={`p-2 rounded-md ${tillSavedIdx >= idx ? 'bg-green-500' : 'bg-none'} border border-green-500 ml-2 w-1/7`}
                    >
                      <TiTick
                        className={`font-light ${tillSavedIdx >= idx ? 'text-white' : 'text-green-500'}`}
                        size={24}
                      />
                    </button>
                    <button
                      onClick={() => {
                        if (idx === fillingErrorIdx) {
                          setFillingError(false);
                          setFillingErrorIdx(-1);
                        }
                        if (tillSavedIdx >= idx) {
                          let newTable = table;
                          newTable.splice(idx, 1);
                          setTable(newTable);
                          setTillSavedIdx(tillSavedIdx - 1);
                        } else if (addCol === 1) {
                          setAddCol(0);
                        } else {
                          setColName('');
                          setDataType('');
                          setAttr('');
                          setFillingError(false);
                          setFillingErrorIdx(-1);
                        }
                      }}
                      className="p-2 rounded-md border border-red-500 ml-2 w-1/7"
                    >
                      <RiDeleteBin6Line className="text-red-500" size={24} />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex mt-4 justify-end items-center">
              <button
                onClick={() => {
                  if (!saved && (colName === '' || dataType === '' || attr === '')) {
                    if (addCol === 0) {
                      setAddCol(1);
                    } else {
                      setFillingError(true);
                      setFillingErrorIdx(tillSavedIdx + 1);
                    }
                  } else {
                    setFillingError(false);
                    setFillingErrorIdx(-1);
                    // setTillSavedIdx(tillSavedIdx + 1);
                    setTable([...table]);
                    setAddCol(1);
                    setSaved(false);
                    setColName('');
                    setDataType('');
                    setAttr('');
                  }
                }}
                className="flex items-center p-2 border border-gray-300 rounded-md"
              >
                <GoPlus className="text-blue-600" />
                <h1 className="font-mono font-light text-blue-600">Add column</h1>
              </button>
            </div>
          </div>
          <div className=" p-2 w-full">
            <button className="w-full flex items-center justify-center p-2 items-cetner rounded-md bg-blue-600">
              <GoPlus className="text-white" size={20} />
              <h1 className="font-mono ml-1 text-white">Add Table</h1>
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex">
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
        <div className="w-screen">
          <div className="border-b flex items-center justify-end pr-5 border-gray-300 p-3">
            <Link to={'/dbenter'}>
              <button className="flex bg-blue-600 rounded-md mr-3 p-1 items-center">
                <GoPlus className="text-white" size={20} />
                <h1 className="text-white font-mono text-md font-light">Add Source</h1>
              </button>
            </Link>
            <button
              onClick={() => {
                setShowAccountModal(true);
              }}
            >
              <img src={user} alt="" className=" h-[2rem] w-9 rounded-full" />
            </button>
            {
              showAccountModal ? (
                <div ref={modalRef} className="absolute right-10 w-48 top-12 bg-white border border-gray-300 rounded-md p-2">
                  <Link to={'/account'}>
                    <div className='flex items-center rounded-md hover:bg-gray-200 p-2'>
                      <VscAccount className='text-black' size={20}/> 
                      <h1 className="font-mono text-md ml-2 text-black font-light">Account</h1>
                    </div>
                  </Link>
                  <div className='flex items-center rounded-md hover:bg-gray-200 p-2'>
                    <IoSettingsOutline className='text-black' size={20}/>
                    <h1 className="font-mono text-md ml-2 text-black font-light">Settings</h1>
                  </div>
                  <div className='flex items-center rounded-md hover:bg-gray-200 p-2'>
                    <CgOrganisation className='text-black' size={20}/>
                    <h1 className="font-mono text-md ml-2 text-black font-light">Organisations</h1>
                  </div>
                  <div className='border-t border-gray-300 mb-2 mt-2'>

                  </div>
                  <div className='flex items-center rounded-md hover:bg-gray-200 p-2'>
                    <CiLogout className='text-red-500' size={20}/>
                    <h1 className="font-mono text-md ml-2 text-red-500">Logout</h1>
                  </div>
                </div>
              ) : (
                <></>
              )
            }
          </div>
          <div className="flex">
            <div className="w-3/4 p-4 h-[93vh] border-r flex-row border-gray-300">
              <div className="">
                <div className="p-2 justify-between border-t border-r border-l rounded-t-md border-gray-300 flex items-center">
                  <div className="">
                    <h1 className="font-mono ml-3 text-sm">SQL Editor</h1>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-5">
                      <button className="flex items-center">
                        <h1 className="text-sm border-r pr-3 border-gray-300 font-mono text-blue-600">
                          Updated Right now • 100 rows
                        </h1>
                      </button>
                    </div>
                    <button className="flex border border-gray-300 hover:bg-gray-100 rounded-md p-2 items-center">
                      <IoPlayOutline />
                      <h1 className="ml-2 font-mono text-sm">Run Query</h1>
                    </button>
                  </div>
                </div>
                {showModal === true ? (
                  <div className="bg-[#f9fafb] h-[40vh]"></div>
                ) : (
                  <Editor
                    height={'40vh'}
                    defaultLanguage="sql"
                    defaultValue="SELECT * FROM users"
                    theme={`${showModal ? 'myTheme1' : 'myTheme'}`}
                    className="border p-1 border-gray-300 bg-[#f9fafb] rounded-b-md"
                  />
                )}
              </div>
              <div className="mt-4">
                <div className="flex p-2 border-t border-l border-r border-gray-300 rounded-t-md items-center justify-between">
                  <h1 className="font-mono ml-3 text-md">Results</h1>
                  <button className="flex border p-2 rounded-md hover:bg-gray-100 border-gray-300 items-center">
                    <MdOutlineFileDownload />
                    <h1 className="text-sm ml-1 font-mono">Download .csv</h1>
                  </button>
                </div>
                <div className=" max-h-64 overflow-y-auto overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-xs">
                      <tr className="border-l border-r uppercase border-t border-gray-300">
                        {headings.map((heading, idx) => {
                          return (
                            <th key={idx} scope="col" className=" px-6 py-3 font-mono">
                              {heading}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="border border-gray-300 rounded-md">
                      {tableData.map((row, idx) => {
                        return (
                          <tr
                            key={idx}
                            className="text-sm border-x hover:bg-gray-50 border-gray-300 border-t justify-center"
                          >
                            {row.map((data, idx) => {
                              return (
                                <td key={idx} className="px-10 text-center py-4 font-mono">
                                  {data}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <div className="p-3 mt-1 flex-row items-center justify-center justify-items-center">
                <div className="flex-row items-center justify-center border border-gray-300 rounded-md p-2">
                  <div>
                    <h1 className="font-mono text-md text-center text-blue-600">Import Excel data</h1>
                  </div>
                  <div className="flex items-center justify-items-center justify-center mt-3">
                    <button className="flex items-center p-2 rounded-md hover:bg-green-600 bg-green-500">
                      <RiFileExcel2Line className="text-white" size={22} />
                      <h1 className="font-mono text-sm ml-2 text-white">Import</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Databases;
