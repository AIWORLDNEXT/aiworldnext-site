import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-green-400">🌍 Vision & Mission</h1>
        <p className="mt-4 text-gray-300">Our vision and mission for AIWorldNext.com.</p>
      </section>
    </main>
  )
}
