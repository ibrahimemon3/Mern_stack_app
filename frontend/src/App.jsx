import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';

function App(){
  return(
    <div className='App'>
      <Routes>
      <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;
