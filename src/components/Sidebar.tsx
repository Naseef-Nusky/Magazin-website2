import { Link } from 'react-router-dom'
import { getPopularCategories, trendingPosts, postPath } from '../data/articles'
import { SectionTitle } from './SectionTitle'
import { CategoryBadge } from './CategoryBadge'

export function Sidebar() {
  const [featured, ...rest] = trendingPosts
  const popularCategories = getPopularCategories()

  return (
    <aside className="space-y-8">
      <div>
        <SectionTitle>Trending Post</SectionTitle>
        <Link to={postPath(featured.id)} className="group mb-4 block">
          <div className="relative mb-3 overflow-hidden">
            <img
              src={featured.image}
              alt=""
              className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            {featured.categories[0] && (
              <div className="absolute bottom-2 left-2">
                <CategoryBadge
                  label={featured.categories[0].label}
                  tone={featured.categories[0].tone}
                />
              </div>
            )}
          </div>
          <h3 className="font-display text-[15px] font-semibold leading-snug transition group-hover:text-brand">
            {featured.title}
          </h3>
          <time className="mt-1 block text-[11px] text-muted">{featured.date}</time>
        </Link>
        <ul className="divide-y divide-line">
          {rest.map((post) => (
            <li key={post.id} className="py-3">
              <Link to={postPath(post.id)} className="group flex gap-3">
                <img src={post.image} alt="" className="h-16 w-16 shrink-0 object-cover" />
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-semibold leading-snug transition group-hover:text-brand">
                    {post.title}
                  </h4>
                  <time className="mt-1 block text-[11px] text-muted">{post.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionTitle>Popular Categories</SectionTitle>
        <ul className="divide-y divide-line border border-line">
          {popularCategories.map((cat) => (
            <li key={cat.name}>
              <Link
                to={`/category/${cat.slug}`}
                className="flex items-center justify-between px-4 py-3 text-sm transition hover:bg-surface hover:text-brand"
              >
                <span className="font-medium">{cat.name}</span>
                <span className="grid h-6 min-w-6 place-items-center rounded-full bg-brand px-1.5 text-[11px] font-bold text-white">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
