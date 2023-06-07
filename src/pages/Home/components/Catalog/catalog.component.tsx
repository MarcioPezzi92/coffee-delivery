import { ReactElement } from 'react'
import useProducts from '../../../../hooks/useProducts'
import { CatalogContainer } from './catalog.styles'
import { CatalogItemComponent } from './components/catalog-item.component'

export function CatalogComponent() {
  const { catalog } = useProducts()

  let content: ReactElement | ReactElement[] = <p> Procurando produtos... </p>

  if (catalog.length) {
    content = catalog.map((product) => (
      <CatalogItemComponent key={product.id} product={product} />
    ))
  }

  return (
    <CatalogContainer>
      <h2>Nossos cafés</h2>
      <ul>{content}</ul>
    </CatalogContainer>
  )
}
