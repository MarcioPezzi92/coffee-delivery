import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default/default.layout'
import { HomePage } from './pages/Home/home.page'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
