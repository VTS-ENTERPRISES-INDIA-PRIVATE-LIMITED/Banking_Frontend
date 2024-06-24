import React, { useState } from 'react'
import './Verifymail.css'
import { Button, Checkbox, Form, Input } from 'antd';

import {Outlet, useNavigate} from 'react-router-dom'

export default function Verifymail() {
    
    const [vis,setVis] = useState(false)
    const getOtp = ()=>{
        setVis(true)

    }
    const VerifyOTP =()=>{
        alert("Your registration is under process")
    }
   
  return (
<div className='page-container'>
    <div className="form-container">
        <Outlet/>
    <Form>
        <Form.Item className='label' label="Email"></Form.Item>
        <Form.Item name="email" >
          <Input block placeholder='Enter your email address' required></Input>
        </Form.Item>
        {vis &&(
           
           <>
           <Form.Item className='label' label="Enter OTP"></Form.Item>
           <Form.Item name="otp">
               <Input block placeholder='Enter your OTP' required></Input>
           </Form.Item>
       </>
      )}
        <Form.Item>
          {!vis && <Button onClick={getOtp} >Send OTP</Button>}
          {vis && (<Button onClick={VerifyOTP} >Verify OTP</Button>)}

        </Form.Item>
      
      </Form>
      </div>
      </div>
  )
}
