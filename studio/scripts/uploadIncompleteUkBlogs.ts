/**
 * Upload UK posts that fill incomplete categories up to 5 each.
 * Run from /studio:
 *   ./node_modules/.bin/sanity exec scripts/uploadIncompleteUkBlogs.ts --with-user-token
 */
import {createReadStream, existsSync, readFileSync} from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = getCliClient({apiVersion: '2025-01-01'})
const imagesDir = path.resolve(__dirname, '../../public/images/posts')
const seedPath = path.join(__dirname, 'seed-data.json')

const POSTS = [
  {
    slug: 'uk-open-banking-fintech-shift',
    imageFile: 'tech-uk-open-banking.jpg',
    categoryId: 'category-technology',
    categoryTitle: 'Technology',
    categorySlug: 'technology',
    eyebrow: 'Innovation desk',
    tagline: 'AI, infrastructure, and the systems reshaping how we live and work.',
    tone: 'blue',
    categoryKey: 'technology',
    authorId: 'author-mazgazin2-tech',
    authorName: 'Magzone Tech',
    authorRole: 'Technology Editor',
    authorBio: 'Magzone Tech covers AI, infrastructure, fintech, and the systems reshaping everyday life.',
    featured: false,
  },
  {
    slug: 'uk-allotment-living-revival',
    imageFile: 'lifestyle-uk-allotments.jpg',
    categoryId: 'category-lifestyle',
    categoryTitle: 'Lifestyle',
    categorySlug: 'lifestyle',
    eyebrow: 'Living well',
    tagline: 'Rituals, homes, and habits that make ordinary days feel better.',
    tone: 'green',
    categoryKey: 'lifestyle',
    authorId: 'author-mazgazin2-lifestyle',
    authorName: 'Magzone Lifestyle',
    authorRole: 'Lifestyle Editor',
    authorBio: 'Magzone Lifestyle covers habits, homes, and the rituals that shape everyday British life.',
    featured: false,
  },
  {
    slug: 'british-pub-third-place-culture',
    imageFile: 'lifestyle-british-pub-culture.jpg',
    categoryId: 'category-lifestyle',
    categoryTitle: 'Lifestyle',
    categorySlug: 'lifestyle',
    eyebrow: 'Living well',
    tagline: 'Rituals, homes, and habits that make ordinary days feel better.',
    tone: 'green',
    categoryKey: 'lifestyle',
    authorId: 'author-mazgazin2-lifestyle',
    authorName: 'Magzone Lifestyle',
    authorRole: 'Lifestyle Editor',
    authorBio: 'Magzone Lifestyle covers habits, homes, and the rituals that shape everyday British life.',
    featured: false,
  },
  {
    slug: 'uk-walking-for-wellbeing',
    imageFile: 'health-uk-walking-wellbeing.jpg',
    categoryId: 'category-health',
    categoryTitle: 'Health',
    categorySlug: 'health',
    eyebrow: 'Wellness',
    tagline: 'Practical guides for movement, recovery, and everyday balance.',
    tone: 'red',
    categoryKey: 'health',
    authorId: 'author-mazgazin2-health',
    authorName: 'Magzone Health',
    authorRole: 'Health Editor',
    authorBio: 'Magzone Health covers movement, recovery, and practical wellbeing for everyday readers.',
    featured: false,
  },
  {
    slug: 'edinburgh-weekend-city-break',
    imageFile: 'travel-edinburgh-weekend.jpg',
    categoryId: 'category-travel',
    categoryTitle: 'Travel',
    categorySlug: 'travel',
    eyebrow: 'Destinations',
    tagline: 'Routes, cities, and escapes that reward curiosity over checklists.',
    tone: 'teal',
    categoryKey: 'travel',
    authorId: 'author-mazgazin2-travel',
    authorName: 'Magzone Travel',
    authorRole: 'Travel Editor',
    authorBio: 'Magzone Travel covers destinations, trends, and the stories that shape how people holiday.',
    featured: true,
  },
  {
    slug: 'cornwall-coast-path-short-breaks',
    imageFile: 'travel-cornwall-coast.jpg',
    categoryId: 'category-travel',
    categoryTitle: 'Travel',
    categorySlug: 'travel',
    eyebrow: 'Destinations',
    tagline: 'Routes, cities, and escapes that reward curiosity over checklists.',
    tone: 'teal',
    categoryKey: 'travel',
    authorId: 'author-mazgazin2-travel',
    authorName: 'Magzone Travel',
    authorRole: 'Travel Editor',
    authorBio: 'Magzone Travel covers destinations, trends, and the stories that shape how people holiday.',
    featured: false,
  },
  {
    slug: 'lake-district-autumn-escapes',
    imageFile: 'travel-lake-district-autumn.jpg',
    categoryId: 'category-travel',
    categoryTitle: 'Travel',
    categorySlug: 'travel',
    eyebrow: 'Destinations',
    tagline: 'Routes, cities, and escapes that reward curiosity over checklists.',
    tone: 'teal',
    categoryKey: 'travel',
    authorId: 'author-mazgazin2-travel',
    authorName: 'Magzone Travel',
    authorRole: 'Travel Editor',
    authorBio: 'Magzone Travel covers destinations, trends, and the stories that shape how people holiday.',
    featured: false,
  },
  {
    slug: 'wales-coastal-path-guide',
    imageFile: 'travel-wales-coastal-path.jpg',
    categoryId: 'category-travel',
    categoryTitle: 'Travel',
    categorySlug: 'travel',
    eyebrow: 'Destinations',
    tagline: 'Routes, cities, and escapes that reward curiosity over checklists.',
    tone: 'teal',
    categoryKey: 'travel',
    authorId: 'author-mazgazin2-travel',
    authorName: 'Magzone Travel',
    authorRole: 'Travel Editor',
    authorBio: 'Magzone Travel covers destinations, trends, and the stories that shape how people holiday.',
    featured: false,
  },
  {
    slug: 'uk-theatre-revival-regional-stages',
    imageFile: 'culture-uk-theatre-revival.jpg',
    categoryId: 'category-culture',
    categoryTitle: 'Culture',
    categorySlug: 'culture',
    eyebrow: 'Arts & ideas',
    tagline: 'Music, film, books, and the scenes keeping local stories alive.',
    tone: 'purple',
    categoryKey: 'culture',
    authorId: 'author-mazgazin2-culture',
    authorName: 'Magzone Culture',
    authorRole: 'Culture Editor',
    authorBio: 'Magzone Culture covers music, film, theatre, and the stories shaping how people create and connect.',
    featured: false,
  },
] as const

type SeedPost = {
  id: string
  title: string
  excerpt?: string
  date: string
  author?: string
  imageFile: string
  body: string[]
}

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
  const data = JSON.parse(readFileSync(seedPath, 'utf8')) as {posts: SeedPost[]}
  const ensured = new Set<string>()

  for (const entry of POSTS) {
    if (!ensured.has(entry.categoryId)) {
      await client.createOrReplace({
        _id: entry.categoryId,
        _type: 'category',
        title: entry.categoryTitle,
        slug: {_type: 'slug', current: entry.categorySlug},
        eyebrow: entry.eyebrow,
        tagline: entry.tagline,
        tone: entry.tone,
      })
      console.log(`✓ category ${entry.categoryTitle}`)
      ensured.add(entry.categoryId)
    }

    if (!ensured.has(entry.authorId)) {
      await client.createOrReplace({
        _id: entry.authorId,
        _type: 'author',
        name: entry.authorName,
        role: entry.authorRole,
        bio: entry.authorBio,
      })
      console.log(`✓ author ${entry.authorName}`)
      ensured.add(entry.authorId)
    }

    const post = data.posts.find((p) => p.id === entry.slug)
    if (!post) throw new Error(`Post ${entry.slug} not found in seed-data.json`)

    const image = await uploadImage(entry.imageFile)
    console.log(`✓ image ${entry.imageFile}`)

    await client.createOrReplace({
      _id: `post-${entry.slug}`,
      _type: 'post',
      title: post.title,
      slug: {_type: 'slug', current: entry.slug},
      excerpt: post.excerpt,
      mainImage: image,
      body: paragraphsToBlocks(post.body),
      author: {_type: 'reference', _ref: entry.authorId},
      categories: [{_type: 'reference', _ref: entry.categoryId, _key: entry.categoryKey}],
      publishedAt: parseDate(post.date),
      featured: entry.featured,
    })

    console.log(`✓ post uploaded: ${post.title}`)
    console.log(`  slug: /blog/${entry.slug}`)
  }

  console.log(`\nDone. Uploaded ${POSTS.length} UK posts.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
