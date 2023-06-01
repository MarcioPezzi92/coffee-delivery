import { HeroContainer } from './hero.styles'
import HeroImage from '../../../../assets/images/hero-image.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'

export function HeroComponent() {
  return (
    <HeroContainer>
      <div style={{ maxWidth: '588px' }}>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul>
          <li>
            <span style={{ background: defaultTheme['yellow-dark'] }}>
              <ShoppingCart weight="fill" color="#fff" size={16} />
            </span>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <span style={{ background: defaultTheme['base-text'] }}>
              <Package weight="fill" color="#fff" size={16} />
            </span>
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <span style={{ background: defaultTheme.yellow }}>
              <Timer weight="fill" color="#fff" size={16} />
            </span>
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <span style={{ background: defaultTheme.purple }}>
              <Coffee weight="fill" color="#fff" size={16} />
            </span>
            <span>O café chega fresquinho até você</span>
          </li>
        </ul>
      </div>
      <img src={HeroImage} alt="Illustration: coffee cup" />
    </HeroContainer>
  )
}
