import React from "react";
import IPageProps from "../interfaces/page";
import styled from "@emotion/styled";

const HomePage: React.FunctionComponent<IPageProps> = props => {


  return (
    <Container>
      <Header>Header</Header>
      <Interface>
        interface
      </Interface>
      <MapContainer>
        map
      </MapContainer>
    </Container>
  )
}

export default HomePage;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-columns: 30vw 70vw;
  border: 1px solid red;
  height: 100vh;
`

const Header = styled.div`
  grid-column: 1 / 5;
  border: 1px solid blue;
`

const Interface = styled.div`
  border: 1px solid orange;
  
`

const MapContainer = styled.div`
  border: 1px solid seagreen;
  grid-column: 2 / 5;
`