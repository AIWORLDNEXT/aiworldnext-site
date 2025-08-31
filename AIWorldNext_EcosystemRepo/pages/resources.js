import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-yellow-400">📚 AI Resources</h1>
        <p className="mt-4 text-gray-300">Guides, datasets, and APIs for AI development.</p>
      </section>
    </main>
  )
}
