import React from 'react'
import bonnie from '../icons/bonnie.png'
import thomas from '../icons/thomas.png'
import jese from '../icons/jese.png'
import Navbar from './Navbar'
import axios from 'axios'
import { CgSpinner } from 'react-icons/cg'

function Login() {

    const [email, setEmail] = React.useState<string>('');
    const [pass, setPass] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const SubmitHandler = async(e: any) => {
        e.preventDefault();
        // console.log("Hello");
        // console.log(email);
        // console.log(pass);
        setLoading(true);
        await axios.post('http://localhost:5000/api/user/login', {
            email: email,
            password: pass
        }).
        then((response) => {
            // setLoading(false);
            console.log(response.data);
        }).
        catch((err) => {
            // setLoading(false);
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })

    }
  return (
        <>
            <div className='bg-gradient-to-b from-blue-100 via-blue-50 to-white'>
            <Navbar /> 
            <div className='flex h-screen  items-center justify-center content-center'>
                <div className='flex w-[80vw] items-center'>
                    <div className='w-1/2 p-10 h-[60vh] rounded-md content-center flex-row bg-blue-600'>
                        <div className='mt-10'>
                            <h1 className='font-mono font-light text-3xl text-white'>_Ascendix</h1>
                            <h1 className='text-5xl text-white mt-4'>Manage Your Databses Efficiently</h1>
                            <h1 className='mt-4 text-lg font-light text-gray-100'>Millions of Agencies around the world manage their databses efficiently using _Ascendix by collecting all the databses at one place without writing extra code.</h1>
                            {/* {i want a message about happy customers in the next line} */}
                            <div className='mt-6 flex items-center'>
                                <div className='border-r flex items-center border-gray-300'>
                                    <img src={bonnie} className='rounded-full border-2 border-white h-10' alt="" />
                                    <img src={thomas} className='rounded-full border-2 ml-[-18px] border-white h-10' alt="" />
                                    <img src={jese} className='rounded-full mr-5 border-2 ml-[-15px] border-white h-10' alt="" />
                                </div>
                                <div className='ml-5 flex'>
                                    <h1 className='text-light text-gray-200'>Over</h1>
                                    <h1 className='text-white'>&nbsp;15.4K</h1>
                                    <h1 className='textlight text-gray-200'>&nbsp;Happy Customers</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[44%]'>
                        <div className='p-10'>
                            <div className='flex justify-center content-center'>
                                <h1 className='text-3xl font-mono text-blue-600'>Login</h1>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-semibold font-mono'>Email</h1>
                                <input type='email' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                className='font-mono border font-light bg-gray-50 p-2 w-full mt-2 resize-none border-gray-300 rounded-md focus:outline-none' placeholder='Enter Your Email'/>
                                <h1 className='font-semibold mt-2 font-mono'>Password</h1>
                                <input type='password' 
                                value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                className='font-mono border p-2 w-full mt-2 bg-gray-50 font-light resize-none border-gray-300 rounded-md focus:outline-none' placeholder='Enter Your Password'/>
                                <button 
                                    onClick={SubmitHandler}
                                className='w-full p-2 bg-blue-600 font-mono mt-4 text-white rounded-md justify-center flex items-center'>
                                    {
                                        loading === true ? <CgSpinner className='animate-spin mx-2' size={20}/>  : null
                                    }
                                    <h1>
                                        Login
                                    </h1>
                                    
                                </button>
                                <div className='flex mt-2'>
                                    <h1 className='font-light font-mono'>Don't have an account?</h1>
                                    <h1 className='font-mono text-blue-600'>&nbsp;SignUp</h1>
                                </div>
                            </div>
                            <div className="my-4 flex items-center gap-4">
                                <hr className="w-full border-gray-300" />
                                <p className="text-sm text-gray-800 text-center">or</p>
                                <hr className="w-full border-gray-300" />
                            </div>

                            <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                                    <path fill="#fbbd00"
                                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                    data-original="#fbbd00" />
                                    <path fill="#0f9d58"
                                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                    data-original="#0f9d58" />
                                    <path fill="#31aa52"
                                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                    data-original="#31aa52" />
                                    <path fill="#3c79e6"
                                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                    data-original="#3c79e6" />
                                    <path fill="#cf2d48"
                                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                    data-original="#cf2d48" />
                                    <path fill="#eb4132"
                                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                    data-original="#eb4132" />
                                </svg>
                            Continue with google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
  )
}

export default Login