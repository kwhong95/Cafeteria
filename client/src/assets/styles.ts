import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;

    color: {
      first : string;
      second: string;
      third: string;
      fourth: string
    }
  }
}