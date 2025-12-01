// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    color-scheme: dark;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`
