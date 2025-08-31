import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-indigo-400">🌐 AI Websites Directory</h1>
        <p className="mt-4 text-gray-300">Directory of important AI-related websites.</p>
      </section>
    </main>
  )
}
