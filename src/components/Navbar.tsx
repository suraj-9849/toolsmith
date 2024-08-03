import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isHovering, setIsHovering] = React.useState(false);
  return (
    <div className='p-8 ml-20 mr-10 flex justify-between'>
        <div>
            <Link to={"/"}>
                <h1 className='font-mono text-4xl font-semibold text-blue-600'>_Ascendix</h1>
            </Link>
        </div>
        <div className='flex mt-1'>
            <div 
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
            className=''>
                <button className='font-mono text-xl text-black'>Product</button>
                {
                    isHovering && (
                        <div className='transition duration-500 ease-in absolute bg-gray-100 p-4'>
                            <p>Product 1</p>
                            <p>Product 2</p>
                            <p>Product 3</p>
                        </div>
                    )
                }
            </div>
            <div>
                <div className='mx-10'>
                    <button className='font-mono text-xl text-black'>About</button>
                </div>
            </div>
            <div className=''>
                <Link to={"/pricing"}>
                    <button className='font-mono text-xl text-black'>Pricing</button>
                </Link>
            </div>
        </div>
        <div className='justify-evenly'>
            <button className='mx-4 font-mono transition duration-500 hover:bg-blue-100 text-lg p-2 hover:text-blue-600 border-2 border-solid border-blue-600 rounded-md'>Login</button>
            <button className='mx-4 rounded-md hover:bg-blue-600  border-blue-600 font-mono border-solid hover:border-blue-600 p-2 border-2 bg-blue-100  hover:text-white transition duration-300 text-lg text-blue-600'>Signup</button>
        </div>
    </div>
  )
}

export default Navbar