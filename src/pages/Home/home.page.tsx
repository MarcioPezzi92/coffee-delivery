import { HeroComponent } from './components/Hero/hero.component'
import { ProductList } from './components/ProductList/product-list.component'

export function HomePage() {
  return (
    <div>
      <HeroComponent />
      <ProductList />
    </div>
  )
}
