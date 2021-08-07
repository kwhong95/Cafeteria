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
`

const LoginPage: React.FunctionComponent<IPageProps> = props => {
  return (
    <Container>
      <AuthBox />
    </Container>
        // <Form
        //   name="Login Form"
        //   onFinish={() => {}}
        // >
        //   <Form.Item
        //     label="이메일"
        //     name="Email"
        //     rules={[{
        //       required: true,
        //       type: 'email',
        //       message: '이메일을 입력하세요.'
        //     }]}
        //   >
        //     <Input
        //       prefix={<UserOutlined />}
        //     />
        //   </Form.Item>
        //   <Form.Item
        //     label="비밀번호"
        //     name="Password"
        //     rules={[{
        //       required: true,
        //       message: '비밀번호를 입력하세요.'
        //     }]}
        //   >
        //     <Input.Password
        //       prefix={<LockOutlined />}
        //     />
        //   </Form.Item>
        //
        //   <Form.Item>
        //     <Button type="primary" htmlType="submit">
        //       로그인
        //     </Button>
        //     <Link to="/resister">
        //       <Button type="primary">
        //         가입하기
        //       </Button>
        //     </Link>
        //   </Form.Item>
        // </Form>
  )
}

export default LoginPage;
