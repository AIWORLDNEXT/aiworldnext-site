import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to AIWorldNext</h1>
        <p className="text-lg">Your global hub for AI News, Jobs, Blogs, Tools, and Innovations.</p>
      </main>
      <Footer />
    </div>
  )
}