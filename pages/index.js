import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import news from '../content/news.json'
import blogs from '../content/blogs.json'
import jobs from '../content/jobs.json'
export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">AIWorldNext — Global Hub for AI & Robotics</h1>
          <p className="text-gray-400 mt-2">News, Jobs, Blogs, Products and Resources — curated sample content.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0,3).map((n,i)=>(<Card key={i} item={n}/>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.slice(0,3).map((b,i)=>(<Card key={i} item={b}/>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Top Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.slice(0,3).map((j,i)=>(<Card key={i} item={j}/>))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}