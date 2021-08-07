import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const MapSvg = styled.svg`
  position: absolute;
  left: 35%;
  top: 0;
  height: 100vh;
  width: 100%;
  
  .land {
    fill: ${props => props.theme.color.first};
    fill-opacity: 1;
    stroke: ${props => props.theme.color.second};
    
    :hover {
      fill: ${props => props.theme.color.fourth};
    }
  }
`