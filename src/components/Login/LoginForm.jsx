import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import React from 'react';

const App = (props) => {
  const onFinish = (values) => {
    props.login(values.email, values.password, values.rememberMe, values.captcha)
  };


const variableItem = (
    <>
    <img src={props.captcha} />
      <Form.Item
    name="captcha"
    rules={[
      {
        required: true,
      },
    ]}
  >
    <Input name='captch'></Input>
  </Form.Item>
    </>

);

  return (
    <Form
        wrapperCol={{
            span:5
        }}
      name="normal_login"
      className="login-form"
      initialValues={{
        rememberMe: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type:"email",
            required: true,
            message: 'Please input correct email adress!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="rememberMe" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
          {props.errors === "Our bot thinks that you bot..." ? variableItem:null}
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default App;
