import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function TravelLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [feature, ...rest] = posts

  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={feature.image}
          alt=""
          className="h-[58svh] w-full object-cover sm:h-[68svh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/80 uppercase">
            {category.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-6xl">
            {category.label}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/75 sm:text-base">{category.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <a href={`#${feature.id}`} className="group grid gap-6 border-b border-line pb-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Badges post={feature} />
            <h2 className="font-display text-3xl font-semibold leading-tight transition group-hover:text-brand">
              {feature.title}
            </h2>
            {feature.excerpt && (
              <p className="mt-3 max-w-2xl text-muted">{feature.excerpt}</p>
            )}
            <Meta post={feature} />
          </div>
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <span className="text-xs font-bold tracking-wide text-brand uppercase">Featured route →</span>
          </div>
        </a>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <a
              key={post.id}
              href={`#${post.id}`}
              className="group relative block min-h-[260px] overflow-hidden"
            >
              <img
                src={post.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Badges post={post} />
                <h3 className="font-display text-lg font-semibold text-white transition group-hover:text-brand">
                  {post.title}
                </h3>
                <Meta post={post} />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
