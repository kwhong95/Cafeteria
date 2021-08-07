import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.bgColor};
    height: 100vh;
  }
  
  a {
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle