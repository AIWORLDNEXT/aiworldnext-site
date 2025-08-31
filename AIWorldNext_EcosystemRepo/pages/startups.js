import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-red-400">🚀 AI Startups & Innovations</h1>
        <p className="mt-4 text-gray-300">Profiles of startups driving AI innovation.</p>
      </section>
    </main>
  )
}
