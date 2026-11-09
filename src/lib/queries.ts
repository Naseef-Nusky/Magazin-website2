import groq from 'groq'

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  mainImage,
  "author": author->name,
  "categories": categories[]->{
    title,
    "slug": slug.current,
    tone
  },
  body
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  mainImage,
  "author": author->name,
  "categories": categories[]->{
    title,
    "slug": slug.current,
    tone
  },
  body
}`

export const postsByCategoryQuery = groq`*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  mainImage,
  "author": author->name,
  "categories": categories[]->{
    title,
    "slug": slug.current,
    tone
  },
  body
}`

export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  title,
  "slug": slug.current,
  eyebrow,
  tagline,
  tone,
  "count": count(*[_type == "post" && references(^._id)])
}`
