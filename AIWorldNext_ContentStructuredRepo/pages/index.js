export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-cyan-400">AIWorldNext.com</h1>
        <p className="mt-4 text-lg text-gray-300">
          🌍 Global Hub for AI & Robotics – News, Jobs, Tools & Innovation
        </p>
      </section>

      <section className="px-10 py-12">
        <h2 className="text-3xl font-bold text-lime-400 mb-6">Explore Sections</h2>
        <ul className="space-y-4">
          <li><a href="/news" className="text-cyan-300 hover:underline">📰 AI News</a></li>
          <li><a href="/jobs" className="text-cyan-300 hover:underline">💼 AI Jobs</a></li>
          <li><a href="/tools" className="text-cyan-300 hover:underline">🛠 AI Tools</a></li>
          <li><a href="/blogs" className="text-cyan-300 hover:underline">✍ Blogs</a></li>
          <li><a href="/robotics" className="text-cyan-300 hover:underline">🤖 Robotics</a></li>
        </ul>
      </section>
    </main>
  )
}