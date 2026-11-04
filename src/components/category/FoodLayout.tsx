import { Link } from 'react-router-dom'
import { postPath } from '../../data/articles'
import type { Post } from '../../data/articles'
import type { CategoryMeta } from '../../data/pages'
import { Badges, EmptyState, Meta } from './shared'

type Props = { category: CategoryMeta; posts: Post[] }

export function FoodLayout({ category, posts }: Props) {
  if (!posts.length) return <EmptyState />
  const [feature, ...rest] = posts

  return (
    <main className="bg-[#fff8f1]">
      <section className="border-b border-[#f0e0d0] bg-[#fff1e4]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-[11px] font-bold tracking-[0.3em] text-tag-orange uppercase">
            {category.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            {category.label}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">{category.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Link to={postPath(feature.id)} className="group grid gap-6 lg:grid-cols-12 lg:items-end">
          <img
            src={feature.image}
            alt=""
            className="aspect-[16/11] w-full object-cover lg:col-span-8"
          />
          <div className="lg:col-span-4 lg:pb-2">
            <Badges post={feature} />
            <h2 className="font-display text-3xl font-semibold leading-tight transition group-hover:text-brand">
              {feature.title}
            </h2>
            {feature.excerpt && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.excerpt}</p>
            )}
            <Meta post={feature} />
          </div>
        </Link>

        <div className="mt-12 space-y-6">
          {rest.map((post) => (
            <Link
              key={post.id}
              to={postPath(post.id)}
              className="group grid gap-5 border border-[#f0e0d0] bg-white p-3 sm:grid-cols-12 sm:p-4"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/11] w-full object-cover sm:col-span-4 sm:aspect-auto sm:h-full"
                />
              )}
              <div className="flex flex-col justify-center sm:col-span-8 sm:pr-4">
                <Badges post={post} />
                <h3 className="font-display text-xl font-semibold transition group-hover:text-brand">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                )}
                <Meta post={post} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
