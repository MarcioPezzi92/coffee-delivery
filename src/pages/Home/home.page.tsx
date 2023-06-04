import { useState } from 'react'
import { HeroComponent } from './components/Hero/hero.component'
import { ProductList } from './components/ProductList/product-list.component'
import { productsMock } from '../../assets/mock/products.mock'
import { generatePrice, uuidv4 } from '../../assets/utils/random-prop.util'

export interface ProductCard {
  id: string
  picture: string
  name: string
  types: string[]
  description: string
  price: number
  quantity: number
  amount?: number
}

function getProductCardsFromMock(): ProductCard[] {
  const products = productsMock.map((product) => {
    const { description, name, picture, types } = product
    return {
      id: uuidv4(),
      picture,
      name,
      description,
      types,
      price: generatePrice(7.5, 14.5, 2),
      quantity: 1,
      amount: 0,
    }
  })

  storeCatalog(products)

  return products
}

function getProductCardsFromLocalStorage(): ProductCard[] | null {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:products-state-1.0.0',
  )
  if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
  else return null
}

function storeCatalog(catalog: ProductCard[]) {
  localStorage.removeItem('@coffee-delivery:products-state-1.0.0')

  const stateJSON = JSON.stringify(catalog)

  localStorage.setItem('@coffee-delivery:products-state-1.0.0', stateJSON)
}

export function HomePage() {
  const storedData = getProductCardsFromLocalStorage()

  const [catalogState, setCatalog] = useState(
    storedData || getProductCardsFromMock,
  )

  return (
    <div>
      <HeroComponent />
      <ProductList catalog={catalogState} setCatalog={setCatalog} />
    </div>
  )
}
