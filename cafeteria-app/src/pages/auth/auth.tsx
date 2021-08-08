import React from "react";
import IPageProps from "../../interfaces/page";
import AuthBox from "../../components/authBox";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import {Redirect} from "react-router-dom";



const AuthPage: React.FunctionComponent<IPageProps> = props => {

  if(auth.currentUser)
  {
    logging.info('유저정보가 확인되었습니다. 페이지 이동중..')
    return <Redirect to='/' />
  }

  return (
    <>
      <AuthBox />
    </>
  )
}

export default AuthPage;
