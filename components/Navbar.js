export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold">AIWorldNext</div>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/news">News</a>
        <a href="/blogs">Blogs</a>
        <a href="/jobs">Jobs</a>
        <a href="/products">Products</a>
        <a href="/resources">Resources</a>
        <a href="/community">Community</a>
        <a href="/vision">Vision</a>
      </div>
    </nav>
  )
}