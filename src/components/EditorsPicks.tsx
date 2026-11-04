import { editorsPicks, editorsTextList } from '../data/articles'
import { CategoryBadge } from './CategoryBadge'
import { SectionTitle } from './SectionTitle'

export function EditorsPicks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
      <SectionTitle>Editor's Picks</SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {editorsPicks.map((post) => (
          <article key={post.id}>
            <a href={`#${post.id}`} className="group block">
              <div className="mb-3 overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mb-2">
                {post.categories.map((c) => (
                  <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                ))}
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <p className="mt-2 text-[11px] text-muted">
                {post.author} · {post.date}
              </p>
            </a>
          </article>
        ))}

        <div className="flex flex-col">
          <ul className="divide-y divide-line border-t border-line">
            {editorsTextList.map((post) => (
              <li key={post.id} className="py-4">
                <a href={`#${post.id}`} className="group flex gap-3">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      className="h-16 w-16 shrink-0 object-cover"
                    />
                  ) : null}
                  <div className="min-w-0">
                    <div className="mb-1.5">
                      {post.categories.map((c) => (
                        <CategoryBadge key={c.label} label={c.label} tone={c.tone} />
                      ))}
                    </div>
                    <h3 className="font-display text-[15px] font-semibold leading-snug transition group-hover:text-brand">
                      {post.title}
                    </h3>
                    <time className="mt-1.5 block text-[11px] text-muted">{post.date}</time>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
