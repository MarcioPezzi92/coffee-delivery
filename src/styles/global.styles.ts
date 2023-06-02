import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }

    border: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    line-height: 130%;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
