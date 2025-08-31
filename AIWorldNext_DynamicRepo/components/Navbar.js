function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-wrap gap-4 text-sm">
      <a href="/" className="hover:text-cyan-400">Home</a>
      <a href="/news" className="hover:text-cyan-400">News</a>
      <a href="/blogs" className="hover:text-cyan-400">Blogs</a>
      <a href="/jobs" className="hover:text-cyan-400">Jobs</a>
      <a href="/tools" className="hover:text-cyan-400">Tools</a>
      <a href="/resources" className="hover:text-cyan-400">Resources</a>
      <a href="/startups" className="hover:text-cyan-400">Startups</a>
      <a href="/websites" className="hover:text-cyan-400">Websites</a>
      <a href="/podcasts" className="hover:text-cyan-400">Podcasts</a>
      <a href="/products" className="hover:text-cyan-400">Products</a>
      <a href="/robotics" className="hover:text-cyan-400">Robotics</a>
      <a href="/community" className="hover:text-cyan-400">Community</a>
      <a href="/vision" className="hover:text-cyan-400">Vision</a>
      <a href="/partnerships" className="hover:text-cyan-400">Partnerships</a>
    </nav>
  )
}
export default Navbar;
