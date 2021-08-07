import React from 'react'
import { Link } from 'react-router-dom'
import {
  Wrapper,
  LogoWrap,
  LogoImg,
  Title
} from './elements'
import Menu from './Menu'

export default function Header () {
  return (
    <Wrapper>
      <Link to='/'>
        <LogoWrap>
            <LogoImg src='/logo192.png' alt='logo' />
            <Title>Cafeteria</Title>
        </LogoWrap>
      </Link>
      <Menu />
    </Wrapper>
  )
}