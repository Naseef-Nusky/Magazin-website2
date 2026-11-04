import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { categories } from '../data/pages'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-4 py-3 text-sm font-semibold transition hover:text-brand lg:inline-block lg:px-3 lg:py-3.5 ${
    isActive ? 'text-brand' : 'text-ink'
  }`

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-brand">Maz</span>
          <span className="text-ink">gazin2</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <ul className="flex items-center text-[13px] font-semibold text-ink">
            <li>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={linkClass}>
                All Blogs
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <NavLink to={`/category/${category.slug}`} className={linkClass}>
                  {category.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition hover:border-brand hover:text-brand lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          className="border-t border-line bg-white lg:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto max-h-[calc(100svh-4.5rem)] max-w-7xl overflow-y-auto px-2 py-2">
            <li>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={linkClass}>
                All Blogs
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <NavLink to={`/category/${category.slug}`} className={linkClass}>
                  {category.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
