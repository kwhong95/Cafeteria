import React from "react";
import GoogleMapReact from 'google-map-react';
import { CoordsType } from "../../pages/HomePage";
import {
  Container
} from './elements';

interface MapProps {
  coords: CoordsType
}

const Map: React.FunctionComponent<MapProps> = ({ coords }) => {


  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: typeof process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      />
    </Container>
  )
}

export default Map;