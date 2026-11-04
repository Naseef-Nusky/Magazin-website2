import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function HealthLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [feature, ...rest] = posts
  const mid = Math.ceil(rest.length / 2)
  const left = rest.slice(0, mid)
  const right = rest.slice(mid)

  return (
    <main className="bg-[#f4f7f4]">
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <p className="text-[11px] font-bold tracking-[0.3em] text-tag-green uppercase">
          {category.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {category.label}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          {category.tagline}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
        <a
          href={`#${feature.id}`}
          className="group grid overflow-hidden bg-white shadow-sm sm:grid-cols-2"
        >
          <img src={feature.image} alt="" className="aspect-[4/3] h-full w-full object-cover" />
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <Badges post={feature} />
            <h2 className="font-display text-2xl font-semibold leading-snug transition group-hover:text-brand sm:text-3xl">
              {feature.title}
            </h2>
            {feature.excerpt && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.excerpt}</p>
            )}
            <Meta post={feature} />
          </div>
        </a>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
        {[left, right].map((column, colIndex) => (
          <div key={colIndex} className="space-y-5">
            {column.map((post) => (
              <a
                key={post.id}
                href={`#${post.id}`}
                className="group flex gap-4 border-b border-[#d9e3d9] pb-5 last:border-0"
              >
                {post.image && (
                  <img src={post.image} alt="" className="h-24 w-24 shrink-0 object-cover" />
                )}
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-brand">
                    {post.title}
                  </h3>
                  <Meta post={post} />
                </div>
              </a>
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}
