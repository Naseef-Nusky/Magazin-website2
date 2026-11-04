import { CategorySlider } from '../components/CategorySlider'
import { EditorsPicks } from '../components/EditorsPicks'
import { Hero } from '../components/Hero'
import { MostRead } from '../components/MostRead'
import { RecentPosts } from '../components/RecentPosts'
import { Sidebar } from '../components/Sidebar'

export function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySlider />
      <EditorsPicks />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-2 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <RecentPosts />
        </div>
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </section>
      <MostRead />
    </main>
  )
}
