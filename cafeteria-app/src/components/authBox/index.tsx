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
  SocialText,
  SocialMedia,
  SocialIcon,
  LeftPanel,
  RightPanel,
  Content,
  PanelBigText,
  PanelSmallText,
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
            <i className="fas fa-lock" />
            <input type="password" placeholder="Password" />
          </InputField>
          <BtnSolid type="submit" value="로그인" />
          <SocialText>다른 로그인 방식을 원하시나요?</SocialText>
          <SocialMedia>
            <SocialIcon>
              <i className="fab fa-facebook-f" />
            </SocialIcon>
            <SocialIcon>
              <i className="fab fa-google" />
            </SocialIcon>
          </SocialMedia>
        </LoginForm>

        <ResisterForm id="resister-form">
          <Title>가입하기</Title>

          <InputField>
            <i className="fas fa-user" />
            <input type="text" placeholder="Username"/>
          </InputField>
          <InputField>
            <i className="fas fa-envelope" />
            <input type="email" placeholder="Email"/>
          </InputField>
          <InputField>
            <i className="fas fa-lock" />
            <input type="password" placeholder="Password"/>
          </InputField>
          <BtnSolid type="submit" value="가입하기" />
          <SocialText>다른 가입 방식을 원하시나요?</SocialText>
          <SocialMedia>
            <SocialIcon>
              <i className="fab fa-facebook-f" />
            </SocialIcon>
            <SocialIcon>
              <i className="fab fa-google" />
            </SocialIcon>
          </SocialMedia>
        </ResisterForm>
      </LoginAndResister>

      <PanelsContainer>
        <LeftPanel>
          <Content>
            <PanelBigText>처음 방문하셨나요?</PanelBigText>
            <PanelSmallText>환영합니다! 전국 개인카페들을 응원하는 카페테리아입니다.</PanelSmallText>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </Content>
          <img
            src='/form.svg'
            alt=""
            style={{
              width: '100%',
              transition: 'transform 1.1s ease-in-out',
              transitionDelay: '0.4s'
          }}/>
        </LeftPanel>

        <RightPanel>

        </RightPanel>
      </PanelsContainer>

    </FormsContainer>
  )
}

export default AuthBox;