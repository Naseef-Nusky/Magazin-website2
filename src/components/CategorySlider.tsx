import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { categorySlides } from '../data/sliders'
import { SectionTitle } from './SectionTitle'

export function CategorySlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    let offset = 0

    const tick = () => {
      if (!paused) {
        offset += 0.45
        const loopWidth = track.scrollWidth / 2
        if (offset >= loopWidth) offset = 0
        track.style.transform = `translateX(-${offset}px)`
      }
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [paused])

  const slides = [...categorySlides, ...categorySlides]

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track?.parentElement) return
    track.parentElement.scrollBy({ left: direction * 280, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="mb-2 flex items-center justify-between gap-4">
        <SectionTitle>Explore Categories</SectionTitle>
        <div className="mb-5 flex gap-2">
          <button
            type="button"
            aria-label="Scroll categories left"
            onClick={() => scrollByCard(-1)}
            className="grid h-8 w-8 place-items-center border border-line text-ink transition hover:border-brand hover:text-brand"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Scroll categories right"
            onClick={() => scrollByCard(1)}
            className="grid h-8 w-8 place-items-center border border-line text-ink transition hover:border-brand hover:text-brand"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
          {slides.map((slide, i) => (
            <Link
              key={`${slide.label}-${i}`}
              to={slide.to}
              className="group relative block h-44 w-64 shrink-0 overflow-hidden sm:h-52 sm:w-72"
            >
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] font-bold tracking-[0.25em] text-white/70 uppercase">
                  Category
                </p>
                <h3 className="font-display text-xl font-semibold text-white transition group-hover:text-brand">
                  {slide.label}
                </h3>
                <p className="mt-1 text-xs text-white/75">View stories →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
