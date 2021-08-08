import React from "react";
import IPageProps from "../interfaces/page";
import styled from "@emotion/styled";
import Header from "../components/Header";

const HomePage: React.FunctionComponent<IPageProps> = props => {


  return (
    <Container>
      <Header />
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
  height: 100vh;
`


const Interface = styled.div`
  
`

const MapContainer = styled.div`
  grid-column: 2 / 5;
`