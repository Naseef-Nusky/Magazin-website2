import {
  recentFeature,
  recentGrid,
  recentList,
  recentWide,
} from '../data/articles'
import { CategoryBadge } from './CategoryBadge'
import { SectionTitle } from './SectionTitle'

export function RecentPosts() {
  return (
    <div>
      <SectionTitle>Recent Posts</SectionTitle>

      <a href={`#${recentFeature.id}`} className="group mb-6 block">
        <div className="mb-4 overflow-hidden">
          <img
            src={recentFeature.image}
            alt=""
            className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {recentFeature.categories.map((c) => (
            <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
          ))}
        </div>
        <h3 className="font-display text-2xl font-semibold leading-snug transition group-hover:text-brand">
          {recentFeature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{recentFeature.excerpt}</p>
        <p className="mt-2 text-[11px] text-muted">
          {recentFeature.author} · {recentFeature.date}
        </p>
      </a>

      <ul className="mb-8 grid gap-4 sm:grid-cols-2">
        {recentList.map((post) => (
          <li key={post.id}>
            <a href={`#${post.id}`} className="group flex gap-3">
              <img src={post.image} alt="" className="h-20 w-24 shrink-0 object-cover" />
              <div className="min-w-0">
                <div className="mb-1">
                  {post.categories.map((c) => (
                    <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                  ))}
                </div>
                <h4 className="font-display text-sm font-semibold leading-snug transition group-hover:text-brand">
                  {post.title}
                </h4>
                <time className="mt-1 block text-[11px] text-muted">{post.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a href={`#${recentWide.id}`} className="group relative mb-8 block min-h-[280px] overflow-hidden">
        <img
          src={recentWide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {recentWide.categories.map((c) => (
              <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
            ))}
          </div>
          <h3 className="font-display text-xl font-semibold text-white transition group-hover:text-brand sm:text-2xl">
            {recentWide.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-white/75">{recentWide.excerpt}</p>
        </div>
      </a>

      <div className="grid gap-5 sm:grid-cols-2">
        {recentGrid.map((post) => (
          <article key={post.id}>
            <a href={`#${post.id}`} className="group block">
              <div className="mb-3 overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mb-1.5">
                {post.categories.map((c) => (
                  <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                ))}
              </div>
              <h3 className="font-display text-[15px] font-semibold leading-snug transition group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-1.5 text-[11px] text-muted">
                {post.author} · {post.date}
              </p>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
