import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function LifestyleLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [a, b, c, ...rest] = posts

  return (
    <main className="bg-[#faf7f2]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-[11px] font-bold tracking-[0.3em] text-muted uppercase">
          {category.eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {category.label}
        </h1>
        <p className="mt-4 max-w-xl text-muted">{category.tagline}</p>

        <div className="mt-10 grid auto-rows-[180px] gap-4 sm:auto-rows-[220px] sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">
          {a && (
            <a
              href={`#${a.id}`}
              className="group relative overflow-hidden sm:col-span-2 sm:row-span-2"
            >
              <img
                src={a.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Badges post={a} />
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {a.title}
                </h2>
                <Meta post={a} />
              </div>
            </a>
          )}
          {b && (
            <a href={`#${b.id}`} className="group relative overflow-hidden lg:col-span-2">
              <img
                src={b.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-lg font-semibold text-white">{b.title}</h3>
              </div>
            </a>
          )}
          {c && (
            <a href={`#${c.id}`} className="group relative overflow-hidden lg:col-span-2">
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
              </div>
            </a>
          )}
        </div>
      </section>

      {rest.length > 0 && (
        <section className="border-t border-[#ebe4d8] bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
            {rest.map((post) => (
              <a key={post.id} href={`#${post.id}`} className="group block">
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="mb-3 aspect-[16/10] w-full object-cover"
                  />
                )}
                <h3 className="font-display text-lg font-semibold transition group-hover:text-brand">
                  {post.title}
                </h3>
                <Meta post={post} />
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
