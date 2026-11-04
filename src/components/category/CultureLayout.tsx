import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function CultureLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [feature, ...rest] = posts

  return (
    <main>
      <section className="border-b-4 border-brand">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-muted uppercase">
                {category.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-5xl font-bold tracking-tight text-ink">
                {category.label}
              </h1>
            </div>
            <p className="max-w-md text-sm text-muted">{category.tagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12">
        <a href={`#${feature.id}`} className="group lg:col-span-7">
          <img src={feature.image} alt="" className="aspect-[16/11] w-full object-cover" />
          <div className="mt-4">
            <Badges post={feature} />
            <h2 className="font-display text-3xl font-semibold leading-tight transition group-hover:text-brand">
              {feature.title}
            </h2>
            {feature.excerpt && (
              <p className="mt-3 text-muted">{feature.excerpt}</p>
            )}
            <Meta post={feature} />
          </div>
        </a>

        <div className="lg:col-span-5">
          <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-brand uppercase">
            On the desk
          </p>
          <ul className="divide-y divide-line border-y border-line">
            {rest.map((post, i) => (
              <li key={post.id}>
                <a href={`#${post.id}`} className="group flex items-center gap-4 py-5">
                  <span className="w-6 shrink-0 font-display text-2xl font-bold text-line transition group-hover:text-brand">
                    {i + 1}
                  </span>
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      className="h-20 w-24 shrink-0 object-cover"
                    />
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-brand">
                      {post.title}
                    </h3>
                    <Meta post={post} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
