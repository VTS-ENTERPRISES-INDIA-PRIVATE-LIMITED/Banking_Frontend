import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from './Uploads/Uploads';
import Login from './Login/Login';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './PasswordReset/PasswordReset';
import EmailVerification from './EmailVerification/EmailVerification';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import PersonalDetails from './AgentRegistration/AgentRegistration';

const Tabss = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const [completedTabs, setCompletedTabs] = useState([]);
  const [activeKey, setActiveKey] = useState('1');

  const handleFormSubmit = () => {
    setCompletedTabs([...completedTabs, '3']);
  };

  const handleTabComplete = (tabKey) => {
    if (tabKey === '1') {
      setCompletedTabs([...completedTabs, tabKey]);
    }
  };

  const handletab = (key) => {
    setActiveKey(key);
  };

  const labelArray = ['Personal Information', 'Upload Documents', 'Email Verification'];
  const tabArray = [
    <PersonalDetails onComplete={() => handleTabComplete('1')} />,
    <Upload onComplete={() => handleTabComplete('2')} />,
    <EmailVerification onSubmit={handleFormSubmit} />,
  ];

  const handleTabs = (key) => {
    setActiveKey(key);
    console.log('key clicked is ', key);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={handleTabs}
        tabPosition={tabPosition}
        items={tabArray.map((item, i) => {
          const id = String(i + 1);
          return {
            label: (
              <span>
                {labelArray[i]} {completedTabs.includes(id) && <span className="completed-tab" >✅</span>}
              </span>
            ),
            key: id,
            children: item,
          };
        })}
      />
    </div>
  );
};

export default Tabss;
