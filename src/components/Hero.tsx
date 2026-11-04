import { Link } from 'react-router-dom'
import { heroSide, postPath } from '../data/articles'
import type { Post } from '../data/articles'
import { CategoryBadge } from './CategoryBadge'
import { FeaturedSlider } from './FeaturedSlider'

function OverlayCard({ post }: { post: Post }) {
  return (
    <Link
      to={postPath(post.id)}
      className="group relative block h-full min-h-[180px] overflow-hidden"
    >
      <img
        src={post.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {post.categories.map((c) => (
            <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
          ))}
        </div>
        <h3 className="font-display text-base font-semibold leading-snug text-white transition group-hover:text-brand sm:text-lg">
          {post.title}
        </h3>
      </div>
    </Link>
  )
}

export function Hero() {
  const [top, left, right] = heroSide

  return (
    <section className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <FeaturedSlider />
      </div>

      <div className="grid gap-3 lg:col-span-5 lg:min-h-[480px] lg:grid-rows-2">
        <OverlayCard post={top} />
        <div className="grid grid-cols-2 gap-3">
          <OverlayCard post={left} />
          <OverlayCard post={right} />
        </div>
      </div>
    </section>
  )
}
