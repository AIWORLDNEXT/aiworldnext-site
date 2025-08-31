import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-cyan-400">AIWorldNext.com</h1>
        <p className="mt-4 text-lg text-gray-300">🌍 Global Hub for AI & Robotics – News, Jobs, Tools & Innovation</p>
      </section>
    </main>
  )
}