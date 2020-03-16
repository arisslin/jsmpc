import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  :root{
    /* Colors */
    --color-button-light: #d6d6d6;
    --color-border: #414649;
    --color-dark: #32373a;
    --color-mpc-chassis: #E8E8E8;
    --color-pad-grey: #7F7E7A;
    --color-pad-triggered: #c72400;
    --blue-grey-light: #A6ADB5;
    --blue-grey-medium: #7A8490;
    
    /* spacing */
    --pad-section-padding: 10px;

    /* shadow */
    --element-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    --element-triggered-shadow: 0 1px 4px 0 rgba(199, 36, 0, 0.2);
    --element-inside-text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  * {
    box-sizing: border-box;
    touch-action: pan-x pan-y;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    overflow: hidden;
  }

  .pr-1 {
    padding-right: 1rem;
  }
`
