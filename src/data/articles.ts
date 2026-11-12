import { categories, getCategoryBySlug } from './pages'

export type Tone = 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'teal'

export type Post = {
  id: string
  title: string
  excerpt?: string
  date: string
  author?: string
  image: string
  categories: { label: string; tone: Tone }[]
  seoTitle?: string
  metaDescription?: string
}

export const newsPosts: Post[] = [
  {
    id: 'news-forever-chemicals',
    title: 'England Records Progress in Reducing Persistent Chemicals in Its Rivers',
    excerpt:
      'Environment Agency figures show falling levels of PFOS and PFOA in English rivers, although wider PFAS contamination remains a concern.',
    date: 'November 12, 2026',
    image: '/images/posts/news-forever-chemicals.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Forever Chemicals in England\'s Rivers Fall as Environmental Action Continues',
    metaDescription:
      'New Environment Agency figures show falling levels of PFOS and PFOA in English rivers, although wider PFAS contamination remains a concern.',
  },
  {
    id: 'news-caine-prize',
    title: 'Literary Award Reaffirms Its Winner Following Investigation Into AI Allegations',
    excerpt:
      'Zimbabwean author Simbarashe Steyn Kundizeza retains the Caine Prize after an investigation finds no evidence that his winning story was generated using AI.',
    date: 'November 11, 2026',
    image: '/images/posts/news-caine-prize.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Caine Prize Confirms 2026 Winner After Artificial Intelligence Investigation',
    metaDescription:
      'Zimbabwean author Simbarashe Steyn Kundizeza retains the Caine Prize after an investigation finds no evidence that his winning story was generated using AI.',
  },
  {
    id: 'news-reform-senedd',
    title: 'Political Dispute Triggers Reform UK Protest at the Welsh Parliament',
    excerpt:
      'Reform UK members have protested at the Senedd after a representative was prevented from speaking until he apologised for controversial remarks.',
    date: 'November 11, 2026',
    image: '/images/posts/news-reform-senedd.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Reform UK Boycotts Welsh Parliament Following Speaking Restriction Dispute',
    metaDescription:
      'Reform UK members have protested at the Senedd after a representative was prevented from speaking until he apologised for controversial remarks.',
  },
  {
    id: 'news-entertainment-safeguarding',
    title: 'UK Entertainment Industry Faces Pressure to Improve Workplace Safeguarding',
    excerpt:
      'Ministers are considering stronger legal requirements for entertainment companies to address workplace misconduct and improve protection for workers.',
    date: 'November 12, 2026',
    image: '/images/posts/news-entertainment-safeguarding.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'UK Government Considers Stronger Safeguarding Rules for Entertainment Industry',
    metaDescription:
      'Ministers are considering stronger legal requirements for entertainment companies to address workplace misconduct and improve protection for women and young workers.',
  },
  {
    id: 'news-school-threats',
    title: 'Schools Across the UK Targeted by Widespread Hoax Threatening Emails',
    excerpt:
      'Around 1,000 Scottish schools received threatening emails as police investigate a wider wave of messages sent to educational institutions.',
    date: 'November 11, 2026',
    image: '/images/posts/news-school-threats.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Police Investigate Hoax Bomb Threat Emails Sent to Schools Across the UK',
    metaDescription:
      'Around 1,000 Scottish schools received threatening emails as police investigate a wider wave of messages sent to educational institutions across the UK.',
  },
  {
    id: 'news-funeral-appeal',
    title: 'Former Funeral Director Seeks to Challenge 20-Year Sentence in Hull Scandal',
    excerpt:
      'Robert Bush, convicted of offences connected to Legacy Independent Funeral Directors, has applied for permission to appeal his prison sentence.',
    date: 'November 11, 2026',
    image: '/images/posts/news-funeral-appeal.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Former Hull Funeral Director Seeks Appeal Against 20-Year Prison Sentence',
    metaDescription:
      'Robert Bush, convicted of offences connected to Legacy Independent Funeral Directors, has applied for permission to appeal his prison sentence.',
  },
  {
    id: 'news-krakow-shooting',
    title: 'Scottish Music Community Mourns DJ Killed in Krakow Shooting',
    excerpt:
      'James Campbell, a 32-year-old DJ from Prestwick, was named among six people killed in a shooting in Krakow, Poland.',
    date: 'November 11, 2026',
    image: '/images/posts/news-krakow-shooting.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Scottish DJ James Campbell Among Six People Killed in Krakow Shooting',
    metaDescription:
      'James Campbell, a 32-year-old DJ from Prestwick, was named among six people killed in a shooting in Krakow, Poland.',
  },
  {
    id: 'news-wales-food',
    title: 'Wales Looks to Local Farming as Food Security Concerns Grow',
    excerpt:
      'Campaigners are calling for greater fruit and vegetable production in Wales to reduce reliance on imported food and strengthen supply chain resilience.',
    date: 'November 12, 2026',
    image: '/images/posts/news-wales-food.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Wales Faces Food Security Concerns as Growers Call for More Local Production',
    metaDescription:
      'Campaigners are calling for greater fruit and vegetable production in Wales to reduce reliance on imported food and strengthen supply chain resilience.',
  },
  {
    id: 'news-sunbed-claims',
    title: 'Sunbed Businesses Face Stronger Advertising Scrutiny in the UK',
    excerpt:
      'The UK advertising watchdog has reminded tanning businesses that they must not promote sunbeds using misleading health, medical or safety claims.',
    date: 'November 12, 2026',
    image: '/images/posts/news-sunbed-claims.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'UK Advertising Watchdog Issues New Rules for Sunbed Health Claims',
    metaDescription:
      'The UK advertising watchdog has reminded tanning businesses that they must not promote sunbeds using misleading health, medical or safety claims.',
  },
  {
    id: 'news-cold-flu-medicines',
    title: 'Why Shoppers Should Compare Ingredients Before Buying Cold and Flu Medicines',
    excerpt:
      'A comparison of UK cold and flu products highlights how supermarket alternatives can offer similar ingredients at lower prices.',
    date: 'November 12, 2026',
    image: '/images/posts/news-cold-flu-medicines.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Are Branded Cold and Flu Medicines Worth the Extra Money?',
    metaDescription:
      'A comparison of UK cold and flu products highlights how supermarket alternatives can offer similar ingredients at lower prices.',
  },
  {
    id: 'news-dublin-summit',
    title: 'Dublin Summit Places Europe\'s Security and Artificial Intelligence in Focus',
    excerpt:
      'European leaders meet in Dublin to discuss Ukraine, AI, economic competitiveness and emerging hybrid security threats.',
    date: 'November 12, 2026',
    image: '/images/posts/news-dublin-summit.jpg',
    categories: [{ label: 'News', tone: 'red' }],
    seoTitle: 'Ukraine and Artificial Intelligence Dominate European Leaders\' Dublin Summit',
    metaDescription:
      'European leaders meet in Dublin to discuss Ukraine, AI, economic competitiveness and emerging hybrid security threats.',
  },
]

export const technologyPosts: Post[] = [
  {
    id: 'tech-ai-listening',
    title: 'What Artificial Intelligence Can Teach Us About Better Communication',
    excerpt:
      'AI chatbots are changing digital communication and offering new insights into patience, emotional support and effective human listening.',
    date: 'November 12, 2026',
    image: '/images/posts/tech-ai-listening.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
    seoTitle: 'Can Artificial Intelligence Teach People to Become Better Listeners?',
    metaDescription:
      'AI chatbots are changing digital communication and offering new insights into patience, emotional support and effective human listening.',
  },
  {
    id: 'tech-london-datacentre',
    title: 'London\'s Digital Infrastructure Boom Brings New Environmental Challenges',
    excerpt:
      'Growing demand for AI and cloud computing is driving data centre development around London, raising questions about electricity, water and sustainability.',
    date: 'November 12, 2026',
    image: '/images/posts/tech-london-datacentre.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
    seoTitle: 'London\'s Expanding Data Centre Industry Faces Energy and Environmental Challenges',
    metaDescription:
      'Growing demand for AI and cloud computing is driving data centre development around London, raising questions about electricity, water and sustainability.',
  },
  {
    id: 'tech-gta-road-safety',
    title: 'How Grand Theft Auto V Is Becoming a Tool for Scientific Research',
    excerpt:
      'Scientists have adapted Grand Theft Auto V into a virtual cycling simulator to investigate traffic hazards and test experimental cyclist safety technology.',
    date: 'November 12, 2026',
    image: '/images/posts/tech-gta-road-safety.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
    seoTitle: 'How Researchers Are Using Grand Theft Auto V to Improve Road Safety Research',
    metaDescription:
      'Scientists have adapted Grand Theft Auto V into a virtual cycling simulator to investigate traffic hazards and test experimental cyclist safety technology.',
  },
  {
    id: 'tech-europe-ai',
    title: 'Europe\'s Race to Build a Stronger Artificial Intelligence Industry',
    excerpt:
      'European leaders are examining AI infrastructure, investment, digital independence and regulation as the global artificial intelligence industry expands.',
    date: 'November 12, 2026',
    image: '/images/posts/tech-europe-ai.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
    seoTitle: 'Europe\'s Artificial Intelligence Ambitions Raise Questions About Global Technology Competition',
    metaDescription:
      'European leaders are examining AI infrastructure, investment, digital independence and regulation as the global artificial intelligence industry expands.',
  },
  {
    id: 'uk-open-banking-fintech-shift',
    title: 'How Open Banking Is Changing Everyday Money Habits Across the UK',
    excerpt:
      'From smarter budgeting apps to faster payments, open banking is reshaping how people manage money in Britain — and what fintech companies can offer next.',
    date: 'November 12, 2026',
    image: '/images/posts/tech-uk-open-banking.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
    seoTitle: 'UK Open Banking: How Fintech Is Changing Everyday Money Habits',
    metaDescription:
      'From smarter budgeting apps to faster payments, open banking is reshaping how people manage money in Britain — and what fintech companies can offer next.',
  },
  {
    id: 'checkareview-trusted-reviews-platform-review',
    title: 'CheckAReview.com Review: How the Platform Works for Business Websites',
    excerpt:
      'A full look at CheckAReview.com — how customers find trusted businesses, how owners build reputation, and the working method that turns verified reviews into website trust.',
    date: 'November 12, 2026',
    image: '/images/posts/tech-checkareview.jpg',
    categories: [{ label: 'Technology', tone: 'blue' }],
    seoTitle: 'CheckAReview.com Review: How It Works for Business Websites',
    metaDescription:
      'Learn how CheckAReview.com works for customers and business websites — free profiles, review invitations, trust screening, widgets and reputation management.',
  },
]

export const lifestylePosts: Post[] = [
  {
    id: 'lifestyle-family-calls',
    title: 'Should Family Phone Calls Always Be Planned? Finding the Balance Between Spontaneity and Personal Time',
    excerpt:
      'Spontaneous calls can help siblings stay close, but unexpected conversations are not always convenient. Discover how families can find a better balance.',
    date: 'November 12, 2026',
    image: '/images/posts/lifestyle-family-calls.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
    seoTitle: 'Family Phone Calls: Is It Better to Plan or Call Spontaneously?',
    metaDescription:
      'Spontaneous calls can help siblings stay close, but unexpected conversations are not always convenient. Discover how families can find a better balance.',
  },
  {
    id: 'lifestyle-love-languages',
    title: 'Love Languages Explained: Can Five Categories Really Describe Every Relationship?',
    excerpt:
      'The five love languages remain popular in modern dating and relationships, but can a simple personality framework explain how people experience love?',
    date: 'November 12, 2026',
    image: '/images/posts/lifestyle-love-languages.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
    seoTitle: 'Love Languages Explained: Do They Really Help Relationships?',
    metaDescription:
      'The five love languages remain popular in modern dating and relationships, but can a simple personality framework explain how people experience love?',
  },
  {
    id: 'lifestyle-imaginary-friends',
    title: 'Imaginary Friends in Childhood: How Pretend Companions Can Support Creativity and Social Development',
    excerpt:
      'Imaginary friends are a common part of childhood for many children. Discover how pretend companions may support creativity, emotional understanding and social development.',
    date: 'November 12, 2026',
    image: '/images/posts/lifestyle-imaginary-friends.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
    seoTitle: 'Imaginary Friends in Children: Benefits for Creativity and Social Skills',
    metaDescription:
      'Imaginary friends are a common part of childhood for many children. Discover how pretend companions may support creativity, emotional understanding and social development.',
  },
  {
    id: 'uk-allotment-living-revival',
    title: 'Why Allotments Are Having a Quiet Revival Across the UK',
    excerpt:
      'From waiting lists to weekend harvests, British allotments are offering people a slower routine, fresher food and a stronger sense of community outside the home.',
    date: 'November 12, 2026',
    image: '/images/posts/lifestyle-uk-allotments.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
    seoTitle: 'UK Allotment Revival: Why Growing Your Own Is Back',
    metaDescription:
      'From waiting lists to weekend harvests, British allotments are offering people a slower routine, fresher food and a stronger sense of community outside the home.',
  },
  {
    id: 'british-pub-third-place-culture',
    title: 'The British Pub as a Third Place: Why Local Bars Still Matter',
    excerpt:
      'Beyond drinks and quizzes, neighbourhood pubs remain one of Britain’s most important social spaces — places to meet, linger and feel part of a local community.',
    date: 'November 12, 2026',
    image: '/images/posts/lifestyle-british-pub-culture.jpg',
    categories: [{ label: 'Lifestyle', tone: 'green' }],
    seoTitle: 'British Pub Culture: Why the Local Still Matters as a Third Place',
    metaDescription:
      'Beyond drinks and quizzes, neighbourhood pubs remain one of Britain’s most important social spaces — places to meet, linger and feel part of a local community.',
  },
]

export const healthPosts: Post[] = [
  {
    id: 'health-glp1-eye-safety',
    title: 'New Eye Safety Warnings Raise Questions About Popular Weight-Loss Medicines',
    excerpt:
      'US regulators have requested additional eye-related warnings for certain GLP-1 medicines. Here’s what patients should understand about the rare condition involved.',
    date: 'November 12, 2026',
    image: '/images/posts/health-glp1-eye-safety.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
    seoTitle: 'GLP-1 Weight-Loss Medicines: What the New Eye Safety Warning Means',
    metaDescription:
      'US regulators have requested additional eye-related warnings for certain GLP-1 medicines. Here’s what patients should understand about the rare condition involved.',
  },
  {
    id: 'health-sit-to-stand',
    title: 'The Sit-to-Stand Test: What a Simple Chair Exercise Can Reveal About Physical Fitness',
    excerpt:
      'The 30-second sit-to-stand test offers a practical way to assess lower-body strength and mobility, particularly among older adults.',
    date: 'November 12, 2026',
    image: '/images/posts/health-sit-to-stand.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
    seoTitle: 'Sit-to-Stand Test: A Simple Way to Assess Lower-Body Fitness',
    metaDescription:
      'The 30-second sit-to-stand test offers a practical way to assess lower-body strength and mobility, particularly among older adults.',
  },
  {
    id: 'health-childbirth-recovery',
    title: 'Childbirth Recovery: Why Some Physical and Emotional Effects Can Continue for Years',
    excerpt:
      'Some childbirth-related health problems can continue long after delivery. Learn about common concerns, delayed complications and the importance of postnatal support.',
    date: 'November 12, 2026',
    image: '/images/posts/health-childbirth-recovery.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
    seoTitle: 'Long-Term Effects of Childbirth: Physical and Emotional Recovery',
    metaDescription:
      'Some childbirth-related health problems can continue long after delivery. Learn about common concerns, delayed complications and the importance of postnatal support.',
  },
  {
    id: 'health-ageing-wellbeing',
    title: 'Ageing Without Limits: Why Challenging Age Stereotypes Matters for Health and Wellbeing',
    excerpt:
      'Age stereotypes can affect confidence, opportunities and wellbeing. Discover why challenging ageism and staying socially and physically active matter.',
    date: 'November 12, 2026',
    image: '/images/posts/health-ageing-wellbeing.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
    seoTitle: 'Ageing and Health: How Positive Attitudes Can Support Wellbeing',
    metaDescription:
      'Age stereotypes can affect confidence, opportunities and wellbeing. Discover why challenging ageism and staying socially and physically active matter.',
  },
  {
    id: 'uk-walking-for-wellbeing',
    title: 'Walking for Wellbeing: Why Britain’s Paths Are Becoming Everyday Medicine',
    excerpt:
      'From city parks to coastal trails, walking is one of the simplest habits supporting physical and mental health across the UK — and it fits into ordinary weeks.',
    date: 'November 12, 2026',
    image: '/images/posts/health-uk-walking-wellbeing.jpg',
    categories: [{ label: 'Health', tone: 'red' }],
    seoTitle: 'Walking for Wellbeing in the UK: Simple Habits That Support Health',
    metaDescription:
      'From city parks to coastal trails, walking is one of the simplest habits supporting physical and mental health across the UK — and it fits into ordinary weeks.',
  },
]

export const foodPosts: Post[] = [
  {
    id: 'british-sunday-roast-revival',
    title: 'Why the British Sunday Roast Is Making a Comeback Across the UK',
    excerpt:
      'From neighbourhood pubs to destination restaurants, the Sunday roast is returning as a shared ritual built around local meat, seasonal vegetables and proper gravy.',
    date: 'November 12, 2026',
    image: '/images/posts/food-sunday-roast-revival.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
    seoTitle: 'British Sunday Roast Revival: Why the Classic Meal Is Back',
    metaDescription:
      'From neighbourhood pubs to destination restaurants, the Sunday roast is returning as a shared ritual built around local meat, seasonal vegetables and proper gravy.',
  },
  {
    id: 'london-food-markets-guide',
    title: 'A Guide to London Food Markets Worth Visiting This Season',
    excerpt:
      'Borough, Broadway and neighbourhood markets remain some of the best places to taste Britain’s changing food culture, from artisan bread to global street stalls.',
    date: 'November 12, 2026',
    image: '/images/posts/food-london-markets.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
    seoTitle: 'Best London Food Markets to Visit This Season',
    metaDescription:
      'Borough, Broadway and neighbourhood markets remain some of the best places to taste Britain’s changing food culture, from artisan bread to global street stalls.',
  },
  {
    id: 'british-cheese-beyond-cheddar',
    title: 'British Cheese Beyond Cheddar: Regional Flavours Worth Seeking Out',
    excerpt:
      'From crumbly Lancashire to creamy soft cheeses from Somerset and Wales, Britain’s cheesemaking revival is offering far more variety than supermarket staples suggest.',
    date: 'November 12, 2026',
    image: '/images/posts/food-british-cheese-board.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
    seoTitle: 'British Cheese Guide: Regional Flavours Beyond Cheddar',
    metaDescription:
      'From crumbly Lancashire to creamy soft cheeses from Somerset and Wales, Britain’s cheesemaking revival is offering far more variety than supermarket staples suggest.',
  },
  {
    id: 'best-british-fish-and-chips',
    title: 'Where Tradition Still Matters: Finding Great Fish and Chips Around the UK Coast',
    excerpt:
      'Quality batter, sustainably sourced fish and proper chips remain the marks of a classic British chippy — especially in coastal towns that still take the craft seriously.',
    date: 'November 12, 2026',
    image: '/images/posts/food-fish-and-chips-coast.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
    seoTitle: 'Best Fish and Chips on the UK Coast: Tradition Done Well',
    metaDescription:
      'Quality batter, sustainably sourced fish and proper chips remain the marks of a classic British chippy — especially in coastal towns that still take the craft seriously.',
  },
  {
    id: 'seasonal-british-cooking-autumn',
    title: 'Seasonal British Cooking: Making the Most of the Autumn Harvest',
    excerpt:
      'Apples, squash, root vegetables and late-season greens are shaping autumn menus across the UK, from home kitchens to farm shops and neighbourhood restaurants.',
    date: 'November 12, 2026',
    image: '/images/posts/food-seasonal-british-harvest.jpg',
    categories: [{ label: 'Food', tone: 'orange' }],
    seoTitle: 'Seasonal British Cooking: Autumn Harvest Ideas for Home Kitchens',
    metaDescription:
      'Apples, squash, root vegetables and late-season greens are shaping autumn menus across the UK, from home kitchens to farm shops and neighbourhood restaurants.',
  },
]

export const travelPosts: Post[] = [
  {
    id: 'travel-trends-shaping-holidays-in-2027',
    title: 'Seven Travel Trends Set to Shape the Way We Holiday in 2027',
    excerpt:
      'From fantasy-inspired destinations and nostalgic escapes to hobby breaks and short getaways, discover seven travel trends expected to influence holidays in 2027.',
    date: 'November 12, 2026',
    image: '/images/posts/travel-trends-2027.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
    seoTitle: '7 Travel Trends That Could Shape Holidays in 2027',
    metaDescription:
      'From fantasy-inspired destinations and nostalgic escapes to hobby breaks and short getaways, discover seven travel trends expected to influence holidays in 2027.',
  },
  {
    id: 'edinburgh-weekend-city-break',
    title: 'How to Spend a Perfect Weekend in Edinburgh',
    excerpt:
      'From the Old Town’s closes to museum mornings and hillside views, Edinburgh remains one of the UK’s strongest city breaks for atmosphere, walkability and culture.',
    date: 'November 12, 2026',
    image: '/images/posts/travel-edinburgh-weekend.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
    seoTitle: 'Edinburgh Weekend Guide: A Perfect UK City Break',
    metaDescription:
      'From the Old Town’s closes to museum mornings and hillside views, Edinburgh remains one of the UK’s strongest city breaks for atmosphere, walkability and culture.',
  },
  {
    id: 'cornwall-coast-path-short-breaks',
    title: 'Cornwall Coast Path Short Breaks Worth Planning This Season',
    excerpt:
      'Clifftop walks, harbour towns and sea air make Cornwall one of Britain’s most rewarding short-break destinations for travellers who want scenery without a long itinerary.',
    date: 'November 12, 2026',
    image: '/images/posts/travel-cornwall-coast.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
    seoTitle: 'Cornwall Coast Path: Best Short Break Ideas in the UK',
    metaDescription:
      'Clifftop walks, harbour towns and sea air make Cornwall one of Britain’s most rewarding short-break destinations for travellers who want scenery without a long itinerary.',
  },
  {
    id: 'lake-district-autumn-escapes',
    title: 'Lake District Autumn Escapes: Quiet Routes and Mirror Lakes',
    excerpt:
      'Autumn colour, cooler trails and softer light make the Lake District especially compelling for walkers looking for a slower British escape.',
    date: 'November 12, 2026',
    image: '/images/posts/travel-lake-district-autumn.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
    seoTitle: 'Lake District in Autumn: Quiet UK Escapes for Walkers',
    metaDescription:
      'Autumn colour, cooler trails and softer light make the Lake District especially compelling for walkers looking for a slower British escape.',
  },
  {
    id: 'wales-coastal-path-guide',
    title: 'Walking the Wales Coast Path: Scenic Stretches for First-Time Visitors',
    excerpt:
      'With cliffs, beaches and harbour towns linked by one continuous trail, the Wales Coast Path offers some of the UK’s most varied coastal walking.',
    date: 'November 12, 2026',
    image: '/images/posts/travel-wales-coastal-path.jpg',
    categories: [{ label: 'Travel', tone: 'teal' }],
    seoTitle: 'Wales Coast Path Guide: Scenic Stretches for First-Time Walkers',
    metaDescription:
      'With cliffs, beaches and harbour towns linked by one continuous trail, the Wales Coast Path offers some of the UK’s most varied coastal walking.',
  },
]

export const culturePosts: Post[] = [
  {
    id: 'war-requiem-coventry-cathedral-cbso-review',
    title: "War Requiem Review: Britten's Masterpiece Retains Its Power at Coventry Cathedral",
    excerpt:
      'Kazuki Yamada led the City of Birmingham Symphony Orchestra and chorus with soloists Christian Gerhaher, Andrew Staples and Olga Peretyatko in a monumental performance of Britten’s War Requiem at Coventry Cathedral.',
    date: 'November 12, 2026',
    image: '/images/posts/culture-war-requiem-coventry.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
    seoTitle: "War Requiem Review: Britten's Masterpiece Still Powerful at Coventry Cathedral",
    metaDescription:
      'Kazuki Yamada leads the CBSO in Benjamin Britten’s War Requiem at Coventry Cathedral, marking Armistice Day and 50 years since the composer’s death.',
  },
  {
    id: 'blackhaine-saints-in-the-wethouse-debut-album',
    title: 'Blackhaine Brings an Unconventional Sound to the UK Rap Scene with Debut Album',
    excerpt:
      'British artist Blackhaine pushes the boundaries of rap and electronic music with Saints in the Wethouse, an intense debut album shaped by experimental sounds and northern identity.',
    date: 'November 12, 2026',
    image: '/images/posts/culture-blackhaine-saints-wethouse.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
    seoTitle: "Blackhaine's Saints in the Wethouse Explores the Darker Side of UK Rap",
    metaDescription:
      'British artist Blackhaine pushes the boundaries of rap and electronic music with Saints in the Wethouse, an intense debut album shaped by experimental sounds and northern identity.',
  },
  {
    id: 'prince-george-kingfisher-artwork-country-life-magazine',
    title: "Prince George's Kingfisher Drawing Makes Its Debut in a Special Country Life Edition",
    excerpt:
      "Prince George's kingfisher illustration features in a special Country Life magazine edition guest-edited by Prince William, alongside contributions from other members of the royal family.",
    date: 'November 12, 2026',
    image: '/images/posts/culture-prince-george-kingfisher.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
    seoTitle: 'Prince George\'s Artwork Featured in Special Country Life Magazine Edition',
    metaDescription:
      "Prince George's kingfisher illustration features in a special Country Life magazine edition guest-edited by Prince William, alongside contributions from other members of the royal family.",
  },
  {
    id: 'grand-theft-auto-global-cultural-phenomenon',
    title: 'Grand Theft Auto: How a Video Game Series Became a Global Cultural Phenomenon',
    excerpt:
      'Explore how Grand Theft Auto evolved from a simple crime-themed game into a cultural phenomenon, influencing entertainment, storytelling and modern video game design.',
    date: 'November 12, 2026',
    image: '/images/posts/culture-gta-phenomenon.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
    seoTitle: "How Grand Theft Auto Became One of Gaming's Biggest Cultural Phenomena",
    metaDescription:
      'Explore how Grand Theft Auto evolved from a simple crime-themed game into a cultural phenomenon, influencing entertainment, storytelling and modern video game design.',
  },
  {
    id: 'uk-theatre-revival-regional-stages',
    title: 'Britain’s Theatre Revival Beyond the West End',
    excerpt:
      'From regional playhouses to touring productions, UK theatre is finding fresh energy outside London — and drawing audiences back into live performance.',
    date: 'November 12, 2026',
    image: '/images/posts/culture-uk-theatre-revival.jpg',
    categories: [{ label: 'Culture', tone: 'purple' }],
    seoTitle: 'UK Theatre Revival: Why Regional Stages Matter Beyond the West End',
    metaDescription:
      'From regional playhouses to touring productions, UK theatre is finding fresh energy outside London — and drawing audiences back into live performance.',
  },
]

export const allPosts: Post[] = [
  ...newsPosts,
  ...technologyPosts,
  ...lifestylePosts,
  ...healthPosts,
  ...foodPosts,
  ...travelPosts,
  ...culturePosts,
]

export const heroMain = newsPosts[0]
export const heroSide = [travelPosts[0], lifestylePosts[0], technologyPosts[0]] as Post[]
export const editorsPicks = [lifestylePosts[1], travelPosts[0]]
export const editorsTextList = [
  newsPosts[2],
  lifestylePosts[2],
  healthPosts[2],
  technologyPosts[2],
]
export const recentFeature = travelPosts[0]
export const recentList = [lifestylePosts[0], healthPosts[0], newsPosts[4], technologyPosts[0]]
export const recentWide = lifestylePosts[1]
export const recentGrid = [healthPosts[1], lifestylePosts[2], newsPosts[0], travelPosts[0]]
export const trendingPosts = [
  newsPosts[0],
  travelPosts[0],
  healthPosts[0],
  lifestylePosts[0],
  technologyPosts[0],
]
export const mostRead = [
  newsPosts[4],
  travelPosts[0],
  healthPosts[0],
  lifestylePosts[1],
]
export const categoryExtras: Post[] = []

export function getPostsByCategorySlug(slug: string): Post[] {
  const category = getCategoryBySlug(slug)
  if (!category) return []

  const aliases = new Set(category.aliases.map((a) => a.toLowerCase()))
  return allPosts.filter((post) =>
    post.categories.some((c) => aliases.has(c.label.toLowerCase())),
  )
}

export function getPopularCategories() {
  return categories
    .map((category) => ({
      name: category.label,
      slug: category.slug,
      count: getPostsByCategorySlug(category.slug).length,
    }))
    .filter((category) => category.count > 0)
    .sort((a, b) => b.count - a.count)
}

export function getPostById(id: string) {
  return allPosts.find((post) => post.id === id)
}

export function postPath(id: string) {
  return `/blog/${id}`
}

export function getRelatedPosts(post: Post, limit = 3) {
  const labels = new Set(post.categories.map((c) => c.label.toLowerCase()))
  return allPosts
    .filter(
      (candidate) =>
        candidate.id !== post.id &&
        candidate.image &&
        candidate.categories.some((c) => labels.has(c.label.toLowerCase())),
    )
    .slice(0, limit)
}

export const footerTrending: Post[] = trendingPosts.slice(1, 4)
export const footerPopular: Post[] = mostRead.slice(0, 3)
