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
import { message } from "antd";



interface IUser {
  login: string;
  resister: string;
}


const AuthBox: React.FunctionComponent= () => {
  const [resisterMode, setResisterMode] = useState<boolean>(false);
  const [registering, setRegistering] = useState<boolean>(false)
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<IUser>({ login: '', resister: '' });
  const [password, setPassword] = useState<IUser>({ login: '', resister: '' });
  const [error, setError] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');

  const history = useHistory();

  const signInWithEmailAndPassword = () => {
    if ( error !== '' ) setError('')

    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email.login, password.login)
    .then(result => {
      logging.info(result)
      history.push('/')
    })
    .catch(error => {
      logging.error(error)
      setAuthenticating(false)
      setError(error)
      return message.error(error.message)
    })
  }

  const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
    if (error!== '') setError('')

    setAuthenticating(true)

    SignWithSocialMedia(provider)
    .then(result => {
      logging.info(result)
      history.push('/')
    })
    .catch(error => {
      logging.error(error)
      setAuthenticating(false)
      setError('')
      return message.error(error.message);
    });
  }

  const signUpWidthEmailAndPassword = () => {
    if (password.resister !== confirm)
    {
      setError('암호가 일치하는지 확인하세요.');
      return message.error(error)
    }

    if (error !== '') setError('');

    setRegistering(true);

    auth.createUserWithEmailAndPassword(email.resister, password.resister)
    .then(result => {
      logging.info(result)
      history.push('/auth')
    })
    .catch(error => {
      logging.error(error);

      if (error.code.includes('auth/weak-password'))
      {
        setError('더 강력한 비밀번호를 입력하세요');
        return message.error(error.message)
      }
      else if (error.code.includes('auth/email-already-in-use'))
      {
        setError('이미 사용중인 이메일입니다.');
        return message.error(error.message)
      }
      else
      {
        setError('등록할 수 없습니다. 다음에 다시 시도하세요.');
      }

      setRegistering(false);
    })
  }

  const changeModeHandler = () => {
    setResisterMode(prev => !prev)
  }

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
              onClick={() => signInWithEmailAndPassword()}
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
              <i className="fas fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                onChange={event => setEmail({ resister: event.target.value, login: '' })}
                value={email.resister}
              />
            </InputField>
            <InputField>
              <i className="fas fa-lock" />
              <input
                autoComplete="new-password"
                type="password"
                placeholder="Password"
                onChange={event => setPassword({ resister: event.target.value, login: '' })}
                value={password.resister}
              />
            </InputField>
            <InputField>
              <i className="fas fa-lock" />
              <input
                autoComplete="new-password"
                type="password"
                placeholder="Confirm Password"
                onChange={event => setConfirm(event.target.value)}
                value={confirm}
              />
            </InputField>
            <BtnSolid
              disabled={registering}
              type="submit"
              value="가입하기"
              onClick={() => signUpWidthEmailAndPassword()}
            />
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