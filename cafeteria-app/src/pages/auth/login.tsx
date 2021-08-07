import React from "react";
import IPageProps from "../../interfaces/page";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AuthBox from "../../components/authBox";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  
  :before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #FDDFCA 0%, #FCB37E 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }
`

const LoginPage: React.FunctionComponent<IPageProps> = props => {
  return (
    <Container>
      <AuthBox />
    </Container>
  )
}

export default LoginPage;
