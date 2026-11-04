import { Link } from 'react-router-dom'
import { getPopularCategories, trendingPosts, postPath } from '../data/articles'
import { SectionTitle } from './SectionTitle'
import { CategoryBadge } from './CategoryBadge'

const followNetworks = [
  { name: 'Facebook', count: '12.4k', color: 'bg-[#1877f2]' },
  { name: 'X / Twitter', count: '8.1k', color: 'bg-[#111]' },
  { name: 'Instagram', count: '19.6k', color: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
  { name: 'YouTube', count: '6.2k', color: 'bg-[#ff0000]' },
]

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
        <SectionTitle>Follow Us</SectionTitle>
        <div className="grid grid-cols-2 gap-2">
          {followNetworks.map((net) => (
            <a
              key={net.name}
              href="#"
              className={`${net.color} flex flex-col items-start justify-center px-3 py-3 text-white transition hover:opacity-90`}
            >
              <span className="text-xs font-bold">{net.name}</span>
              <span className="text-[10px] opacity-80">{net.count} followers</span>
            </a>
          ))}
        </div>
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
