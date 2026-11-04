import { footerPopular, footerTrending } from '../data/articles'

function FooterPostList({
  title,
  posts,
}: {
  title: string
  posts: typeof footerTrending
}) {
  return (
    <div>
      <h3 className="mb-4 border-b border-white/10 pb-3 text-sm font-bold tracking-wide text-white uppercase">
        {title}
      </h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`#${post.id}`} className="group flex gap-3">
              <img src={post.image} alt="" className="h-14 w-14 shrink-0 object-cover" />
              <div className="min-w-0">
                <h4 className="text-sm leading-snug text-white/90 transition group-hover:text-brand">
                  {post.title}
                </h4>
                <time className="mt-1 block text-[11px] text-white/45">{post.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-4 bg-footer text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
        <FooterPostList title="Trending Post" posts={footerTrending} />
        <FooterPostList title="Popular Post" posts={footerPopular} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-white/45 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} MagZone. All rights reserved.</p>
          <p>Culture · Tech · Lifestyle</p>
        </div>
      </div>
    </footer>
  )
}
