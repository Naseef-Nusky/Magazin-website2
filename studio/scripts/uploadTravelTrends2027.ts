/**
 * Upload the 2027 travel trends post into Sanity.
 * Run from /studio:
 *   npx sanity exec scripts/uploadTravelTrends2027.ts --with-user-token
 */
import {createReadStream, existsSync, readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = getCliClient({apiVersion: '2025-01-01'})
const imagesDir = path.resolve(__dirname, '../../public/images/posts')
const seedPath = path.join(__dirname, 'seed-data.json')

const SLUG = 'travel-trends-shaping-holidays-in-2027'
const IMAGE_FILE = 'travel-trends-2027.jpg'
const CATEGORY_ID = 'category-travel'
const AUTHOR_ID = 'author-mazgazin2-travel'
const POST_ID = `post-${SLUG}`

const statsBlocks = [
  'Key Travel Statistics',
  'Interest in paranormal travel experiences: 65%.',
  'Increase in searches for Scotland Highland aesthetic: 465%.',
  'Men experiencing mental health difficulties in cited research: 50%.',
  'Interest in booking an un-adulting holiday: 57%.',
  'Gen Z and millennials interested in un-adulting holidays: 71%.',
  'Travellers interested in shared water-based wellness activities: 60%.',
  'Americans willing to pay more for exceptional personal attention: 66%.',
  'One-night stays planned by surveyed travellers: 79%.',
  'Gen Z and millennials planning one-night stays: 83%.',
  'Increase in searches for one-night getaways: almost 10%.',
  'Statistics are drawn from the surveys and industry reports cited in the source material. Survey findings reflect the respondents and research methods involved; they should not be interpreted as representing every traveller.',
]

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
    title: 'Travel',
    slug: {_type: 'slug', current: 'travel'},
    eyebrow: 'Destinations',
    tagline: 'Routes, cities, and escapes that reward curiosity over checklists.',
    tone: 'teal',
  })
  console.log('✓ category Travel')

  await client.createOrReplace({
    _id: AUTHOR_ID,
    _type: 'author',
    name: post.author || 'Magzone Travel',
    role: 'Travel Editor',
    bio: 'Magzone Travel covers destinations, trends, and the stories that shape how people holiday.',
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
    body: paragraphsToBlocks([...post.body, ...statsBlocks]),
    author: {_type: 'reference', _ref: AUTHOR_ID},
    categories: [{_type: 'reference', _ref: CATEGORY_ID, _key: 'travel'}],
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
