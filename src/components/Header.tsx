import { Link, NavLink } from 'react-router-dom'
import { categories } from '../data/pages'
import { SocialIcons } from './SocialIcons'

export function Header() {
  return (
    <header>
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <SocialIcons size={13} />
          <p className="hidden text-[11px] tracking-wide sm:block">
            Your daily dose of culture, tech & lifestyle
          </p>
        </div>
      </div>

      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-5 sm:px-6">
          <Link to="/" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-brand">Mag</span>
            <span className="text-ink">Zone</span>
          </Link>
        </div>
      </div>

      <nav className="sticky top-0 z-40 border-b border-line bg-white shadow-sm" aria-label="Primary">
        <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6">
          <ul className="flex items-center gap-0 overflow-x-auto text-[13px] font-semibold text-ink">
            <li className="shrink-0 pr-1">
              <NavLink
                to="/"
                end
                aria-label="Home"
                className={({ isActive }) =>
                  `inline-flex p-3 transition ${isActive ? 'text-brand' : 'text-ink/70 hover:text-brand'}`
                }
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z" />
                </svg>
              </NavLink>
            </li>
            <li className="shrink-0">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `inline-block px-3 py-3.5 transition hover:text-brand ${isActive ? 'text-brand' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.slug} className="shrink-0">
                <NavLink
                  to={`/category/${category.slug}`}
                  className={({ isActive }) =>
                    `inline-block px-3 py-3.5 transition hover:text-brand ${
                      isActive ? 'text-brand' : ''
                    }`
                  }
                >
                  {category.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
