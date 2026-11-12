import { healthPosts, lifestylePosts, newsPosts, travelPosts } from './articles'

export const heroSlides = [
  {
    id: 'slide-news-1',
    postId: newsPosts[0].id,
    title: newsPosts[0].title,
    category: 'News',
    to: `/blog/${newsPosts[0].id}`,
    image: newsPosts[0].image,
    tone: 'red' as const,
  },
  {
    id: 'slide-health-1',
    postId: healthPosts[0].id,
    title: healthPosts[0].title,
    category: 'Health',
    to: `/blog/${healthPosts[0].id}`,
    image: healthPosts[0].image,
    tone: 'red' as const,
  },
  {
    id: 'slide-lifestyle-1',
    postId: lifestylePosts[0].id,
    title: lifestylePosts[0].title,
    category: 'Lifestyle',
    to: `/blog/${lifestylePosts[0].id}`,
    image: lifestylePosts[0].image,
    tone: 'green' as const,
  },
  {
    id: 'slide-travel-1',
    postId: travelPosts[0].id,
    title: travelPosts[0].title,
    category: 'Travel',
    to: `/blog/${travelPosts[0].id}`,
    image: travelPosts[0].image,
    tone: 'teal' as const,
  },
]

export const categorySlides = [
  {
    id: 'cat-news',
    title: 'News desk',
    category: 'News',
    to: '/category/news',
    image: newsPosts[0].image,
  },
  {
    id: 'cat-health',
    title: 'Health',
    category: 'Health',
    to: '/category/health',
    image: healthPosts[1].image,
  },
  {
    id: 'cat-lifestyle',
    title: 'Lifestyle',
    category: 'Lifestyle',
    to: '/category/lifestyle',
    image: lifestylePosts[1].image,
  },
  {
    id: 'cat-travel',
    title: 'Travel',
    category: 'Travel',
    to: '/category/travel',
    image: travelPosts[0].image,
  },
]
