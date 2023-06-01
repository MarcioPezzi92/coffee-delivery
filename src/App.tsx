import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { GlobalStyles } from './styles/global.styles'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
