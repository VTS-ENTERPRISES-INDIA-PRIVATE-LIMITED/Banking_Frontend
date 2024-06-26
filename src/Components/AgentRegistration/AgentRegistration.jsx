import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, Checkbox, message } from 'antd';
import Captcha from './Captcha';
import './AgentRegistration.css';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="91">+91</Option>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

const AgentRegistration = ({ onComplete}) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [captchaValid, setCaptchaValid] = useState(false);
  
  const onFinish = (values) => {
    
    if (!captchaValid) {
      message.error('Invalid Captcha');
      return;
    }

    if (!validatePhoneNumber(values.phone)) {
      form.setFields([
        {
          name: 'phone',
          errors: ['Please input a valid phone number!'],
        },
      ]);
      return;
    }

    if (!validateEmail(values.email)) {
      form.setFields([
        {
          name: 'email',
          errors: ['Please input a valid email address!'],
        },
      ]);
      return;
    }

    if (!validateName(values.firstName)  || !validateName(values.lastName)) {
      message.error('Name fields should not contain numbers or special characters');
      return;
    }

    console.log('Received values of form: ', values);
     onComplete('2')
  };

  const validatePhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  };


  const validateName = (name) => {
    return /^[a-zA-Z ]+$/.test(name);
  };

  
  const changeTab = () => {
 
}
  return (
    <div className='container'>
      
        <div className="personalDetails">
          <h2 className="heading">New Account Registration</h2>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="form-section">
              <div className="form-group">
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: 'Please input your first name!' },
                    { pattern: /^[a-zA-Z ]+$/, message: 'First name should not contain numbers or special characters' },
                  ]}
                >
                  <Input />
                </Form.Item>
                 
                <Form.Item
                  label="Telephone Number"
                  name="telephone"
                >
                  <Input />
              </Form.Item>
               <Form.Item
                  name="city"
                  label="City"
                  rules={[{ required: true, message: 'Please select your city!' }]}
                >
                  <Select style={{ width: '100%' }}>
                    <Option value="Mumbai">Mumbai</Option>
                    <Option value="Nagpur">Nagpur</Option>
                    <Option value="Indore">Indore</Option>
                    <Option value="Bhilai">Bhilai</Option>
                    <Option value="Cuttack">Cuttack</Option>
                    <Option value="Kochi">Kochi</Option>
                    <Option value="Udaipur">Udaipur</Option>
                    <Option value="Bhavnagar">Bhavnagar</Option>
                    <Option value="Dehradun">Dehradun</Option>
                    <Option value="Asansol">Asansol</Option>
                    <Option value="Nanded">Nanded</Option>
                    <Option value="Kolhapur">Kolhapur</Option>
                    <Option value="Ajmer">Ajmer</Option>
                    <Option value="Gulbarga">Gulbarga</Option>
                    <Option value="Jamnagar">Jamnagar</Option>
                    <Option value="Ujjain">Ujjain</Option>
                  </Select>
                </Form.Item>
                 <Form.Item
                  name="branch"
                  label="Branch"
                  rules={[{ required: true, message: 'Please input your branch!' }]}
                >
                  <Input />
                </Form.Item>
               
              </div>
            <div className="form-group">
             <Form.Item
                  label="Middle Name"
                  name="middleName"
                >
                  <Input />
              </Form.Item>
               <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Please input your phone number!' },
                    { pattern: /^\d{10}$/, message: 'Invalid Phone Number' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        const prefix = getFieldValue('prefix');
                        if (!prefix && value) {
                          return Promise.reject('Please select prefix!');
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              </Form.Item>
                
                
               <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: true, message: 'Please select your state!' }]}
                >
                  <Select style={{ width: '100%' }}>
                    <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                    <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
                    <Option value="Assam">Assam</Option>
                    <Option value="Madhya Pradesh">Madhya Pradesh</Option>
                    <Option value="Maharashtra">Maharashtra</Option>
                    <Option value="West Bengal">West Bengal</Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="country"
                  label="Country"
                  rules={[{ required: true, message: 'Please select your state!' }]}
                >
                  <Select style={{ width: '100%' }}>
                    <Option value="India">India</Option>
                    <Option value="China">China</Option>
                    <Option value="Japan">Japan</Option>
                    <Option value="Malaysia">Malaysia</Option>
                    <Option value="Korea">Korea</Option>
                    <Option value="South-Korea">South-Korea</Option>
                  </Select>
                </Form.Item>
              </div>
            <div className="form-group">
               <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                    { pattern: /^[a-zA-Z ]+$/, message: 'Last name should not contain numbers or special characters' },
                  ]}
                >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    { required: true, message: 'Please input your E-mail!' },
                    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid Email Address' },
                  ]}
                >
                  <Input />
                </Form.Item>
              
             <Form.Item
  label="Pin-Code"
  name="pincode"
  rules={[
    { required: true, message: 'Please input your pin code number!' },
    { pattern: /^[1-9][0-9]{5}$/, message: 'Pin code should contain exactly 6 digits!' },
  ]}
>
  <Input />
</Form.Item>

                <Form.Item label="Captcha" required>
                  <Captcha onValidate={setCaptchaValid} />
                </Form.Item>
              </div>
            </div>
            <div className="form-section">
              <div className="intro">
                <Form.Item
                  name="acceptTerms"
                  valuePropName="checked"
                  wrapperCol={{ span: 24 }}
                  style={{ textAlign: 'center' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please accept the terms and conditions',
                    },
                  ]}
                >
                  <Checkbox>I accept the terms and conditions</Checkbox>
              </Form.Item>
              </div>
                <div className='button'>
                  <Form.Item
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'center' }}
                  >
                    <Button type="primary" htmlType="submit" style={{ width: '100%',height:'40px',backgroundColor:' #1c40d1'}} >Register</Button>
                    
                  </Form.Item>
              </div>
            </div>
          </Form>
        </div>
     
      </div>
  );
};

export default AgentRegistration;