import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import items from '../content/news.json'

export default function Page(){
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">News — Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it,i)=>(<Card key={i} item={it}/>))}
        </div>
      </main>
      <Footer />
    </div>
  )
}