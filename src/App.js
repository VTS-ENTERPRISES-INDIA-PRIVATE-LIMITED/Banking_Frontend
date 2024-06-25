import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/PasswordReset/PasswordReset';
import React, { useState } from 'react';
import Recharge from "./Components/Recharge/Recharge"


import Tabss from './Components/Tabss'

function App() {
  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tabss />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/Recharge' element={<Recharge />} />
          
          
        </Routes>
      
      </BrowserRouter>
  )
}
export default App;
