import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f0f0f0;
    --light-grey: #e4e4e4;
    --black: #111111;
    --dark-grey: #272727;
    --bg: var(--white);
    --txt: var(--black);
    --dark-opacity: 0;
    --light-opacity: 1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content {
    background-color: var(--bg);
    color: var(--txt);
  }
`;

export default GlobalStyle;