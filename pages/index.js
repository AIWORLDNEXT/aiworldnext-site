import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to AIWorldNext</h1>
        <p>Your global hub for AI News, Jobs, Blogs, Tools, and Innovations.</p>
      </main>
      <Footer />
    </div>
  );
}