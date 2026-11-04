import { Link } from 'react-router-dom'
import { CategoryBadge } from '../components/CategoryBadge'
import { allPosts, postPath } from '../data/articles'
import type { Post } from '../data/articles'
import { categories } from '../data/pages'
import { getPostBody } from '../data/content'

function excerptFor(post: Post) {
  if (post.excerpt) return post.excerpt
  return getPostBody(post)[0]
}

export function BlogPage() {
  const posts = allPosts.filter((post) => post.image)
  const [lead, second, third, ...archive] = posts

  return (
    <main className="bg-white">
      <section className="border-b border-line bg-[#f7f5f2]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] text-brand uppercase">
                Mazgazin2 archive · Issue 12
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                All Stories
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Browse every Mazgazin2 feature across technology, fashion, travel, health, food,
                culture, and lifestyle — curated like a print magazine, built for the web.
              </p>
            </div>
            <div className="border border-line bg-white px-5 py-4 text-center">
              <p className="font-display text-3xl font-bold text-brand">{posts.length}</p>
              <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">
                Published stories
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              to="/blog"
              className="bg-brand px-3 py-1.5 text-[11px] font-bold tracking-wide text-white uppercase"
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="border border-line bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-ink uppercase transition hover:border-brand hover:text-brand"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {lead && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <Link
            to={postPath(lead.id)}
            className="group grid gap-6 overflow-hidden border border-line lg:grid-cols-12"
          >
            <div className="relative min-h-[320px] lg:col-span-7 lg:min-h-[480px]">
              <img
                src={lead.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-6 sm:px-8 lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.3em] text-brand uppercase">
                Cover story
              </p>
              <div className="mt-3">
                {lead.categories.map((c) => (
                  <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                ))}
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink transition group-hover:text-brand sm:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{excerptFor(lead)}</p>
              <p className="mt-5 text-[11px] tracking-wide text-muted uppercase">
                {lead.author ? `${lead.author} · ` : ''}
                {lead.date}
              </p>
              <span className="mt-6 text-xs font-bold tracking-[0.2em] text-brand uppercase">
                Read full story →
              </span>
            </div>
          </Link>
        </section>
      )}

      {(second || third) && (
        <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-6 sm:px-6 md:grid-cols-2">
          {[second, third].filter(Boolean).map((post) => (
            <Link
              key={post!.id}
              to={postPath(post!.id)}
              className="group border border-line bg-[#faf9f7]"
            >
              <div className="overflow-hidden">
                <img
                  src={post!.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <div className="mb-2">
                  {post!.categories.map((c) => (
                    <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug transition group-hover:text-brand">
                  {post!.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {excerptFor(post!)}
                </p>
                <p className="mt-3 text-[11px] text-muted uppercase">
                  {post!.author ? `${post!.author} · ` : ''}
                  {post!.date}
                </p>
              </div>
            </Link>
          ))}
        </section>
      )}

      <section className="border-t border-line bg-[#f7f5f2]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-muted uppercase">
                Complete archive
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">Every blog post</h2>
            </div>
            <p className="text-sm text-muted">{archive.length} more stories</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white">
                <Link to={postPath(post.id)} className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2">
                    {post.categories.map((c) => (
                      <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                    ))}
                  </div>
                  <Link to={postPath(post.id)}>
                    <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-brand">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {excerptFor(post)}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
                    <p className="text-[11px] text-muted uppercase">
                      {post.author ? `${post.author} · ` : ''}
                      {post.date}
                    </p>
                    <Link
                      to={postPath(post.id)}
                      className="text-[11px] font-bold tracking-wide text-brand uppercase"
                    >
                      Open →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
