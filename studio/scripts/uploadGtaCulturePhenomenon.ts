/**
 * Upload the GTA culture phenomenon post into Sanity.
 * Run from /studio:
 *   npx sanity exec scripts/uploadGtaCulturePhenomenon.ts --with-user-token
 */
import {createReadStream, existsSync, readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = getCliClient({apiVersion: '2025-01-01'})
const imagesDir = path.resolve(__dirname, '../../public/images/posts')
const seedPath = path.join(__dirname, 'seed-data.json')

const SLUG = 'grand-theft-auto-global-cultural-phenomenon'
const IMAGE_FILE = 'culture-gta-phenomenon.jpg'
const CATEGORY_ID = 'category-culture'
const AUTHOR_ID = 'author-mazgazin2-culture'
const POST_ID = `post-${SLUG}`

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
    throw new Error(`Missing image: ${filePath}`)
  }
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
  })
  return {
    _type: 'image' as const,
    asset: {_type: 'reference' as const, _ref: asset._id},
  }
}

async function main() {
  const data = JSON.parse(readFileSync(seedPath, 'utf8')) as {
    posts: {
      id: string
      title: string
      excerpt?: string
      date: string
      author?: string
      imageFile: string
      body: string[]
    }[]
  }
  const post = data.posts.find((p) => p.id === SLUG)
  if (!post) throw new Error(`Post ${SLUG} not found in seed-data.json`)

  await client.createOrReplace({
    _id: CATEGORY_ID,
    _type: 'category',
    title: 'Culture',
    slug: {_type: 'slug', current: 'culture'},
    eyebrow: 'Arts & ideas',
    tagline: 'Music, film, books, and the scenes keeping local stories alive.',
    tone: 'purple',
  })
  console.log('✓ category Culture')

  await client.createOrReplace({
    _id: AUTHOR_ID,
    _type: 'author',
    name: post.author || 'Magzone Culture',
    role: 'Culture Editor',
    bio: 'Magzone Culture covers music, film, games, and the stories shaping how people create and connect.',
  })
  console.log(`✓ author ${post.author}`)

  const image = await uploadImage(IMAGE_FILE)
  console.log('✓ image uploaded')

  await client.createOrReplace({
    _id: POST_ID,
    _type: 'post',
    title: post.title,
    slug: {_type: 'slug', current: SLUG},
    excerpt: post.excerpt,
    mainImage: image,
    body: paragraphsToBlocks(post.body),
    author: {_type: 'reference', _ref: AUTHOR_ID},
    categories: [{_type: 'reference', _ref: CATEGORY_ID, _key: 'culture'}],
    publishedAt: parseDate(post.date),
    featured: true,
  })

  console.log(`✓ post uploaded: ${post.title}`)
  console.log(`  slug: /blog/${SLUG}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
