import React from "react";
import {
  Container,
  Main,
  Logo,
  Title,
  Menu
} from './elements'

const Header: React.FunctionComponent = props => {


  return (
    <Container>
      <Main>
        <Logo src='/cafeteria.png' alt="logo" />
        <Title>Cafeteria</Title>
      </Main>
      <Menu>

      </Menu>
    </Container>
  )
}

export default Header;