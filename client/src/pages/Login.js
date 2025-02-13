import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../styles/RegisterStyles.css";
const Login = () => {
  const onFinishHandler = (value) => {
    console.log(value.name);
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h1>Login Form</h1>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="ms-2">
          Dont'have Account Register Here..
        </Link>
        <button className="btn btn-primary">Login</button>
      </Form>
    </div>
  );
};

export default Login;
