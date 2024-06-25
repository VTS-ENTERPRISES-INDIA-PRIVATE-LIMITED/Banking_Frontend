import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Upload from './Uploads/Uploads';
import Login from './Login/Login'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import ResetPassword from './PasswordReset/PasswordReset';
import EmailVerification from './EmailVerification/EmailVerification';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import PersonalDetails from './AgentRegistration/AgentRegistration'
const Tabss = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const [completedTabs, setCompletedTabs] = useState([]);

  const handleFormSubmit = () => {
    setCompletedTabs([...completedTabs, '1']);
  };
  const [activeKey,setActiveKey] = useState('1')
  const handletab = (key) => {
  setActiveKey(key)
}
  const labelArray = ["Personal Information", "Upload Documents", "Email Verification"];
  const tabArray = [<PersonalDetails onComplete={(e)=>handletab(e)} />, <Upload onComplete={(e)=>handletab(e)}/>, <EmailVerification onSubmit={handleFormSubmit}/>];
  const handleTabs = (key) => {
    setActiveKey(key)
    console.log("key cliked is " ,key)
  }
  return (
    <div>
      
      <Tabs
        defaultActiveKey='1'
        activeKey={activeKey}
        onChange={handleTabs}
        tabPosition={tabPosition}
        items={tabArray.map((item, i) => {
          
          const id = String(i + 1);
          const key = i
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
      
    </div>
  )
}

export default Tabss
