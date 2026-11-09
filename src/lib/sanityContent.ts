import type {Post, Tone} from '../data/articles'
import {allPostsQuery, categoriesQuery, postBySlugQuery, postsByCategoryQuery} from './queries'
import {isSanityConfigured, sanityClient, urlFor} from './sanity'

type SanityCategory = {
  title?: string
  slug?: string
  tone?: Tone
  eyebrow?: string
  tagline?: string
  count?: number
}

type SanityBlock = {
  _type?: string
  children?: {_type?: string; text?: string}[]
}

type SanityPost = {
  _id: string
  title?: string
  slug?: string
  excerpt?: string
  publishedAt?: string
  featured?: boolean
  mainImage?: Parameters<typeof urlFor>[0]
  author?: string
  categories?: SanityCategory[]
  body?: SanityBlock[]
}

function formatDate(value?: string) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function blocksToParagraphs(body?: SanityBlock[]) {
  if (!body?.length) return []
  return body
    .map((block) => (block.children || []).map((child) => child.text || '').join('').trim())
    .filter(Boolean)
}

export function mapSanityPost(doc: SanityPost): Post & {bodyParagraphs?: string[]} {
  return {
    id: doc.slug || doc._id,
    title: doc.title || 'Untitled',
    excerpt: doc.excerpt,
    date: formatDate(doc.publishedAt),
    author: doc.author,
    image: doc.mainImage ? urlFor(doc.mainImage) : '',
    categories: (doc.categories || [])
      .filter((c) => c.title)
      .map((c) => ({
        label: c.title!,
        tone: (c.tone || 'red') as Tone,
      })),
    bodyParagraphs: blocksToParagraphs(doc.body),
  }
}

export async function fetchSanityPosts(): Promise<(Post & {bodyParagraphs?: string[]})[]> {
  if (!sanityClient) return []
  try {
    const docs = await sanityClient.fetch<SanityPost[]>(allPostsQuery)
    return (docs || []).map(mapSanityPost).filter((p) => p.image)
  } catch (error) {
    console.warn('Sanity posts fetch failed, using local content.', error)
    return []
  }
}

export async function fetchSanityPostBySlug(slug: string) {
  if (!sanityClient) return null
  try {
    const doc = await sanityClient.fetch<SanityPost | null>(postBySlugQuery, {slug})
    return doc ? mapSanityPost(doc) : null
  } catch (error) {
    console.warn('Sanity post fetch failed.', error)
    return null
  }
}

export async function fetchSanityPostsByCategory(slug: string) {
  if (!sanityClient) return []
  try {
    const docs = await sanityClient.fetch<SanityPost[]>(postsByCategoryQuery, {slug})
    return (docs || []).map(mapSanityPost).filter((p) => p.image)
  } catch (error) {
    console.warn('Sanity category posts fetch failed.', error)
    return []
  }
}

export async function fetchSanityCategories() {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch<SanityCategory[]>(categoriesQuery)
  } catch (error) {
    console.warn('Sanity categories fetch failed.', error)
    return []
  }
}

export {isSanityConfigured}
