import { Link } from 'react-router-dom'
import { postPath } from '../../data/articles'
import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function NewsLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [feature, second, ...rest] = posts
  const leadStack = second ? [second, ...rest.slice(0, 3)] : []
  const grid = second ? rest.slice(3) : rest

  return (
    <main>
      <section className="border-b border-line bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <p className="text-[11px] font-bold tracking-[0.3em] text-brand uppercase">
            {category.eyebrow}
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink">
              {category.label}
            </h1>
            <p className="max-w-md text-sm text-muted">{category.tagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <Link to={postPath(feature.id)} className="group lg:col-span-8">
          <img
            src={feature.image}
            alt=""
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="mt-4">
            <Badges post={feature} />
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight transition group-hover:text-brand sm:text-4xl">
              {feature.title}
            </h2>
            {feature.excerpt && (
              <p className="mt-3 max-w-2xl text-muted">{feature.excerpt}</p>
            )}
            <Meta post={feature} />
          </div>
        </Link>

        {leadStack.length > 0 && (
          <div className="lg:col-span-4">
            <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-brand uppercase">
              Latest
            </p>
            <ul className="divide-y divide-line border-y border-line">
              {leadStack.map((post) => (
                <li key={post.id}>
                  <Link to={postPath(post.id)} className="group flex gap-3 py-4">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                        className="h-16 w-20 shrink-0 object-cover"
                      />
                    ) : null}
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold leading-snug transition group-hover:text-brand">
                        {post.title}
                      </h3>
                      <Meta post={post} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {grid.length > 0 && (
        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <p className="mb-6 text-[11px] font-bold tracking-[0.25em] text-muted uppercase">
              More news
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((post) => (
                <Link key={post.id} to={postPath(post.id)} className="group block">
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="mt-3">
                    <Badges post={post} />
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug transition group-hover:text-brand">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                    )}
                    <Meta post={post} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
