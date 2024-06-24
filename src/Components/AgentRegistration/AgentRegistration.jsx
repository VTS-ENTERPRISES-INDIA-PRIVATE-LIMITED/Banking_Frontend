import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, Checkbox, message } from 'antd';
import Captcha from './Captcha';
import './AgentRegistration.css';

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

const AgentRegistration = ({ onSubmit }) => {
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

    const dob = values.dob;
    const age = calculateAge(dob);

    if (age < 10) {
      message.error('Must be at least 10 years old');
      return;
    }

    if (!validateName(values.firstName) || !validateName(values.middleName) || !validateName(values.lastName)) {
      message.error('Name fields should not contain numbers or special characters');
      return;
    }

    console.log('Received values of form: ', values);
    onSubmit();
  };

  const validatePhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validateName = (name) => {
    return /^[a-zA-Z ]+$/.test(name);
  };

  const validateDOB = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Please select your date of birth!'));
    }
    const age = calculateAge(value);
    if (age < 10) {
      return Promise.reject(new Error('Must be at least 10 years old'));
    }
    return Promise.resolve();
  };

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
                  label="Telephone Number"
                  name="telephone"
                  rules={[
                    { required: true, message: 'Please input your telephone number!' },
                    { pattern: /^\d+$/, message: 'Telephone number should contain only numbers!' },
                  ]}
                >
                  <Input />
              </Form.Item>
               <Form.Item
                  name="preferredLanguage"
                  label="Preferred Language"
                  hasFeedback
                  rules={[{ required: true, message: 'Please select your language!' }]}
                >
                  <Select style={{ width: '100%' }} >
                    <Option value="Telugu">Telugu</Option>
                    <Option value="English">English</Option>
                    <Option value="Hindi">Hindi</Option>
                  </Select>
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
                  label="Address"
                  name="address"
                  rules={[
                    { required: true, message: 'Please input your address' },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            <div className="form-group">
              <Form.Item
                  label="Middle Name"
                  name="middleName"
                  rules={[
                    { required: true, message: 'Please input your middle name!' },
                    { pattern: /^[a-zA-Z ]+$/, message: 'Middle name should not contain numbers or special characters' },
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
                  name="dob"
                  label="Date of Birth"
                  rules={[{ validator: validateDOB }]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[{ required: true, message: 'Please select your gender!' }]}
                >
                  <Select style={{ width: '100%' }}>
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Others">Others</Option>
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
                <Form.Item
                  name="account"
                  label="Type Of Account"
                  hasFeedback
                  rules={[{ required: true, message: 'Please select your account type!' }]}
                >
                  <Select style={{ width: '100%' }} >
                    <Option value="savings account">Savings Account</Option>
                    <Option value="current account">Current Account</Option>
                  </Select>
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
                <div className='button'>
                  <Form.Item
                    wrapperCol={{ span: 24 }}
                    style={{ textAlign: 'center' }}
                  >
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Register</Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
  );
};

export default AgentRegistration;