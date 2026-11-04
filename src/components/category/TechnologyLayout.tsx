import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function TechnologyLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [feature, ...rest] = posts

  return (
    <main className="bg-[#0f1218] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.25em] text-brand uppercase">
              {category.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {category.label}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">{category.tagline}</p>
            <div className="mt-8 flex gap-6 border-t border-white/10 pt-6 font-mono text-[11px] text-white/45">
              <span>{posts.length} stories</span>
              <span>Updated weekly</span>
            </div>
          </div>
          <a href={`#${feature.id}`} className="group relative block min-h-[320px] overflow-hidden lg:col-span-7">
            <img
              src={feature.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1218] via-[#0f1218]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <Badges post={feature} />
              <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
                {feature.title}
              </h2>
              <Meta post={feature} />
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <ul className="divide-y divide-white/10">
          {rest.map((post, i) => (
            <li key={post.id}>
              <a href={`#${post.id}`} className="group grid gap-4 py-6 sm:grid-cols-12 sm:items-center">
                <span className="font-mono text-sm text-brand sm:col-span-1">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className="sm:col-span-7">
                  <h3 className="font-display text-xl font-semibold transition group-hover:text-brand">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-white/55">{post.excerpt}</p>
                  )}
                  <Meta post={post} />
                </div>
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover sm:col-span-4"
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
