export const categories = [
  {
    label: 'Technology',
    slug: 'technology',
    aliases: ['Technology', 'Tech'],
    eyebrow: 'Innovation desk',
    tagline: 'Gadgets, software, and the systems reshaping how we live and work.',
  },
  {
    label: 'Fashion',
    slug: 'fashion',
    aliases: ['Fashion'],
    eyebrow: 'Style edit',
    tagline: 'Runway signals, quiet luxury, and wardrobe ideas with staying power.',
  },
  {
    label: 'Travel',
    slug: 'travel',
    aliases: ['Travel'],
    eyebrow: 'Destinations',
    tagline: 'Routes, cities, and escapes that reward curiosity over checklists.',
  },
  {
    label: 'Health',
    slug: 'health',
    aliases: ['Health'],
    eyebrow: 'Wellness',
    tagline: 'Practical guides for movement, recovery, and everyday balance.',
  },
  {
    label: 'Food',
    slug: 'food',
    aliases: ['Food'],
    eyebrow: 'Kitchen & table',
    tagline: 'Markets, bakeries, and the meals that define a neighborhood.',
  },
  {
    label: 'Culture',
    slug: 'culture',
    aliases: ['Culture'],
    eyebrow: 'Arts & ideas',
    tagline: 'Music, film, books, and the scenes keeping local stories alive.',
  },
  {
    label: 'Lifestyle',
    slug: 'lifestyle',
    aliases: ['Lifestyle'],
    eyebrow: 'Living well',
    tagline: 'Rituals, homes, and habits that make ordinary days feel better.',
  },
] as const

export type CategorySlug = (typeof categories)[number]['slug']
export type CategoryMeta = (typeof categories)[number]

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug)
}
