import React, {useEffect, useState} from "react";
import IPageProps from "../interfaces/page";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Map from "../components/Map";
import Interface from "../components/Interface";

const HomePage: React.FunctionComponent<IPageProps> = props => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

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

