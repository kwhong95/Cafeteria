import React, {useState} from "react";
import IPageProps from "../interfaces/page";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Map from "../components/Map";

export interface CoordsType {
  lat: number;
  lng: number;
}

const HomePage: React.FunctionComponent<IPageProps> = props => {
  const [coords, setCoords] = useState<CoordsType>({ lat: 0, lng: 0 });

  return (
    <Container>
      <Header />
      <Interface>
        interface
      </Interface>
      <Map
        coords={coords}
      />
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
