import {
  ProductCardContainer,
  ProductListContainer,
} from './product-list.styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { AmountControl } from '../../../../shared/components/AmountControl/amount-control.component'
import { ProductCard } from '../../home.page'
import { Dispatch, SetStateAction } from 'react'

interface ProductListProps {
  catalog: ProductCard[]
  setCatalog: Dispatch<SetStateAction<ProductCard[]>>
}

export function ProductList({ catalog, setCatalog }: ProductListProps) {
  const renderCatalog = catalog.map((product: ProductCard) => {
    return (
      <ProductCardContainer key={product.id}>
        <img
          src={`/images/coffee-types/${product.picture}.png`}
          alt="Ilustração: tipo de café"
        />
        <span className="product-type">tradicional</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="actions">
          <div className="price">
            <span className="currency">R$ </span>
            <span className="value">
              {String(product.price).replace('.', ',')}
            </span>
          </div>

          <AmountControl quantity={product.quantity} />

          <button className="add-to-cart">
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </div>
      </ProductCardContainer>
    )
  })

  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>
      <ul>{renderCatalog}</ul>
    </ProductListContainer>
  )
}
