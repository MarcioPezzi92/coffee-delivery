import {
  AmountControl,
  ProductCard,
  ProductListContainer,
} from './product-list.styles'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { productsMock } from '../../../../assets/mock/products.mock'

const listProducts = productsMock.map((product) => {
  return (
    <ProductCard key={product.id}>
      <img
        src={`/images/coffee-types/${product.picture}.png`}
        alt="Ilustração: tipo de café"
      />
      <span className="product-type">tradicional</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <AmountControl>
        <div className="price">
          <span className="currency">R$ </span>
          <span className="value">
            {product.price.toString().replace('.', ',')}
          </span>
        </div>

        <div className="control">
          <button>
            <Minus size={14} weight="bold" />
          </button>

          <span>1</span>

          <button>
            <Plus size={14} weight="bold" />
          </button>
        </div>

        <button className="add-to-cart">
          <ShoppingCartSimple weight="fill" size={22} />
        </button>
      </AmountControl>
    </ProductCard>
  )
})

export function ProductList() {
  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>
      <ul>{listProducts}</ul>
    </ProductListContainer>
  )
}
