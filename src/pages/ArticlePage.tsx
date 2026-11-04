import { Link, Navigate, useParams } from 'react-router-dom'
import { CategoryBadge } from '../components/CategoryBadge'
import { getPostById, getRelatedPosts, postPath } from '../data/articles'
import { getPostBody } from '../data/content'
import { categories } from '../data/pages'

export function ArticlePage() {
  const { id = '' } = useParams()
  const post = getPostById(id)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const body = getPostBody(post)
  const related = getRelatedPosts(post)
  const category = categories.find((c) =>
    post.categories.some((pc) =>
      c.aliases.some((alias) => alias.toLowerCase() === pc.label.toLowerCase()),
    ),
  )

  return (
    <main className="bg-white">
      <article>
        <header className="border-b border-line bg-[#f7f5f2]">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.3em] text-muted uppercase">
              <Link to="/blog" className="hover:text-brand">
                All Blogs
              </Link>
              {category ? (
                <>
                  {' · '}
                  <Link to={`/category/${category.slug}`} className="hover:text-brand">
                    {category.label}
                  </Link>
                </>
              ) : null}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.categories.map((c) => (
                <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
              ))}
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-[12px] tracking-wide text-muted uppercase">
              {post.author ? `By ${post.author} · ` : ''}
              {post.date} · {Math.max(4, body.length + 2)} min read
            </p>
          </div>
        </header>

        {post.image ? (
          <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
            <img
              src={post.image}
              alt=""
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        ) : null}

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          {post.excerpt ? (
            <p className="border-l-4 border-brand pl-5 font-display text-xl leading-relaxed text-ink/90">
              {post.excerpt}
            </p>
          ) : null}

          <div className="mt-8 space-y-6 text-base leading-8 text-[#333]">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-line py-6">
            <p className="text-sm text-muted">
              Filed under{' '}
              <span className="font-semibold text-ink">
                {post.categories.map((c) => c.label).join(', ')}
              </span>
            </p>
            <Link
              to="/blog"
              className="text-xs font-bold tracking-[0.2em] text-brand uppercase hover:text-brand-dark"
            >
              Back to all blogs →
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-[#f7f5f2]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h2 className="font-display text-2xl font-semibold text-ink">Related stories</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.id} to={postPath(item.id)} className="group block bg-white">
                  <img
                    src={item.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] text-muted uppercase">
                      {item.author ? `${item.author} · ` : ''}
                      {item.date}
                    </p>
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
