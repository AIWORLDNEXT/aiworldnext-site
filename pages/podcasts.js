import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Navbar from '../components/Navbar'

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content/podcasts')
  const files = fs.readdirSync(dir)

  const posts = files.map((filename) => {
    const filePath = path.join(dir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    return {
      slug: filename.replace('.md', ''),
      title: data.title || filename,
      date: data.date || '',
      excerpt: content.substring(0, 150) + '...'
    }
  })

  return { props: { posts } }
}

export default function AIPodcasts({ posts }) {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-4xl font-bold text-purple-400">🎙 AI Podcasts</h1>
        <div className="mt-6 space-y-4">
          {posts.map((item, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.date}</p>
              <p className="mt-2">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
