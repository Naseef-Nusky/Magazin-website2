/**
 * Upload the five UK food posts into Sanity.
 * Run from /studio:
 *   npx sanity exec scripts/uploadFoodPosts.ts --with-user-token
 */
import {createReadStream, existsSync, readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = getCliClient({apiVersion: '2025-01-01'})
const imagesDir = path.resolve(__dirname, '../../public/images/posts')
const seedPath = path.join(__dirname, 'seed-data.json')

const CATEGORY_ID = 'category-food'
const AUTHOR_ID = 'author-mazgazin2-food'
const FOOD_SLUGS = [
  'british-sunday-roast-revival',
  'london-food-markets-guide',
  'british-cheese-beyond-cheddar',
  'best-british-fish-and-chips',
  'seasonal-british-cooking-autumn',
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

  await client.createOrReplace({
    _id: CATEGORY_ID,
    _type: 'category',
    title: 'Food',
    slug: {_type: 'slug', current: 'food'},
    eyebrow: 'Kitchen & table',
    tagline: 'Markets, bakeries, and the meals that define a neighborhood.',
    tone: 'orange',
  })
  console.log('✓ category Food')

  await client.createOrReplace({
    _id: AUTHOR_ID,
    _type: 'author',
    name: 'Magzone Food',
    role: 'Food Editor',
    bio: 'Magzone Food covers British cooking, markets, producers, and the meals that shape everyday eating.',
  })
  console.log('✓ author Magzone Food')

  for (const slug of FOOD_SLUGS) {
    const post = data.posts.find((p) => p.id === slug)
    if (!post) throw new Error(`Post ${slug} not found in seed-data.json`)

    const image = await uploadImage(post.imageFile)
    await client.createOrReplace({
      _id: `post-${slug}`,
      _type: 'post',
      title: post.title,
      slug: {_type: 'slug', current: slug},
      excerpt: post.excerpt,
      mainImage: image,
      body: paragraphsToBlocks(post.body),
      author: {_type: 'reference', _ref: AUTHOR_ID},
      categories: [{_type: 'reference', _ref: CATEGORY_ID, _key: 'food'}],
      publishedAt: parseDate(post.date),
      featured: slug === 'british-sunday-roast-revival',
    })
    console.log(`✓ post uploaded: ${post.title}`)
  }

  console.log('Done. Food posts available under /category/food')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
