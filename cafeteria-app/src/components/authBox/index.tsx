import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { auth, Providers } from "../../config/firebase";
import logging from "../../config/logging";
import { SignWithSocialMedia } from "./module";
import ErrorText from "../ErrorText";
import {
  Container,
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
  AnimationImg
} from './elements';



interface IUser {
  login: string;
  resister: string;
}


const AuthBox: React.FunctionComponent= () => {
  const [resisterMode, setResisterMode] = useState<boolean>(false);
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<IUser>({ login: '', resister: '' });
  const [password, setPassword] = useState<IUser>({ login: '', resister: '' });
  const [error, setError] = useState<IUser>({ login: '', resister: '' });

  const history = useHistory();

  const loginWithEmailAndPassword = () => {
    if ( error.login !== '' ) setError({ login: '', resister: '' })

    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email.login, password.login)
    .then(result => {
      logging.info(result)
      history.push('/')
    })
    .catch(error => {
      logging.error(error)
      setAuthenticating(false)
      setError({ login: error.login, resister: '' })
      return ErrorText({ error: error.login })
    })
  }

  const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
    if (error.login !== '') setError({ login: '', resister: '' })

    setAuthenticating(true)

    SignWithSocialMedia(provider)
    .then(result => {
      logging.info(result)
      history.push('/')
    })
    .catch(error => {
      logging.error(error)
      setAuthenticating(false)
      setError({ login: error.login, resister: '' })
      return ErrorText({ error: error.login })
    });
  }

  const changeModeHandler = () => {
    setResisterMode(prev => !prev)
  }

  // @ts-ignore
  return (
    <Container mode={resisterMode}>
      <FormsContainer mode={resisterMode}>
        <LoginAndResister mode={resisterMode}>
          <LoginForm id="login-form" mode={resisterMode}>
            <Title>로그인</Title>
            <InputField>
              <i className="fas fa-user" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={event => setEmail({ login: event.target.value, resister: '' })}
                value={email.login}
              />
            </InputField>
            <InputField>
              <i className="fas fa-lock" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={event => setPassword({ login: event.target.value, resister: ''})}
                value={password.login}
              />
            </InputField>
            <BtnSolid
              disabled={authenticating}
              type="submit"
              value="로그인"
              onClick={() => loginWithEmailAndPassword()}
            />
            <SocialText>다른 로그인 방식을 원하시나요?</SocialText>
            <SocialMedia>
              <SocialIcon onClick={() =>{}}>
                <i className="fab fa-facebook-f" />
              </SocialIcon>
              <SocialIcon onClick={() => signInWithSocialMedia(Providers.google)}>
                <i className="fab fa-google" />
              </SocialIcon>
            </SocialMedia>
          </LoginForm>

          <ResisterForm id="resister-form" mode={resisterMode}>
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
          <LeftPanel mode={resisterMode}>
            <Content>
              <PanelBigText>처음 방문하셨나요?</PanelBigText>
              <PanelSmallText>
                아래 버튼을 통해 가입부탁드립니다.
              </PanelSmallText>
              <button onClick={changeModeHandler}>
                가입하기
              </button>
            </Content>
            <AnimationImg
              src='/form.svg'
              alt=""
            />
          </LeftPanel>

          <RightPanel mode={resisterMode}>
            <Content>
              <PanelBigText>환영합니다!</PanelBigText>
              <PanelSmallText>
                전국 개인카페들을 응원하는 카페테리아입니다.
              </PanelSmallText>
              <button onClick={changeModeHandler}>
                로그인
              </button>
            </Content>
            <AnimationImg
              src='/form2.svg'
              alt=""
            />
          </RightPanel>
        </PanelsContainer>
      </FormsContainer>
    </Container>
  )
}

export default AuthBox;