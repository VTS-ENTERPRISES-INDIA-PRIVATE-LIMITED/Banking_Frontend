import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import { Login } from './Components/Login/Login';
import Transactions from './Components/Transactions/Transactions'
=======
>>>>>>> Stashed changes

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/PasswordReset/PasswordReset';
import React, { useState } from 'react';
import Tabss from './Components/Tabss'
<<<<<<< Updated upstream
=======
>>>>>>> b616d38836350858cba136b654830ceb3808a9db
>>>>>>> Stashed changes

function App() {
  
  return (
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    <div className="App">
     <Login />
     <Transactions />
    </div>
  );
=======
>>>>>>> Stashed changes
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tabss />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />

          
        </Routes>
      
      </BrowserRouter>
  )
<<<<<<< Updated upstream
=======
>>>>>>> b616d38836350858cba136b654830ceb3808a9db
>>>>>>> Stashed changes
}
export default App;
