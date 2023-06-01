import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './default.styles'
import { HeaderComponent } from '../../shared/components/Header/header.component'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderComponent />
      <Outlet />
    </LayoutContainer>
  )
}
