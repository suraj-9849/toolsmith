import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DataBaseHome from './components/DataBaseHome';
import {Routes, Route} from 'react-router-dom'
import Pricing from './components/Pricing';
import DbEnter from './components/DbEnter';
import Mongo from './components/Mongo';
import DataComp from './components/DataComp';
import Postgres from './components/Postgres';
import Databases from './components/Databases';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DataBaseHome />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/dbenter' element={<DbEnter />} />
        <Route path='/dbenter/mongo' element={<Mongo />} />
        <Route path='/dbenter/postgres' element={<Postgres />} />
        <Route path='/databases' element={<Databases/>} />
      </Routes>
    </>
  );
}

export default App;
