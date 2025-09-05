// pages/index.js
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import fs from 'fs'
import path from 'path'

export default function Home({ news = [], blogs = [], jobs = [] }) {
  return (
    <div style={{fontFamily: "Inter, system-ui, sans-serif", background:"#0f172a", color:"#E5E7EB", minHeight:"100vh"}}>
      <Navbar />
      <main style={{maxWidth:1100, margin:"32px auto", padding:"0 16px"}}>
        <h1 style={{fontSize:36, marginBottom:8}}>AIWorldNext — Global Hub for AI & Robotics</h1>
        <p style={{color:"#9CA3AF"}}>News, Jobs, Blogs, Products and Resources — curated sample content.</p>

        <section style={{marginTop:28}}>
          <h2>Latest News</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:16}}>
            {news.slice(0,3).map((n,i)=>(<Card key={i} item={n}/>))}
          </div>
        </section>

        <section style={{marginTop:28}}>
          <h2>Featured Blogs</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:16}}>
            {blogs.slice(0,3).map((b,i)=>(<Card key={i} item={b}/>))}
          </div>
        </section>

        <section style={{marginTop:28}}>
          <h2>Top Jobs</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:16}}>
            {jobs.slice(0,3).map((j,i)=>(<Card key={i} item={j}/>))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function safeRead(folder) {
  try {
    const p = path.join(process.cwd(), 'content', folder, 'index.json')
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf8'))
    }
  } catch(e) {}
  return []
}

export async function getStaticProps() {
  return {
    props: {
      news: safeRead('news'),
      blogs: safeRead('blogs'),
      jobs: safeRead('jobs'),
    }
  }
}
