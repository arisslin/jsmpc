import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  :root{
    /* Colors */
    --color-button-light: #d6d6d6;
    --color-border: #515659;
    --color-dark: #32373a;
    --color-display: #d0e8ff;
    --color-display-border: #696e72;
    --color-display-font: #495275;
    --color-display-font-trans-strong: #49527555;
    --color-display-font-trans-light: #49527595;
    --color-mpc-chassis: #E8E8E8;
    --color-pad: #7F7E7A;
    --color-pad-triggered: #80706d;
    --color-pad-border-triggered: #c72400;
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
