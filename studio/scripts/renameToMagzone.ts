import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

async function main() {
  const authors = await client.fetch<{_id: string; name?: string; bio?: string}[]>(
    `*[_type == "author"]{_id,name,bio}`,
  )
  for (const author of authors) {
    const name = (author.name || '').replaceAll('Mazgazin2', 'Magzone')
    const bio = (author.bio || '').replaceAll('Mazgazin2', 'Magzone')
    if (name !== author.name || bio !== author.bio) {
      await client.patch(author._id).set({name, bio}).commit()
      console.log(`✓ author ${author._id} -> ${name}`)
    }
  }
  console.log('Done')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
