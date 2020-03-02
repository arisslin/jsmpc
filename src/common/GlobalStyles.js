import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  :root{
    --color-dark: #32373a;
    --color-mpc-chassis: #E8E8E8;
    --color-pad-grey: #7F7E7A;
    --blue-grey-light: #A6ADB5;
    --blue-grey-medium: #7A8490;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;    
  }
`
