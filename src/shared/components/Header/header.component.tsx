import {
  ActionsContainer,
  HeaderContainer,
  LocationButton,
  ShoppingCartButton,
} from './header.styles'
import Logo from '../../../assets/images/logo.svg'
import LocationIcon from '../../../assets/icons/location-icon.svg'
import ShoppingCartIcon from '../../../assets/icons/shopping-cart-icon.svg'

export function HeaderComponent() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Image: brand logo" />
      <ActionsContainer>
        <LocationButton>
          <img src={LocationIcon} alt="Icon: location illustration" />
          <span>Rio de Janeiro, RJ</span>
        </LocationButton>
        <ShoppingCartButton>
          <img src={ShoppingCartIcon} alt="Icon: shopping cart" />
          <span>5</span>
        </ShoppingCartButton>
      </ActionsContainer>
    </HeaderContainer>
  )
}
