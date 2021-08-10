import React, {useEffect, useState} from "react";
import IPageProps from "../interfaces/page";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Map from "../components/Map";
import Interface from "../components/Interface";
import { API, Amplify } from 'aws-amplify';
import { listTodos } from "../graphql/queries";
import awsmobile from '../aws-exports'

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  }
})

const HomePage: React.FunctionComponent<IPageProps> = props => {
  const [coords, setCoords] = useState({});
  const [todos, setTodos] = useState([]);

  console.log(todos)

  useEffect(() => {
    fetchNotes();
  }, [])

  const fetchNotes = async () => {
    const apiData: any = await API.graphql({ query: listTodos } as any);
    setTodos(apiData.data.listNotes.items) ;
  }

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

