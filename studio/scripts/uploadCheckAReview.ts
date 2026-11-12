/**
 * Upload the CheckAReview.com review post into Sanity and remove the Magzone review.
 * Run from /studio:
 *   ./node_modules/.bin/sanity exec scripts/uploadCheckAReview.ts --with-user-token
 */
import {createReadStream, existsSync, readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = getCliClient({apiVersion: '2025-01-01'})
const imagesDir = path.resolve(__dirname, '../../public/images/posts')
const seedPath = path.join(__dirname, 'seed-data.json')

const SLUG = 'checkareview-trusted-reviews-platform-review'
const IMAGE_FILE = 'tech-checkareview.jpg'
const CATEGORY_ID = 'category-technology'
const POST_ID = `post-${SLUG}`
const OLD_MAGZONE_POST_ID = 'post-magzone-uk-digital-magazine-review'

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

  try {
    await client.delete(OLD_MAGZONE_POST_ID)
    console.log('✓ removed Magzone review post')
  } catch {
    console.log('· Magzone review already absent (ok)')
  }

  await client.createOrReplace({
    _id: CATEGORY_ID,
    _type: 'category',
    title: 'Technology',
    slug: {_type: 'slug', current: 'technology'},
    eyebrow: 'Innovation desk',
    tagline: 'AI, infrastructure, and the systems reshaping how we live and work.',
    tone: 'blue',
  })
  console.log('✓ category Technology')

  const image = await uploadImage(IMAGE_FILE)
  console.log('✓ image uploaded (CheckAReview hero)')

  await client.createOrReplace({
    _id: POST_ID,
    _type: 'post',
    title: post.title,
    slug: {_type: 'slug', current: SLUG},
    excerpt: post.excerpt,
    mainImage: image,
    body: paragraphsToBlocks(post.body),
    categories: [{_type: 'reference', _ref: CATEGORY_ID, _key: 'technology'}],
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
