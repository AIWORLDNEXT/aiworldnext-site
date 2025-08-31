import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-purple-400">🎙 AI Podcasts & Channels</h1>
        <p className="mt-4 text-gray-300">AI podcasts, news channels, and video shows.</p>
      </section>
    </main>
  )
}
