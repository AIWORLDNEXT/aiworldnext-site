import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to AIWorldNext</h1>
        <p className="text-xl max-w-2xl">
          Your global hub for AI News, Jobs, Blogs, Tools, and Innovations.
        </p>
      </main>
      <Footer />
    </div>
  )
}
