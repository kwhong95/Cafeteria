import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from "../../config/firebase";
import logging from '../../config/logging'

const ResisterPage: React.FunctionComponent = props => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const history = useHistory();

  const signUpWithEmailAndPassword = () => {
    if(password !== confirm) setError('비밀번호를 확인하세요.')

    if(error !== '') setError('')


    setRegistering(true);

    auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      logging.info(result)
      history.push('/login')
    })
    .catch(error => {
      logging.error(error)

      if (error.code.includes('auth/weak-password'))
      {
        setError('더욱 강력한 비밀번호를 입력해주세요.')
      }
      else if (error.code.includes('auth/email-already-in-use'))
      {
        setError('이메일이 이미 사용중입니다.')
      }
      else {
        setError('등록할 수 없습니다. 나중에 다시 시도해주세요.')
      }

      setRegistering(false);
    })
  }

  return (
    <p>Resister Page</p>
  )
}

export default ResisterPage;