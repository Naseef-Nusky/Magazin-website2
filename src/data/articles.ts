import { categories, getCategoryBySlug } from './pages'

export type Tone = 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'teal'

export type Post = {
  id: string
  title: string
  excerpt?: string
  date: string
  author?: string
  image: string
  categories: { label: string; tone: Tone }[]
}

export const heroMain: Post = {
  id: 'hero-main',
  title: 'Thriving, Not Just Surviving: A Blueprint for a Healthy Lifestyle',
  date: 'March 12, 2025',
  author: 'Ava Morgan',
  image:
    '/images/posts/hero-main.jpg',
  categories: [
    { label: 'Health', tone: 'red' },
    { label: 'Lifestyle', tone: 'blue' },
  ],
}

export const heroSide: Post[] = [
  {
    id: 'hero-side-1',
    title: 'Cities in Motion: How Urban Culture Shapes Modern Identity',
    date: 'March 10, 2025',
    image:
      '/images/posts/hero-side-1.jpg',
    categories: [{ label: 'World', tone: 'red' }],
  },
  {
    id: 'hero-side-2',
    title: 'The Quiet Power of Morning Rituals',
    date: 'March 9, 2025',
    image:
      '/images/posts/hero-side-2.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'hero-side-3',
    title: 'AI Tools That Actually Save Creators Time',
    date: 'March 8, 2025',
    image:
      '/images/posts/hero-side-3.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
]

export const editorsPicks: Post[] = [
  {
    id: 'edit-1',
    title: 'Coastal Escapes Worth Booking This Season',
    excerpt:
      'From quiet fishing villages to cliffside retreats, these destinations offer calm without the crowds.',
    date: 'March 7, 2025',
    author: 'Liam Chen',
    image:
      '/images/posts/edit-1.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
  },
  {
    id: 'edit-2',
    title: 'Designing Homes That Feel Alive',
    excerpt:
      'Interior trends this year lean into texture, natural light, and spaces meant for gathering.',
    date: 'March 6, 2025',
    author: 'Nora Blake',
    image:
      '/images/posts/edit-2.jpg',
    categories: [{ label: 'Lifestyle', tone: 'orange' }],
  },
]

export const editorsTextList: Post[] = [
  {
    id: 'edit-t1',
    title: 'Why Local Journalism Still Matters in a Digital Age',
    date: 'March 5, 2025',
    author: 'Maya Okonkwo',
    image:
      '/images/posts/edit-t1.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'edit-t2',
    title: 'Five Podcasts Changing How We Talk About Work',
    date: 'March 4, 2025',
    author: 'Liam Chen',
    image:
      '/images/posts/edit-t2.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'edit-t3',
    title: 'The Rise of Slow Fashion in Everyday Wardrobes',
    date: 'March 3, 2025',
    author: 'Sofia Reyes',
    image:
      '/images/posts/edit-t3.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'edit-t4',
    title: 'Street Food Markets Redefining City Nightlife',
    date: 'March 2, 2025',
    author: 'Jordan Lee',
    image:
      '/images/posts/edit-t4.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
]

export const recentFeature: Post = {
  id: 'recent-feature',
  title: 'Finding Balance: Work, Wellness, and the Spaces Between',
  excerpt:
    'A practical look at how professionals are redesigning their weeks around energy—not just productivity—and what that means for long-term health.',
  date: 'March 11, 2025',
  author: 'Sofia Reyes',
  image:
    '/images/posts/recent-feature.jpg',
  categories: [
    { label: 'Health', tone: 'red' },
    { label: 'Lifestyle', tone: 'blue' },
  ],
}

export const recentList: Post[] = [
  {
    id: 'recent-1',
    title: 'Weekend Markets That Feel Like Mini Vacations',
    date: 'March 10, 2025',
    author: 'Jordan Lee',
    image:
      '/images/posts/recent-1.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'recent-2',
    title: 'How Indie Bookshops Are Winning Readers Back',
    date: 'March 9, 2025',
    author: 'Maya Okonkwo',
    image:
      '/images/posts/recent-2.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'recent-3',
    title: 'Smart Homes, Simpler Living: Gadgets Worth Keeping',
    date: 'March 8, 2025',
    author: 'Chris Park',
    image:
      '/images/posts/recent-3.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'recent-4',
    title: 'Trail Running Guides for First-Time Adventurers',
    date: 'March 7, 2025',
    author: 'Elena Voss',
    image:
      '/images/posts/recent-4.jpg',
    categories: [{ label: 'Sports', tone: 'green' }],
  },
]

export const recentWide: Post = {
  id: 'recent-wide',
  title: 'Tales and Tips from Around the World',
  excerpt:
    'Correspondents share the unexpected details that make travel memorable—from late-night trains to neighborhood bakeries.',
  date: 'March 6, 2025',
  author: 'Daniel Hart',
  image:
    '/images/posts/recent-wide.jpg',
  categories: [
    { label: 'Travel', tone: 'teal' },
    { label: 'World', tone: 'red' },
  ],
}

export const recentGrid: Post[] = [
  {
    id: 'grid-1',
    title: 'Camera Kits for Storytellers on a Budget',
    date: 'March 5, 2025',
    author: 'Ava Morgan',
    image:
      '/images/posts/grid-1.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'grid-2',
    title: 'Garden-to-Table Recipes for Busy Weeknights',
    date: 'March 4, 2025',
    author: 'Nora Blake',
    image:
      '/images/posts/grid-2.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'grid-3',
    title: 'Fashion Capsules That Travel Light',
    date: 'March 3, 2025',
    author: 'Sofia Reyes',
    image:
      '/images/posts/grid-3.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'grid-4',
    title: 'Music Festivals Shaping Summer Culture',
    date: 'March 2, 2025',
    author: 'Liam Chen',
    image:
      '/images/posts/grid-4.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
]

export const trendingPosts: Post[] = [
  {
    id: 'trend-1',
    title: 'The New Rules of Remote Collaboration',
    date: 'March 11, 2025',
    image:
      '/images/posts/trend-1.jpg',
    categories: [{ label: 'Business', tone: 'purple' }],
  },
  {
    id: 'trend-2',
    title: 'Electric Mobility Is Changing City Streets',
    date: 'March 10, 2025',
    image:
      '/images/posts/trend-2.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'trend-3',
    title: 'Mindful Eating Without the Rules',
    date: 'March 9, 2025',
    image:
      '/images/posts/trend-3.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'trend-4',
    title: 'Architecture That Invites the Outside In',
    date: 'March 8, 2025',
    image:
      '/images/posts/trend-4.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'trend-5',
    title: 'Why Short Films Are Having a Moment',
    date: 'March 7, 2025',
    author: 'Maya Okonkwo',
    image:
      '/images/posts/trend-5.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
]

export const mostRead: Post[] = [
  {
    id: 'most-1',
    title: 'A Practical Guide to Building Better Habits',
    date: 'March 1, 2025',
    image:
      '/images/posts/most-1.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'most-2',
    title: 'Hidden Museums Every Traveler Should Visit',
    date: 'February 28, 2025',
    image:
      '/images/posts/most-2.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
  },
  {
    id: 'most-3',
    title: 'Coffee Culture Beyond the Latte',
    date: 'February 27, 2025',
    image:
      '/images/posts/most-3.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'most-4',
    title: 'What Founders Get Wrong About Brand Voice',
    date: 'February 26, 2025',
    image:
      '/images/posts/most-4.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
]

export const categoryExtras: Post[] = [
  {
    id: 'tech-extra-1',
    title: 'Wearables That Track More Than Steps',
    excerpt: 'From sleep quality to recovery scores, the newest devices are getting smarter about rest.',
    date: 'March 5, 2025',
    author: 'Chris Park',
    image:
      '/images/posts/tech-extra-1.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'fashion-extra-1',
    title: 'Quiet Luxury Looks That Still Feel Personal',
    excerpt: 'Neutral palettes and strong tailoring are back—without looking like a uniform.',
    date: 'March 4, 2025',
    author: 'Sofia Reyes',
    image:
      '/images/posts/fashion-extra-1.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'fashion-extra-2',
    title: 'How Vintage Markets Are Influencing New Collections',
    date: 'March 1, 2025',
    author: 'Nora Blake',
    image:
      '/images/posts/fashion-extra-2.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'travel-extra-1',
    title: 'Train Journeys Worth Taking Slowly',
    excerpt: 'Scenic routes where the ride is the destination.',
    date: 'March 3, 2025',
    author: 'Daniel Hart',
    image:
      '/images/posts/travel-extra-1.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
  },
  {
    id: 'health-extra-1',
    title: 'Strength Training Without the Intimidation',
    excerpt: 'Simple routines that build consistency for beginners.',
    date: 'March 2, 2025',
    author: 'Elena Voss',
    image:
      '/images/posts/health-extra-1.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
  },
  {
    id: 'food-extra-1',
    title: 'Neighborhood Bakeries Redefining Comfort Food',
    date: 'February 25, 2025',
    author: 'Jordan Lee',
    image:
      '/images/posts/food-extra-1.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'culture-extra-1',
    title: 'Community Theaters Keeping Local Stories Alive',
    date: 'February 24, 2025',
    author: 'Maya Okonkwo',
    image:
      '/images/posts/culture-extra-1.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'lifestyle-extra-1',
    title: 'Small Apartments, Big Ideas for Daily Calm',
    excerpt: 'Storage, light, and rituals that make compact living feel generous.',
    date: 'February 23, 2025',
    author: 'Ava Morgan',
    image:
      '/images/posts/lifestyle-extra-1.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'lifestyle-extra-2',
    title: 'Digital Sundays: Unplugging Without FOMO',
    date: 'February 20, 2025',
    author: 'Liam Chen',
    image:
      '/images/posts/lifestyle-extra-2.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'fashion-extra-3',
    title: 'Tailoring Rules for Soft Power Dressing',
    excerpt: 'How precise cuts and muted tones make everyday outfits feel intentional.',
    date: 'February 22, 2025',
    author: 'Nora Blake',
    image:
      '/images/posts/fashion-extra-3.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'fashion-extra-4',
    title: 'Accessories That Carry a Whole Outfit',
    date: 'February 18, 2025',
    author: 'Sofia Reyes',
    image:
      '/images/posts/fashion-extra-4.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'fashion-extra-5',
    title: 'Monochrome Layers for City Evenings',
    date: 'February 15, 2025',
    author: 'Ava Morgan',
    image:
      '/images/posts/fashion-extra-5.jpg',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'health-extra-2',
    title: 'Sleep Hygiene Habits That Actually Stick',
    date: 'February 14, 2025',
    author: 'Elena Voss',
    image:
      '/images/posts/health-extra-2.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
  },
  {
    id: 'tech-extra-2',
    title: 'Open-Source Apps Worth Switching To',
    date: 'February 12, 2025',
    author: 'Chris Park',
    image:
      '/images/posts/tech-extra-2.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'travel-extra-2',
    title: 'City Breaks Built Around One Great Neighborhood',
    date: 'February 10, 2025',
    author: 'Daniel Hart',
    image:
      '/images/posts/travel-extra-2.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
  },
]

export const allPosts: Post[] = [
  heroMain,
  ...heroSide,
  ...editorsPicks,
  ...editorsTextList,
  recentFeature,
  ...recentList,
  recentWide,
  ...recentGrid,
  ...trendingPosts,
  ...mostRead,
  ...categoryExtras,
].filter((post, index, list) => list.findIndex((p) => p.id === post.id) === index)

export function getPostsByCategorySlug(slug: string): Post[] {
  const category = getCategoryBySlug(slug)
  if (!category) return []

  const aliases = new Set(category.aliases.map((a) => a.toLowerCase()))
  return allPosts.filter((post) =>
    post.categories.some((c) => aliases.has(c.label.toLowerCase())),
  )
}

export function getPopularCategories() {
  return categories
    .map((category) => ({
      name: category.label,
      slug: category.slug,
      count: getPostsByCategorySlug(category.slug).length,
    }))
    .filter((category) => category.count > 0)
    .sort((a, b) => b.count - a.count)
}

export function getPostById(id: string) {
  return allPosts.find((post) => post.id === id)
}

export function postPath(id: string) {
  return `/blog/${id}`
}

export function getRelatedPosts(post: Post, limit = 3) {
  const labels = new Set(post.categories.map((c) => c.label.toLowerCase()))
  return allPosts
    .filter(
      (candidate) =>
        candidate.id !== post.id &&
        candidate.image &&
        candidate.categories.some((c) => labels.has(c.label.toLowerCase())),
    )
    .slice(0, limit)
}

export const footerTrending: Post[] = trendingPosts.slice(1, 4)
export const footerPopular: Post[] = mostRead.slice(0, 3)
