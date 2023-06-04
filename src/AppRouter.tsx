import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default/default.layout'
import { HomePage } from './pages/Home/home.page'
import { CheckoutPage } from './pages/Checkout/checkout.page'
import { SuccessPage } from './pages/Success/success.page'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
