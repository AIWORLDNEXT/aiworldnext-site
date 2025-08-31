import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Vision() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Our Vision & Mission</h1>
        <p className="text-lg mb-4">
          AIWorldNext is dedicated to building a global hub for Artificial Intelligence, Robotics, 
          and Emerging Technologies. Our mission is to connect innovators, researchers, professionals, 
          and enthusiasts through News, Jobs, Blogs, and Resources that shape the AI-driven future.
        </p>
      </main>
      <Footer />
    </div>
  )
}