import { Navigate, useParams } from 'react-router-dom'
import { CultureLayout } from '../components/category/CultureLayout'
import { FashionLayout } from '../components/category/FashionLayout'
import { FoodLayout } from '../components/category/FoodLayout'
import { HealthLayout } from '../components/category/HealthLayout'
import { LifestyleLayout } from '../components/category/LifestyleLayout'
import { TechnologyLayout } from '../components/category/TechnologyLayout'
import { TravelLayout } from '../components/category/TravelLayout'
import { getPostsByCategorySlug } from '../data/articles'
import { getCategoryBySlug } from '../data/pages'

export function CategoryPage() {
  const { slug = '' } = useParams()
  const category = getCategoryBySlug(slug)

  if (!category) {
    return <Navigate to="/" replace />
  }

  const posts = getPostsByCategorySlug(slug)
  const props = { category, posts }

  switch (category.slug) {
    case 'technology':
      return <TechnologyLayout {...props} />
    case 'fashion':
      return <FashionLayout {...props} />
    case 'travel':
      return <TravelLayout {...props} />
    case 'health':
      return <HealthLayout {...props} />
    case 'food':
      return <FoodLayout {...props} />
    case 'culture':
      return <CultureLayout {...props} />
    case 'lifestyle':
      return <LifestyleLayout {...props} />
    default:
      return <Navigate to="/" replace />
  }
}
