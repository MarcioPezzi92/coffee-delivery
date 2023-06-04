import {
  ActionsContainer,
  HeaderContainer,
  LocationButton,
  ShoppingCartButton,
} from './header.styles'
import Logo from '../../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../styles/themes/default'
import { Link } from 'react-router-dom'

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Image: brand logo" />
      </Link>
      <ActionsContainer>
        <LocationButton>
          <MapPin weight="fill" color={defaultTheme.purple} size={22} />
          <span>Rio de Janeiro, RJ</span>
        </LocationButton>
        <Link to="/checkout">
          <ShoppingCartButton>
            <ShoppingCart
              weight="fill"
              color={defaultTheme['yellow-dark']}
              size={22}
            />
            <span>5</span>
          </ShoppingCartButton>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
