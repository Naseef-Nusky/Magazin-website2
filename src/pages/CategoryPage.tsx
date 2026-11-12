import { Navigate, useParams } from 'react-router-dom'
import { CultureLayout } from '../components/category/CultureLayout'
import { FoodLayout } from '../components/category/FoodLayout'
import { HealthLayout } from '../components/category/HealthLayout'
import { LifestyleLayout } from '../components/category/LifestyleLayout'
import { NewsLayout } from '../components/category/NewsLayout'
import { TechnologyLayout } from '../components/category/TechnologyLayout'
import { TravelLayout } from '../components/category/TravelLayout'
import { getCategoryBySlug } from '../data/pages'
import { useCategoryPosts } from '../hooks/useSanityPosts'

export function CategoryPage() {
  const { slug = '' } = useParams()
  const category = getCategoryBySlug(slug)
  const { posts } = useCategoryPosts(slug)

  if (!category) {
    return <Navigate to="/" replace />
  }

  const props = { category, posts }

  switch (category.slug) {
    case 'news':
      return <NewsLayout {...props} />
    case 'technology':
      return <TechnologyLayout {...props} />
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
