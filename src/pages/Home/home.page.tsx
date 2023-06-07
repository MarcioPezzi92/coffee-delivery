import { HeroComponent } from './components/Hero/hero.component'
import { CatalogComponent } from './components/Catalog/catalog.component'

export function HomePage() {
  return (
    <div>
      <HeroComponent />
      <CatalogComponent />
    </div>
  )
}
