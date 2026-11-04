import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="min-h-svh bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
