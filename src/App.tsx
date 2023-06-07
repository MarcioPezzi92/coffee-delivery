import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { GlobalStyles } from './styles/global.styles'
import { CartProvider } from './contexts/CartProvider'
import { ProductsProvider } from './contexts/ProductsProvider'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ProductsProvider>
            <CartProvider>
              <AppRouter />
            </CartProvider>
          </ProductsProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
