import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/sliders'
import { CategoryBadge } from './CategoryBadge'

export function FeaturedSlider() {
  const [index, setIndex] = useState(0)
  const total = heroSlides.length

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [total])

  const goTo = (next: number) => {
    setIndex((next + total) % total)
  }

  const slide = heroSlides[index]

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden lg:min-h-[480px]">
      {heroSlides.map((item, i) => (
        <Link
          key={item.id}
          to={item.to}
          className={`absolute inset-0 block transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
        >
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <div className="mb-2">
              <CategoryBadge label={item.category} tone={item.tone} />
            </div>
            <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-3 text-xs font-semibold tracking-wide text-white/80 uppercase">
              Open {item.category} →
            </p>
          </div>
        </Link>
      ))}

      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="grid h-9 w-9 place-items-center bg-black/45 text-white transition hover:bg-brand"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="grid h-9 w-9 place-items-center bg-black/45 text-white transition hover:bg-brand"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-4 left-5 z-10 flex gap-2 sm:left-7">
        {heroSlides.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to ${item.category} slide`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-brand' : 'w-1.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      <span className="sr-only">
        Slide {index + 1} of {total}: {slide.title}
      </span>
    </div>
  )
}
