import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FilterBar } from "@/components/filter-bar"
import { WriteupGrid } from "@/components/writeup-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <FilterBar />
          <WriteupGrid />
        </section>
      </main>
      <Footer />
    </div>
  )
}
