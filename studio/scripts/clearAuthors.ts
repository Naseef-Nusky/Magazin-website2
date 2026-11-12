/**
 * Unset author on every Sanity post so bylines no longer appear.
 * Run from /studio:
 *   ./node_modules/.bin/sanity exec scripts/clearAuthors.ts --with-user-token
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

async function main() {
  const posts = await client.fetch<{_id: string}[]>(`*[_type == "post" && defined(author)]{_id}`)
  console.log(`Found ${posts.length} posts with author`)

  for (const post of posts) {
    await client.patch(post._id).unset(['author']).commit()
    console.log(`✓ cleared author: ${post._id}`)
  }

  console.log('Done')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
