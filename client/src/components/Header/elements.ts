import styled from 'styled-components';

/* Header */

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 5em;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 50px;
`

export const Title = styled.p`
  margin-top: 1.7em;
  font-size: 28px;
  font-weight: 800;
  color: ${props => props.theme.color.first};
  margin-left: .3em;
`

/* Menu */

export const MenuWrap = styled.ul`
  font-size: 18px;
  font-weight: 700;
  margin-top: 2em;
  
  a {
    color: ${props => props.theme.color.first};
    padding: .5em;
    
    :hover {
      color: ${props => props.theme.color.second}
    }
  }
`;
