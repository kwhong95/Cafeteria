import React from "react";
import { message } from 'antd'

export interface IErrorTextProps {
  error: string;
}

const ErrorText = (props: IErrorTextProps) => {
  const { error } = props;

  if (error === '') return null

  return message.error(error)
}

export default ErrorText;