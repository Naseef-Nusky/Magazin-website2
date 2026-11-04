import { getCategoryBySlug } from './pages'

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
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80',
    categories: [{ label: 'World', tone: 'red' }],
  },
  {
    id: 'hero-side-2',
    title: 'The Quiet Power of Morning Rituals',
    date: 'March 9, 2025',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'hero-side-3',
    title: 'AI Tools That Actually Save Creators Time',
    date: 'March 8, 2025',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
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
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80',
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
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'edit-t2',
    title: 'Five Podcasts Changing How We Talk About Work',
    date: 'March 4, 2025',
    author: 'Liam Chen',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'edit-t3',
    title: 'The Rise of Slow Fashion in Everyday Wardrobes',
    date: 'March 3, 2025',
    author: 'Sofia Reyes',
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'edit-t4',
    title: 'Street Food Markets Redefining City Nightlife',
    date: 'March 2, 2025',
    author: 'Jordan Lee',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
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
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1100&q=80',
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
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=300&q=80',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'recent-2',
    title: 'How Indie Bookshops Are Winning Readers Back',
    date: 'March 9, 2025',
    author: 'Maya Okonkwo',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=300&q=80',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'recent-3',
    title: 'Smart Homes, Simpler Living: Gadgets Worth Keeping',
    date: 'March 8, 2025',
    author: 'Chris Park',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=300&q=80',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'recent-4',
    title: 'Trail Running Guides for First-Time Adventurers',
    date: 'March 7, 2025',
    author: 'Elena Voss',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=300&q=80',
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
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1100&q=80',
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
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'grid-2',
    title: 'Garden-to-Table Recipes for Busy Weeknights',
    date: 'March 4, 2025',
    author: 'Nora Blake',
    image:
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'grid-3',
    title: 'Fashion Capsules That Travel Light',
    date: 'March 3, 2025',
    author: 'Sofia Reyes',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'grid-4',
    title: 'Music Festivals Shaping Summer Culture',
    date: 'March 2, 2025',
    author: 'Liam Chen',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
]

export const trendingPosts: Post[] = [
  {
    id: 'trend-1',
    title: 'The New Rules of Remote Collaboration',
    date: 'March 11, 2025',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Business', tone: 'purple' }],
  },
  {
    id: 'trend-2',
    title: 'Electric Mobility Is Changing City Streets',
    date: 'March 10, 2025',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'trend-3',
    title: 'Mindful Eating Without the Rules',
    date: 'March 9, 2025',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'trend-4',
    title: 'Architecture That Invites the Outside In',
    date: 'March 8, 2025',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'trend-5',
    title: 'Why Short Films Are Having a Moment',
    date: 'March 7, 2025',
    author: 'Maya Okonkwo',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
]

export const popularCategories = [
  { name: 'Technology', slug: 'technology', count: 42 },
  { name: 'Fashion', slug: 'fashion', count: 28 },
  { name: 'Travel', slug: 'travel', count: 35 },
  { name: 'Health', slug: 'health', count: 31 },
  { name: 'Food', slug: 'food', count: 24 },
  { name: 'Culture', slug: 'culture', count: 19 },
] as const

export const mostRead: Post[] = [
  {
    id: 'most-1',
    title: 'A Practical Guide to Building Better Habits',
    date: 'March 1, 2025',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'most-2',
    title: 'Hidden Museums Every Traveler Should Visit',
    date: 'February 28, 2025',
    image:
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=400&q=80',
    categories: [{ label: 'Travel', tone: 'teal' }],
  },
  {
    id: 'most-3',
    title: 'Coffee Culture Beyond the Latte',
    date: 'February 27, 2025',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'most-4',
    title: 'What Founders Get Wrong About Brand Voice',
    date: 'February 26, 2025',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
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
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'fashion-extra-1',
    title: 'Quiet Luxury Looks That Still Feel Personal',
    excerpt: 'Neutral palettes and strong tailoring are back—without looking like a uniform.',
    date: 'March 4, 2025',
    author: 'Sofia Reyes',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'fashion-extra-2',
    title: 'How Vintage Markets Are Influencing New Collections',
    date: 'March 1, 2025',
    author: 'Nora Blake',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'travel-extra-1',
    title: 'Train Journeys Worth Taking Slowly',
    excerpt: 'Scenic routes where the ride is the destination.',
    date: 'March 3, 2025',
    author: 'Daniel Hart',
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Travel', tone: 'teal' }],
  },
  {
    id: 'health-extra-1',
    title: 'Strength Training Without the Intimidation',
    excerpt: 'Simple routines that build consistency for beginners.',
    date: 'March 2, 2025',
    author: 'Elena Voss',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Health', tone: 'red' }],
  },
  {
    id: 'food-extra-1',
    title: 'Neighborhood Bakeries Redefining Comfort Food',
    date: 'February 25, 2025',
    author: 'Jordan Lee',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Food', tone: 'orange' }],
  },
  {
    id: 'culture-extra-1',
    title: 'Community Theaters Keeping Local Stories Alive',
    date: 'February 24, 2025',
    author: 'Maya Okonkwo',
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Culture', tone: 'purple' }],
  },
  {
    id: 'lifestyle-extra-1',
    title: 'Small Apartments, Big Ideas for Daily Calm',
    excerpt: 'Storage, light, and rituals that make compact living feel generous.',
    date: 'February 23, 2025',
    author: 'Ava Morgan',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'lifestyle-extra-2',
    title: 'Digital Sundays: Unplugging Without FOMO',
    date: 'February 20, 2025',
    author: 'Liam Chen',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=700&q=80',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
  },
  {
    id: 'fashion-extra-3',
    title: 'Tailoring Rules for Soft Power Dressing',
    excerpt: 'How precise cuts and muted tones make everyday outfits feel intentional.',
    date: 'February 22, 2025',
    author: 'Nora Blake',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'fashion-extra-4',
    title: 'Accessories That Carry a Whole Outfit',
    date: 'February 18, 2025',
    author: 'Sofia Reyes',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'fashion-extra-5',
    title: 'Monochrome Layers for City Evenings',
    date: 'February 15, 2025',
    author: 'Ava Morgan',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Fashion', tone: 'red' }],
  },
  {
    id: 'health-extra-2',
    title: 'Sleep Hygiene Habits That Actually Stick',
    date: 'February 14, 2025',
    author: 'Elena Voss',
    image:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Health', tone: 'red' }],
  },
  {
    id: 'tech-extra-2',
    title: 'Open-Source Apps Worth Switching To',
    date: 'February 12, 2025',
    author: 'Chris Park',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    categories: [{ label: 'Technology', tone: 'blue' }],
  },
  {
    id: 'travel-extra-2',
    title: 'City Breaks Built Around One Great Neighborhood',
    date: 'February 10, 2025',
    author: 'Daniel Hart',
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
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

export const footerTrending: Post[] = trendingPosts.slice(1, 4)
export const footerPopular: Post[] = mostRead.slice(0, 3)
