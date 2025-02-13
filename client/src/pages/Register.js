import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";

const Register = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        values
      );
      if (res.data.success) {
        message.success("Registered Successfully..");
        navigate("/login");
      } else {
        message.error("something went wrong..");
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong...");
    }
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h1>Register Form</h1>
        <Form.Item label="Name" name="name">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/login" className="ms-2">
          Already user login here..
        </Link>
        <button className="btn btn-primary">Register</button>
      </Form>
    </div>
  );
};

export default Register;
