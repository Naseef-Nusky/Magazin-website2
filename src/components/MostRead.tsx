import { Link } from 'react-router-dom'
import { mostRead , postPath} from '../data/articles'
import { SectionTitle } from './SectionTitle'

export function MostRead() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <SectionTitle>Most Read Post</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {mostRead.map((post) => (
          <article key={post.id}>
            <Link to={postPath(post.id)} className="group block">
              <div className="mb-3 overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-[15px] font-semibold leading-snug transition group-hover:text-brand">
                {post.title}
              </h3>
              <time className="mt-1.5 block text-[11px] text-muted">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
