import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-blue-400">🛍 AI & Robotics Products</h1>
        <p className="mt-4 text-gray-300">Affiliate marketplace for AI & Robotics products.</p>
      </section>
    </main>
  )
}
