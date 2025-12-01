import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string
      bgSoft: string
      text: string
      textSoft: string
      accent: string
      borderGlow: string
    }
    fonts: {
      body: string
      heading: string
      mono: string
    }
  }
}
