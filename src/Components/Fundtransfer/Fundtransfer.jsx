import React from 'react'
import { Form, Input, Pagination,Button } from 'antd';
import'./Fundtransfer.css';
import { FormItem } from 'antd-mobile/es/components/form/form-item';
export default function Fundtransfer() {
  return (
    
    <div className="transactions-container">
       
      <Form layout="vertical">
        <Form.Item className='label' label="Account Number">
          <Input placeholder='Enter Recipient Account Number' required />
        </Form.Item>
        <Form.Item className='label' label="IFSC Code">
          <Input placeholder='Enter IFSC Code' required />
        </Form.Item>
        <Form.Item className='label' label="Amount">
          <Input placeholder='Enter Amount' required />
        </Form.Item>
        
        <Form.Item className='label' label="MPIN">
          <Input placeholder='Enter MPIN' required />
        </Form.Item>
      
      <Form.Item><button> Continue</button></Form.Item>
      </Form>
      
    </div>
  )
}
