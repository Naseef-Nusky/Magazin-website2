import type { Post } from './articles'

/** Optional custom longform bodies keyed by post id */
const customBodies: Record<string, string[]> = {
  'hero-main': [
    'Wellness culture often promises transformation overnight. Mazgazin2 spent a month with trainers, clinicians, and everyday readers who are rewriting that script—prioritizing consistency over intensity.',
    'The clearest pattern we found was simple: people who thrived treated health like a weekly design problem. They blocked recovery days, cooked in batches, and tracked energy instead of only calories or steps.',
    'That shift changes more than routines. It changes the story you tell yourself about progress. Small, repeatable wins compound faster than dramatic resets that collapse by Friday.',
    'In this feature, we map a practical blueprint—movement, sleep, food, and social support—so thriving feels achievable in a crowded calendar, not reserved for people with unlimited time.',
  ],
  'recent-feature': [
    'Balance is rarely a perfect split of hours. For the professionals we interviewed, it looked more like a rhythm: intense focus blocks, deliberate downtime, and spaces that cue each mode.',
    'Offices, kitchens, and even phone lock screens became tools. When the environment matched the intention, willpower mattered less—and habits lasted longer.',
    'The takeaway is not another productivity system. It is permission to redesign the week around energy peaks, then protect the quieter hours that make those peaks possible.',
  ],
}

function fallbackBody(post: Post): string[] {
  const topic = post.categories[0]?.label.toLowerCase() ?? 'culture'
  const lead =
    post.excerpt ??
    `${post.title} sits at the center of Mazgazin2’s ${topic} coverage this season—reported with an eye for detail and written for readers who want clarity, not noise.`

  return [
    lead,
    `Our editors followed the threads behind the headline: the people shaping ${topic}, the places where ideas start, and the practical choices readers can make after the story ends.`,
    `What emerges is less a trend report and more a field guide. Mazgazin2 looks for signals that last—habits, designs, routes, and cultural moments with staying power beyond a single news cycle.`,
    `Read on for the scenes, quotes, and takeaways that define this piece. Then explore more ${topic} stories in our archive to keep the conversation going.`,
    post.author
      ? `${post.author} reports for Mazgazin2 with a focus on ${topic}, connecting on-the-ground detail to the bigger picture for our readers.`
      : `This Mazgazin2 dispatch was produced by our ${topic} desk for readers who want substance with style.`,
  ]
}

export function getPostBody(post: Post): string[] {
  return customBodies[post.id] ?? fallbackBody(post)
}
