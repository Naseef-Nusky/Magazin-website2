/**
 * Upload all Magzone local content into Sanity.
 * Run from /studio:
 *   npx sanity exec scripts/seedContent.ts --with-user-token
 */
import {createReadStream, existsSync, readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

type SeedCategory = {
  title: string
  slug: string
  eyebrow?: string
  tagline?: string
  tone?: string
}

type SeedAuthor = {name: string; role?: string}

type SeedPost = {
  id: string
  title: string
  excerpt?: string | null
  date: string
  author?: string | null
  imageFile: string
  categories: {label: string; tone: string}[]
  body: string[]
}

type SeedData = {
  categories: SeedCategory[]
  authors: SeedAuthor[]
  posts: SeedPost[]
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = getCliClient({apiVersion: '2025-01-01'})
const seedPath = path.join(__dirname, 'seed-data.json')
const imagesDir = path.resolve(__dirname, '../../public/images/posts')

function paragraphsToBlocks(paragraphs: string[]) {
  return paragraphs.map((text, index) => ({
    _type: 'block',
    _key: `p${index}`,
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: `s${index}`,
        text,
        marks: [],
      },
    ],
  }))
}

function parseDate(dateStr: string) {
  const d = new Date(dateStr)
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

async function uploadImage(filename: string) {
  const filePath = path.join(imagesDir, filename)
  if (!existsSync(filePath)) {
    console.warn(`Missing image: ${filename}`)
    return null
  }
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
  })
  return {
    _type: 'image',
    asset: {_type: 'reference', _ref: asset._id},
  }
}

async function main() {
  const data = JSON.parse(readFileSync(seedPath, 'utf8')) as SeedData
  console.log(
    `Seeding ${data.categories.length} categories, ${data.authors.length} authors, ${data.posts.length} posts…`,
  )

  const categoryIds = new Map<string, string>()
  for (const category of data.categories) {
    const id = `category-${category.slug}`
    await client.createOrReplace({
      _id: id,
      _type: 'category',
      title: category.title,
      slug: {_type: 'slug', current: category.slug},
      eyebrow: category.eyebrow,
      tagline: category.tagline,
      tone: category.tone || 'red',
    })
    categoryIds.set(category.title.toLowerCase(), id)
    console.log(`✓ category ${category.title}`)
  }

  const authorIds = new Map<string, string>()
  for (const author of data.authors) {
    const id = `author-${author.name.toLowerCase().replace(/\s+/g, '-')}`
    await client.createOrReplace({
      _id: id,
      _type: 'author',
      name: author.name,
      role: author.role || 'Contributor',
      bio: `${author.name} writes for Magzone.`,
    })
    authorIds.set(author.name.toLowerCase(), id)
    console.log(`✓ author ${author.name}`)
  }

  let uploaded = 0
  for (const post of data.posts) {
    const image = await uploadImage(post.imageFile)
    const refs = post.categories
      .map((c) => categoryIds.get(c.label.toLowerCase()))
      .filter(Boolean)
      .map((id) => ({_type: 'reference', _ref: id, _key: id!.replace(/[^a-z0-9]/gi, '')}))

    const authorId = post.author ? authorIds.get(post.author.toLowerCase()) : undefined
    const docId = `post-${post.id}`

    await client.createOrReplace({
      _id: docId,
      _type: 'post',
      title: post.title,
      slug: {_type: 'slug', current: post.id},
      excerpt: post.excerpt || undefined,
      mainImage: image || undefined,
      body: paragraphsToBlocks(
        post.body.length
          ? post.body
          : [
              `${post.title} is a Magzone feature for readers who want clarity and context.`,
              'Explore more stories in related categories across the archive.',
            ],
      ),
      author: authorId ? {_type: 'reference', _ref: authorId} : undefined,
      categories: refs,
      publishedAt: parseDate(post.date),
      featured: ['hero-main', 'recent-feature', 'edit-1'].includes(post.id),
    })

    uploaded += 1
    console.log(`✓ post (${uploaded}/${data.posts.length}) ${post.title}`)
  }

  console.log('\nDone. All content uploaded to Magzone.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
