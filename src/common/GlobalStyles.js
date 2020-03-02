import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  :root{
    --blue-grey-light: #A6ADB5;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    height: 100vh;
  }
`
