import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Upload from './Components/Uploads/Uploads';
import Login from './Components/Login/Login'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/PasswordReset/PasswordReset';
import EmailVerification from './Components/EmailVerification/EmailVerification';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import PersonalDetails from './Components/AgentRegistration/AgentRegistration';

function App() {
  const [tabPosition, setTabPosition] = useState('left');
  const [completedTabs, setCompletedTabs] = useState([]);

  const handleFormSubmit = () => {
    setCompletedTabs([...completedTabs, '1']);
  };

  const labelArray = ["Personal Information", "Upload Documents", "Email Verification"];
  const tabArray = [<PersonalDetails onSubmit={handleFormSubmit} />, <Upload onSubmit={handleFormSubmit}/>, <EmailVerification onSubmit={handleFormSubmit}/>];
  return (
    <>
    <Tabs
        tabPosition={tabPosition}
        items={tabArray.map((item, i) => {
          const id = String(i + 1);
          return {
            label: (
              <span>
                {labelArray[i]} {completedTabs.includes(id) && <span className="completed-tab">&#10003;</span>}
              </span>
            ),
            key: id,
            children: item,
          };
        })}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />

          
        </Routes>
      
      </BrowserRouter>
      </>
      
  );
}

export default App;
