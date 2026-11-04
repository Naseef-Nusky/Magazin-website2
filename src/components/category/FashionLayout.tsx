import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function FashionLayout({ category, posts }: Props) {
  const feature = posts[0]
  const rest = posts.slice(1)
  const runway = posts.filter((p) => p.image).slice(0, 6)
  const [runwayIndex, setRunwayIndex] = useState(0)

  useEffect(() => {
    if (runway.length < 2) return
    const timer = window.setInterval(() => {
      setRunwayIndex((i) => (i + 1) % runway.length)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [runway.length])

  if (!posts.length || !feature) return <EmptyState />

  const list = rest.slice(0, 4)
  const gallery = [...list, ...rest.slice(4)].slice(0, 4)

  return (
    <main className="bg-[#fbf9f6] text-ink">
      <section className="border-b border-ink/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-4 py-8 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.4em] text-brand uppercase">
              {category.eyebrow} · Vol. 08
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold tracking-tight sm:text-7xl">
              {category.label}
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{category.tagline}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-0 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-8">
        <a
          href={`#${feature.id}`}
          className="group relative block min-h-[520px] overflow-hidden lg:col-span-7"
        >
          <img
            src={feature.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="mb-2 text-[10px] font-bold tracking-[0.35em] text-white/70 uppercase">
              Cover story
            </p>
            <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {feature.title}
            </h2>
            <Meta post={feature} />
          </div>
        </a>

        <div className="flex flex-col justify-between border border-ink/10 bg-white p-6 lg:col-span-5 lg:p-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-brand uppercase">
              This season
            </p>
            <ul className="mt-6 divide-y divide-ink/10">
              {list.map((post, i) => (
                <li key={post.id}>
                  <a href={`#${post.id}`} className="group flex gap-4 py-4">
                    <span className="font-display text-2xl font-bold text-ink/20 transition group-hover:text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
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
          <Link
            to="/category/lifestyle"
            className="mt-6 inline-flex items-center gap-2 border-t border-ink/10 pt-5 text-xs font-bold tracking-[0.2em] text-ink uppercase transition hover:text-brand"
          >
            Also browse Lifestyle →
          </Link>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-12">
          <div className="flex flex-col justify-center px-4 py-10 sm:px-6 lg:col-span-4 lg:py-16">
            <p className="text-[11px] font-bold tracking-[0.35em] text-brand uppercase">
              Runway slider
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
              Looks moving through the season
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Auto-playing edit — open a look to stay in Fashion stories.
            </p>
            <div className="mt-6 flex gap-2">
              {runway.map((post, i) => (
                <button
                  key={post.id}
                  type="button"
                  aria-label={`Show look ${i + 1}`}
                  onClick={() => setRunwayIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === runwayIndex ? 'w-8 bg-brand' : 'w-1.5 bg-white/35 hover:bg-white'
                  }`}
                />
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                aria-label="Previous look"
                onClick={() =>
                  setRunwayIndex((i) => (i - 1 + runway.length) % Math.max(runway.length, 1))
                }
                className="grid h-9 w-9 place-items-center border border-white/25 transition hover:border-brand hover:text-brand"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next look"
                onClick={() => setRunwayIndex((i) => (i + 1) % Math.max(runway.length, 1))}
                className="grid h-9 w-9 place-items-center border border-white/25 transition hover:border-brand hover:text-brand"
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden lg:col-span-8">
            {runway.map((post, i) => (
              <a
                key={post.id}
                href={`#${post.id}`}
                className={`absolute inset-0 block transition-opacity duration-700 ${
                  i === runwayIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <img
                  src={post.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <Badges post={post} />
                  <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                    {post.title}
                  </h3>
                  <Meta post={post} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-muted uppercase">
                Closet notes
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold">More from Fashion</h2>
            </div>
            <Link
              to="/category/travel"
              className="hidden text-xs font-bold tracking-[0.2em] text-brand uppercase transition hover:text-brand-dark sm:inline"
            >
              Pack light with Travel →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((post, i) => (
              <a
                key={post.id}
                href={`#${post.id}`}
                className={`group block ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
              >
                {post.image && (
                  <div className="mb-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <Badges post={post} />
                <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-brand">
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
