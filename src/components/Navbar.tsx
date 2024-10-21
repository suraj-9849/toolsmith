import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="p-4 flex items-center justify-between">
      <div>
        <Link to={'/'}>
          <h1 className="font-mono text-2xl font-semibold text-blue-600">_Ascendix</h1>
        </Link>
      </div>
      <div className="hidden md:flex mt-1 items-center space-x-6">
        <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
          <button className="font-mono text-xl text-black">Product</button>
          {isHovering && (
            <div className="transition-all duration-500 ease-in absolute bg-gray-100 p-4">
              <p>Product 1</p>
              <p>Product 2</p>
              <p>Product 3</p>
            </div>
          )}
        </div>
        <div>
          <button className="font-mono text-xl text-black">About</button>
        </div>
        <div>
          <Link to={'/pricing'}>
            <button className="font-mono text-xl text-black">Pricing</button>
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-start space-y-4 p-4 md:hidden">
          <Link to={'/'}>
            <button className="font-mono text-xl text-black">Home</button>
          </Link>
          <button className="font-mono text-xl text-black">Product</button>
          <button className="font-mono text-xl text-black">About</button>
          <Link to={'/pricing'}>
            <button className="font-mono text-xl text-black">Pricing</button>
          </Link>
          <Link to={'/login'}>
            <button className="font-mono text-xl text-black">login</button>
          </Link>
          <Link to={'/signup'}>
            <button className="font-mono text-xl text-black">Signup</button>
          </Link>
        </div>
      )}
      <div className="hidden md:flex items-center justify-evenly">
        <Link to={'/login'}>
          <button className="mx-4 font-mono transition duration-300 hover:scale-105 hover:bg-blue-100 text-md p-2 hover:text-blue-600 text-blue-600 border border-solid border-blue-600 rounded-md">
            Login
          </button>
        </Link>
        <Link to={"/signup"} >
        <button className="mx-4 rounded-md hover:bg-blue-600 border-blue-600 font-mono font-light border-solid hover:border-blue-600 p-2 border text-md bg-blue-100 hover:text-white transition duration-300 text-blue-600">
          Signup
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
