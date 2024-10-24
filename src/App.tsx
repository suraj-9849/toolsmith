import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DataBaseHome from './components/DataBaseHome';
import { Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import DbEnter from './components/DbEnter';
import Mongo from './components/Mongo';
import DataComp from './components/DataComp';
import Postgres from './components/Postgres';
import Databases from './components/Databases';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SelectDs from './components/SelectDs';
import Connection from './components/Connection';
import Signup from './components/Signup';
import Account from './components/Account';
import Branches from './components/Branches';
import NewBranch from './NewBranch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DataBaseHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dbenter" element={<SelectDs />} />
        <Route path="/connection/:source" element={<Connection />} />
        <Route path="/dbenter/mongo" element={<Mongo />} />
        {/* <Route path='/dbenter/postgres' element={<Postgres />} /> */}
        <Route path="/databases" element={<Databases />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account/profile" element={<Account />} />
        <Route path="/database/branches" element={<Branches />} />
        <Route path="/newBranch" element={<NewBranch />} />
      </Routes>
    </>
  );
}

export default App;
