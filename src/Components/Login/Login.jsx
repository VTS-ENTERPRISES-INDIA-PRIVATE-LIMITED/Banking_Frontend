import React, { useState } from 'react';
import './Login.css';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';

import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;

const Login = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);
    const [passwordVisible, setPasswordVisible] = React.useState(false);


  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };

  const handleGetOtp = () => {
    setShowOtpInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
  };

  <Button
          style={{
            width: 100,
          }}
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </Button>

  return (
    <div className='login'>
      <div className="login-container">
        <div className="left-section">
        </div>
        <div className="right-section">
          <div className="login-box">
            <center><h2>Welcome to Zigma Banking</h2></center>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="accountNumber">Account number:</label>
                <Input type="text" id="accountNumber" name="accountNumber" required placeholder="Enter account number" prefix={<UserOutlined />} />
    <br />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <Input.Password  style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius:"4px", fontSize: "16px"}} type="password"  name="password" required placeholder="Enter Password" />
              </div>
              {showOtpInput && (
                <div className="input-group">
                  <label htmlFor="otp">OTP:</label>
                <Input.OTP mask="🔒" {...sharedProps} />
                  
                </div>
              )}
              <div className="button-group">
                
                <button type="button" className="otp-button" onClick={handleGetOtp}>Get OTP</button>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
            
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember my username on this computer</label>
            </div>
            <div className="additional-links">
              <a href="/" className='forget'>Not Have Account?</a>
              <a href="/ForgotPassword">Forgot Password?</a>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
