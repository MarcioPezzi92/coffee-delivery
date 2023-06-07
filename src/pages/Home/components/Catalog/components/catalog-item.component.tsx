import { ShoppingCartSimple } from 'phosphor-react'
import { ProductType } from '../../../../../contexts/ProductsProvider'
import useCart from '../../../../../hooks/useCart'
import { CatalogProductQtyControl } from '../../../../../shared/components/QuantityControl/quantity-control.component'
import { CatalogItemContainer } from './catalog-item.styles'
import { useState } from 'react'

type CatalogItemProps = {
  product: ProductType
}

export function CatalogItemComponent({ product }: CatalogItemProps) {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const [qtyState, setQtyState] = useState<number>(1)

  const image: string = new URL(
    `/src/assets/images/coffee-types/${product.picture}.png`,
    import.meta.url,
  ).href

  const inCart: boolean = cart.some((item) => item.id === product.id)

  const onAddToCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, qty: qtyState },
    })
  }

  const productClassification = product.classification.map((item) => {
    return (
      <span className="product-type" key={String(item + new Date())}>
        {item}
      </span>
    )
  })

  return (
    <CatalogItemContainer key={product.id}>
      <img src={image} alt={`Ilustração: ${product.name}`} />

      <div style={{ display: 'flex', gap: '1rem' }}>
        {productClassification}
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="actions">
        <div className="price">
          <span className="currency">R$ </span>
          <span className="value">
            {new Intl.NumberFormat('pt-BR', {
              style: 'decimal',
            }).format(product.price)}
          </span>
        </div>

        <CatalogProductQtyControl
          key={product.id}
          productId={product.id}
          qtyState={qtyState}
          setQtyState={setQtyState}
        />

        <button className="add-to-cart" onClick={onAddToCart} disabled={inCart}>
          <ShoppingCartSimple weight="fill" size={22} />
        </button>
      </div>
    </CatalogItemContainer>
  )
}
