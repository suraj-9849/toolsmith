import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import bonnie from '../icons/bonnie.png';
import thomas from '../icons/thomas.png';
import jese from '../icons/jese.png';

export default function Signup() {
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [reenterPassword, setReenterPassword] = React.useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== reenterPassword) {
            alert("Passwords do not match!!!!!");
            return;
        }
        // console.log(name,email,password,reenterPassword) - > Checking!!
        try {
            const response = await axios.post('http://localhost:5000/api/user/signup', {
                name,
                email,
                password,
            });
            console.log(response.data);
        } catch (e) {
            console.error(e);
            alert("Signup failed!!");
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white min-h-screen">
            <Navbar />
            <div className="flex h-screen items-center justify-center ">
                <div className="flex w-[80vw] items-center">
                    <div className="w-1/2 p-10 h-[70vh] rounded-md hidden content-center sm:flex items-center justify-center bg-blue-600">
                        <div className="mt-10  ">
                            <h1 className="font-mono font-light text-3xl text-white">_Ascendix</h1>
                            <h1 className="text-5xl text-white mt-4">Join Our Community Today</h1>
                            <h1 className="mt-4 text-lg font-light text-gray-100">
                                Sign up now to efficiently manage your databases and join millions of satisfied users worldwide.
                            </h1>
                            <div className="mt-6 flex items-center">
                                <div className="border-r flex items-center border-gray-300">
                                    <img src={bonnie} className="rounded-full border-2 border-white h-10" alt="" />
                                    <img src={thomas} className="rounded-full border-2 ml-[-18px] border-white h-10" alt="" />
                                    <img src={jese} className="rounded-full mr-5 border-2 ml-[-15px] border-white h-10" alt="" />
                                </div>
                                <div className="ml-5 flex">
                                    <h1 className="text-light text-gray-200">Join</h1>
                                    <h1 className="text-white">&nbsp;15.4K+</h1>
                                    <h1 className="textlight text-gray-200">&nbsp;Happy Users</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-full bg-white p-10 sm:p-7 rounded-md shadow-lg">
                        <h2 className="text-3xl font-mono text-blue-600 mb-6 text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="reenterPassword" className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                                <input
                                    id="reenterPassword"
                                    type="password"
                                    value={reenterPassword}
                                    onChange={(e) => setReenterPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <span className="text-sm text-gray-600">Already have an account?</span>
                            <Link to="/login" className="ml-1 text-sm text-blue-600 hover:text-blue-500">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}