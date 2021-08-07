import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../config/firebase";
import logging from "../config/logging";

const AuthRoute = (
  { children } : { children: React.ReactNode }
) => {
  if(!auth.currentUser)
  {
    logging.warn('유저 정보가 없습니다. 페이지 이동중..')
    return <Redirect to='/login' />
  }

  return <div>{children}</div>
}

export default AuthRoute;