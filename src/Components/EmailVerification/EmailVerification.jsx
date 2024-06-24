import React, { useState, useEffect } from 'react';
import './EmailVerification.css';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
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

  useEffect(() => {
    let timer;
    if (isOtpSent && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerComplete(true);
    }

    return () => clearTimeout(timer);
  }, [isOtpSent, timeLeft]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setIsOtpSent(true);
    setIsTimerComplete(false);
    setTimeLeft(90);
  };

  const handleResendOtp = () => {
    setIsOtpSent(false);
    setEmail('');
    setTimeLeft(90);
  };

  return (
    <div className='email-verification'>
      <div className="email-verification-container">
        <div className="illustration-section">
          <img src="https://res.cloudinary.com/dsbuzlxpw/image/upload/v1719228494/li050afkupfgja4cyhus.jpg" alt="Forgot Password Illustration" className="illustration-image" />
        </div>
        <div className="form-section">
          <h2>Email Verification</h2>
          <p>We will send an OTP to verify your email{email}.</p>
          <form onSubmit={handleSendOtp}>
            
            {isOtpSent && (
                <div className="input-group">
                  <label htmlFor="otp">OTP:</label>
                <Input.OTP mask="🔒" {...sharedProps} />
                  
                </div>
            )}
            {isOtpSent && !isTimerComplete && (
            <div className="timer-section">
              <p>Time remaining: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
            </div>
          )}
          {isOtpSent && isTimerComplete && (
            <div className="verification-failed">
              <p>Verification failed.</p>
              
            </div>
          )}
            <button type="submit" className="reset-button" disabled={isOtpSent}>
              {isOtpSent ? 'Verify' : 'Send OTP'}
              
            </button>
            <p><a href="#" className="change-email-button" onClick={handleResendOtp}>Change Email Address</a></p>

            <p><a href="#" onClick={handleSendOtp}  disabled={isOtpSent}>{isOtpSent ? 'Resend OTP' : ''}</a></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
