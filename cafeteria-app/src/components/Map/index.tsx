import React from "react";
import GoogleMapReact from 'google-map-react';
import {
  Container
} from './elements';

interface MapProps {
  coords: any
}

type mapKey = string | any

const Map: React.FunctionComponent<MapProps> = ({ coords }) => {


  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY } as mapKey }
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}

      >
      </GoogleMapReact>
    </Container>
  )
}

export default Map;