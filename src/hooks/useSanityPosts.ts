import {useEffect, useState} from 'react'
import {
  allPosts,
  getPostById,
  getPostsByCategorySlug,
  type Post,
} from '../data/articles'
import {getPostBody} from '../data/content'
import {
  fetchSanityPostBySlug,
  fetchSanityPosts,
  fetchSanityPostsByCategory,
} from '../lib/sanityContent'

export type PostWithBody = Post & {bodyParagraphs?: string[]}

export function useAllPosts() {
  const [posts, setPosts] = useState<PostWithBody[]>(() =>
    allPosts.filter((post) => post.image),
  )
  const [source, setSource] = useState<'local' | 'sanity'>('local')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetchSanityPosts().then((remote) => {
      if (!active) return
      const localCatalog = allPosts.filter((post) => post.image)
      if (remote.length) {
        const byId = new Map(localCatalog.map((post) => [post.id, post]))
        for (const remotePost of remote) {
          if (byId.has(remotePost.id)) byId.set(remotePost.id, remotePost)
        }
        setPosts([...byId.values()])
        setSource('sanity')
      }
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  return {posts, source, loading}
}

export function usePost(slug: string) {
  const local = getPostById(slug)
  const [post, setPost] = useState<PostWithBody | null>(() =>
    local ? {...local, bodyParagraphs: getPostBody(local)} : null,
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const localPost = getPostById(slug)
    setPost(localPost ? {...localPost, bodyParagraphs: getPostBody(localPost)} : null)
    setLoading(true)

    fetchSanityPostBySlug(slug).then((remote) => {
      if (!active) return
      if (remote) setPost(remote)
      setLoading(false)
    })

    return () => {
      active = false
    }
  }, [slug])

  return {post, loading}
}

export function useCategoryPosts(slug: string) {
  const [posts, setPosts] = useState<Post[]>(() => getPostsByCategorySlug(slug))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setPosts(getPostsByCategorySlug(slug))
    setLoading(true)

    fetchSanityPostsByCategory(slug).then((remote) => {
      if (!active) return
      const local = getPostsByCategorySlug(slug)
      if (remote.length) {
        const byId = new Map(local.map((post) => [post.id, post]))
        for (const remotePost of remote) {
          if (byId.has(remotePost.id)) byId.set(remotePost.id, remotePost)
        }
        setPosts([...byId.values()])
      } else {
        setPosts(local)
      }
      setLoading(false)
    })

    return () => {
      active = false
    }
  }, [slug])

  return {posts, loading}
}
