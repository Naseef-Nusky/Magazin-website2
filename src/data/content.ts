import type { Post } from './articles'

const bodies: Record<string, string[]> = {
  'hero-main': [
    'Most wellness advice assumes you have endless mornings and a quiet kitchen. Real life looks different: late emails, short winters, and the guilt that follows a skipped workout.',
    'Over four weeks, Mazgazin2 followed readers who rebuilt health around energy—not punishment. They chose walks they enjoyed, cooked once for three nights, and protected sleep like a meeting that could not move.',
    'The blueprint is simple on purpose. Pick one movement habit, one food habit, and one recovery habit. Track how you feel on Fridays, not how perfect you were on Mondays.',
    'Thriving, in this telling, is less about transformation montages and more about systems that survive busy seasons. Small repeats beat dramatic resets every time.',
  ],
  'hero-side-1': [
    'Cities teach identity in motion: commute playlists, corner bakeries, and the unspoken rules of shared sidewalks. Urban culture is not only skyline photography—it is how people claim belonging in crowded places.',
    'Mazgazin2 visited three neighborhoods where street style, transit design, and night markets overlap. What looked chaotic from above felt intentional at street level.',
    'The takeaway for readers is practical. Notice the rituals that make your city feel like yours—then protect them. Culture thrives where people keep showing up.',
  ],
  'hero-side-2': [
    'Morning rituals rarely need incense and a perfect windowsill. The quiet power is sequence: water, light, and one task that is yours before the world starts asking.',
    'We profiled readers who keep rituals under twelve minutes. Some stretch. Some journal three lines. Some simply sit with coffee and no phone.',
    'Consistency mattered more than aesthetics. A ritual you can keep on travel days is more valuable than a ceremony that collapses under pressure.',
  ],
  'hero-side-3': [
    'Creator tools promise hours back, then quietly invent new busywork. The AI tools worth keeping are the ones that remove friction from drafting, tagging, and research—not the ones that demand a second workflow.',
    'Mazgazin2 tested assistants for outlines, transcript cleanup, and image sorting. The winners were boring in the best way: reliable, private enough, and easy to shut off.',
    'Use AI as a junior editor, not a replacement voice. Keep final judgment human, especially when the story involves real people.',
  ],
  'edit-1': [
    'Coastal escapes this season reward travelers who leave the checklist at home. Think ferry towns, cliff paths, and hotels that still feel like houses.',
    'Our editors shortlisted destinations where the ocean is the main event and crowds stay thin if you arrive midweek. Book shoulder season when possible.',
    'Pack light, walk more, eat where locals queue. The best coastal days are unscheduled by design.',
  ],
  'edit-2': [
    'Homes that feel alive share a pattern: soft light, touchable textures, and rooms that invite lingering. Design is less about matching sets and more about lived-in clarity.',
    'We spoke with interior stylists who prioritize gathering spaces over showpiece furniture. A slightly imperfect table beats a pristine room nobody uses.',
    'Start with one wall of daylight and one honest material—wood, linen, clay. Atmosphere compounds from there.',
  ],
  'edit-t1': [
    'Local journalism still does what platforms cannot: sit through council meetings, name the street correctly, and follow a story after the viral moment fades.',
    'Mazgazin2 argues for supporting reporters who know their communities. Subscriptions, memberships, and simply reading past the headline all matter.',
    'A healthy information diet includes voices close to home. Distant feeds rarely explain your neighborhood.',
  ],
  'edit-t2': [
    'Work podcasts used to chase hustle. The best new shows talk about boundaries, craft, and the politics of meetings instead.',
    'We highlight five series that treat listeners like adults—curious, tired, and allergic to empty motivation.',
    'Listen while commuting or cooking. The point is perspective, not another productivity stack.',
  ],
  'edit-t3': [
    'Slow fashion is leaving the manifesto stage and entering closets. People want fewer pieces that survive seasons, not endless micro-trends.',
    'Repair, resale, and thoughtful fabrics are becoming normal language at the till. Style still matters—waste just matters more.',
    'Build a wardrobe like a library: add deliberately, keep what earns its place, and loan what you can.',
  ],
  'edit-t4': [
    'Street food markets are rewriting nightlife without velvet ropes. Shared tables, late kitchens, and playlists that change by the hour.',
    'Cities featured here treat markets as social infrastructure—places to meet after work without needing a reservation strategy.',
    'Go hungry, share plates, and follow the longest queue that still looks joyful.',
  ],
  'recent-feature': [
    'Balance is rarely a perfect split of hours. For the professionals we interviewed, it looked more like a rhythm: intense focus blocks, deliberate downtime, and spaces that cue each mode.',
    'Offices, kitchens, and even phone lock screens became tools. When the environment matched the intention, willpower mattered less—and habits lasted longer.',
    'The takeaway is not another productivity system. It is permission to redesign the week around energy peaks, then protect the quieter hours that make those peaks possible.',
  ],
  'recent-1': [
    'Weekend markets can feel like travel without a suitcase: unfamiliar produce, live music, and strangers who become regulars.',
    'Mazgazin2 mapped markets that reward early arrival and slow wandering. Bring a tote, leave the rush.',
    'The souvenir is usually breakfast—and a better sense of your city’s appetite.',
  ],
  'recent-2': [
    'Indie bookshops are winning by being specific. Staff picks, reading nooks, and events that feel like living rooms with better lighting.',
    'Readers return for trust. Algorithms recommend; booksellers vouch.',
    'Buy one unexpected title next visit. That is how scenes stay funded.',
  ],
  'recent-3': [
    'Smart home gadgets earn a place only when they simplify. Lights that welcome you home, sensors that catch leaks, speakers that do not demand an app marathon.',
    'We kept devices that disappear into routine and discarded ones that created maintenance hobbies.',
    'Start with one room. Complexity should arrive last, if at all.',
  ],
  'recent-4': [
    'Trail running for beginners is less about pace and more about shoes, maps, and knowing when to walk.',
    'Our guide covers short loops, hydration basics, and how to enjoy hills without treating them like enemies.',
    'The goal is finishing with enough joy to return next weekend.',
  ],
  'recent-wide': [
    'Travel tips that last are rarely about secret beaches. They are about trains that arrive on time, bakeries that open early, and the courage to get slightly lost.',
    'Correspondents share small scenes from five cities—moments that taught more than any itinerary bullet.',
    'Collect stories, not just stamps. The best souvenirs are sentences you want to retell.',
  ],
  'grid-1': [
    'Storytelling on a budget starts with light and a lens you understand, not the newest body.',
    'Mazgazin2 recommends kits under a realistic threshold: one versatile prime, a reliable bag, and storage that will not fail mid-trip.',
    'Practice one setting until it becomes instinct. Gear is secondary to attention.',
  ],
  'grid-2': [
    'Garden-to-table cooking for weeknights means herbs you actually use and recipes that forgive a long day.',
    'We share plates built around one fresh element and pantry backups—so dinner still happens when the market run does not.',
    'Flavor first, perfection later. Hungry people are patient only until the pan is hot.',
  ],
  'grid-3': [
    'Travel fashion capsules succeed when every piece earns multiple outfits and survives a crumpled suitcase.',
    'Neutral bases, one statement layer, and shoes you can walk in for hours. That is the whole thesis.',
    'If it only works on a mood board, leave it at home.',
  ],
  'grid-4': [
    'Summer festivals shape culture by creating temporary cities of sound, fashion, and friendship.',
    'Beyond headliners, the story is in side stages, mutual aid tents, and the outfits that become next season’s references.',
    'Go for the music. Stay for the people who make the weekend feel like a chapter.',
  ],
  'trend-1': [
    'Remote collaboration works when teams agree on response times, camera norms, and what “done” means.',
    'New rules favor async writing over endless calls—and clearer ownership over vague group chats.',
    'Culture is the real software. Tools only amplify what you already reward.',
  ],
  'trend-2': [
    'Electric mobility is changing street noise, parking logic, and who feels safe after dark.',
    'Cities experimenting with e-bikes and quieter buses are rewriting the soundtrack of commuting.',
    'Watch the curb: that is where policy becomes personal.',
  ],
  'trend-3': [
    'Mindful eating without rigid rules means noticing hunger, pleasure, and pace—not policing every bite.',
    'Readers who dropped extreme frameworks reported more calm and fewer rebound spirals.',
    'Permission is a nutrition strategy too.',
  ],
  'trend-4': [
    'Architecture that invites the outside in uses thresholds carefully: courtyards, deep windows, and materials that age with weather.',
    'Homes and cafes featured here blur shelter and landscape without pretending nature is a wallpaper.',
    'Open a door. Let the season enter on purpose.',
  ],
  'trend-5': [
    'Short films are having a moment because attention is scarce and craft is portable.',
    'Festivals, phones, and streaming side channels give directors room to experiment without a two-hour commitment from audiences.',
    'Ten sharp minutes can outlast a forgettable feature.',
  ],
  'most-1': [
    'Better habits stick when they are small enough to survive bad days and visible enough to celebrate.',
    'This guide favors cues, environment design, and weekly reviews over motivational speeches.',
    'Build identity with evidence: I am someone who showed up today.',
  ],
  'most-2': [
    'Hidden museums reward travelers who leave the main square. Tiny collections, obsessive curators, and tickets that still feel intimate.',
    'We list stops where the gift shop is optional and the stories are not.',
    'Arrive curious. Leave with one object you cannot stop thinking about.',
  ],
  'most-3': [
    'Coffee culture beyond the latte is about roasting stories, water chemistry, and cafes that feel like third places.',
    'Order something unfamiliar. Talk to the person pulling shots. Learn one farm name.',
    'The cup is the headline; the community is the article.',
  ],
  'most-4': [
    'Founders often confuse brand voice with catchphrases. Voice is how you decide, apologize, and explain tradeoffs.',
    'Mazgazin2 outlines tests: would your team recognize a paragraph without the logo? Would a customer trust it on a hard day?',
    'Clarity beats cleverness when stakes are real.',
  ],
  'tech-extra-1': [
    'Wearables now track recovery, stress proxies, and sleep stages—not only steps that guilt you at midnight.',
    'Useful devices turn data into gentle nudges. Noise machines disguised as insights deserve a drawer.',
    'Read trends across weeks, not hours. Bodies are not dashboards.',
  ],
  'fashion-extra-1': [
    'Quiet luxury looks personal when cut and fabric do the talking—and when the wearer still feels like themselves.',
    'Skip logos; invest in shoulders, drape, and shoes that hold a room without shouting.',
    'Restraint is a style choice, not a personality erase.',
  ],
  'fashion-extra-2': [
    'Vintage markets influence new collections by proving which silhouettes survive decades of closets.',
    'Designers mine rails for proportion and patina; shoppers mine them for stories money cannot reprint.',
    'Touch the fabric. History has a texture.',
  ],
  'travel-extra-1': [
    'Slow trains turn distance into a feature: windows, conversations, and meals that are not packaged panic.',
    'Choose routes famous for scenery and schedules kind to daydreaming.',
    'Arrive later if you must. Arrive changed if you can.',
  ],
  'health-extra-1': [
    'Strength training without intimidation starts with simple lifts, clear coaching, and rooms that do not perform toughness.',
    'Beginners thrive on two full-body sessions and form that feels boringly correct.',
    'Strong is a practice, not an aesthetic deadline.',
  ],
  'food-extra-1': [
    'Neighborhood bakeries redefine comfort by smelling like butter at 7 a.m. and knowing regulars by order.',
    'Support the ones that still laminate dough by hand and open when the street is half awake.',
    'Buy the loaf you will finish. Romance follows crumbs.',
  ],
  'culture-extra-1': [
    'Community theaters keep local stories alive when big stages chase touring brands.',
    'Volunteer ushers, borrowed sets, and playwrights who write about the next street over—that is cultural infrastructure.',
    'Clap loudly. Scenes survive on witnesses.',
  ],
  'lifestyle-extra-1': [
    'Small apartments feel calm when storage is honest and surfaces stay clear enough to think.',
    'One good lamp, one plant that forgives you, and a ritual for resetting the table each night.',
    'Space is a feeling you design, not only a floor plan you rent.',
  ],
  'lifestyle-extra-2': [
    'Digital Sundays work when they are scheduled like appointments: phones in a drawer, walks outside, and messages that can wait until Monday.',
    'Unplugging is not purity. It is maintenance for attention.',
    'You will miss nothing that matters. You may notice everything that does.',
  ],
  'fashion-extra-3': [
    'Soft power dressing uses precise tailoring to signal care without armor. Think ease in the shoulder and confidence in the hem.',
    'Alterations are part of the outfit budget. Fit is the loudest quiet flex.',
    'Wear clothes that help you enter rooms as yourself.',
  ],
  'fashion-extra-4': [
    'Accessories can carry an outfit when the base is simple: a bag with structure, jewelry with weight, a scarf with opinion.',
    'Choose one hero and let everything else support it.',
    'Too many statements become noise. One clear note becomes style.',
  ],
  'fashion-extra-5': [
    'Monochrome layers for city evenings create drama through texture—matte against shine, soft against sharp.',
    'Black is classic; deep green and ink blue tell newer stories after dark.',
    'Walk under streetlights and check the silhouette. Night is the real fitting room.',
  ],
  'health-extra-2': [
    'Sleep hygiene that sticks is environmental: cooler rooms, dimmer hours, and a cutoff for stimulating screens.',
    'Supplements are optional. Consistency is not.',
    'Protect the night like it is the foundation of tomorrow’s work—because it is.',
  ],
  'tech-extra-2': [
    'Open-source apps worth switching to respect your files, your offline hours, and your right to leave.',
    'We highlight tools for notes, photos, and writing that do not trap your archive in a single vendor mood.',
    'Own the workflow. Rent the servers only when you must.',
  ],
  'travel-extra-2': [
    'City breaks built around one neighborhood feel richer than checklist tourism. Pick a base, walk spokes, eat repeatedly at the place that remembers you.',
    'You will miss monuments. You will gain a temporary local life.',
    'That trade is the point of a short escape.',
  ],
}

export function getPostBody(post: Post): string[] {
  return (
    bodies[post.id] ?? [
      `${post.title} is a Mazgazin2 feature written for readers who want clarity, context, and a point of view.`,
      `Explore the ideas behind the headline, then continue through related stories in our archive.`,
    ]
  )
}
