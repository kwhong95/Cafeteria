import React from "react";
import {
  FormsContainer,
  LoginAndResister,
  LoginForm,
  ResisterForm,
  PanelsContainer,
  Title,
  InputField,
  BtnSolid,
  SocialMedia
} from './elements'

const AuthBox: React.FunctionComponent = () => {
  return (
    <FormsContainer>
      <LoginAndResister>
        <LoginForm id="login-form">
          <Title>로그인</Title>
          <InputField>
            <i className="fas fa-user" />
            <input type="text" placeholder="Email" />
          </InputField>
          <InputField>
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </InputField>
          <BtnSolid type="submit" value="로그인" />
          <SocialMedia>

          </SocialMedia>
        </LoginForm>

        <ResisterForm id="resister-form">
          <Title>가입하기</Title>

          <InputField>

          </InputField>
          <InputField>

          </InputField>
          <InputField>

          </InputField>
        </ResisterForm>



      </LoginAndResister>

      <PanelsContainer>

      </PanelsContainer>

    </FormsContainer>
  )
}

export default AuthBox;