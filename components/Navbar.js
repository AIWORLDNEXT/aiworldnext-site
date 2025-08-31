export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">AIWorldNext</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/news" className="hover:text-gray-400">News</a>
        <a href="/blogs" className="hover:text-gray-400">Blogs</a>
        <a href="/jobs" className="hover:text-gray-400">Jobs</a>
        <a href="/products" className="hover:text-gray-400">Products</a>
        <a href="/resources" className="hover:text-gray-400">Resources</a>
      </div>
    </nav>
  )
}
