import { ReactElement, createContext, useEffect, useState } from 'react'
import { productsMock } from '../assets/mock/products.mock'
import { generatePrice, uuidv4 } from '../assets/utils/random-prop.util'

export type ProductType = {
  id: string
  picture: string
  name: string
  description: string
  classification: string[]
  price: number
}

const initState: ProductType[] = []

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

function getProductCardsFromMock(): ProductType[] {
  const products = productsMock.map((product) => {
    const { classification, description, name, picture } = product

    return {
      id: uuidv4(),
      picture,
      name,
      description,
      classification,
      price: generatePrice(7.6, 14.9, 2),
    }
  })

  storeCatalog(products)

  return products
}

function getProductCardsFromLocalStorage(): ProductType[] | null {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:products-state-1.0.0',
  )
  if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
  else return null
}

function storeCatalog(catalog: ProductType[]) {
  localStorage.removeItem('@coffee-delivery:products-state-1.0.0')

  const stateJSON = JSON.stringify(catalog)

  localStorage.setItem('@coffee-delivery:products-state-1.0.0', stateJSON)
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState)

  useEffect(() => {
    const storedData = getProductCardsFromLocalStorage()
    setProducts(storedData ?? getProductCardsFromMock())
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
