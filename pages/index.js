import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const sections = [
    "News", "Blogs", "Jobs", "Products",
    "Resources", "Tools", "Startups", "Robotics",
    "Podcasts", "Partnerships", "Community", "Vision"
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-10 text-center">
        <h1 className="text-4xl font-bold mb-6">AIWorldNext</h1>
        <p className="mb-8">Global Hub for AI & Robotics</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sections.map((s) => (
            <a key={s} href={`/${s.toLowerCase()}`} className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700">
              {s}
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}