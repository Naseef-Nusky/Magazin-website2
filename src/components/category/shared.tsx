import type { Post } from '../../data/articles'
import { CategoryBadge } from '../CategoryBadge'

export function Meta({ post }: { post: Post }) {
  return (
    <p className="mt-2 text-[11px] tracking-wide text-muted uppercase">
      {post.author ? `${post.author} · ` : ''}
      {post.date}
    </p>
  )
}

export function Badges({ post }: { post: Post }) {
  if (!post.categories.length) return null
  return (
    <div className="mb-2 flex flex-wrap gap-1.5">
      {post.categories.map((c) => (
        <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
      ))}
    </div>
  )
}

export function EmptyState() {
  return <p className="px-4 py-16 text-center text-muted sm:px-6">No posts in this category yet.</p>
}
