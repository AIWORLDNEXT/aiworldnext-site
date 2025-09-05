export default function Navbar(){ 
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center gap-3">
        <img src="/assets/logo.svg" alt="AIWorldNext" className="w-10 h-10"/>
        <div>
          <div className="font-bold text-lg">AIWorldNext</div>
          <div className="text-xs text-gray-400">Global Hub for AI & Robotics</div>
        </div>
      </div>
      <div className="flex gap-4 text-sm">
        <a href="/news">News</a>
        <a href="/blogs">Blogs</a>
        <a href="/jobs">Jobs</a>
        <a href="/products">Products</a>
        <a href="/vision">Vision</a>
      </div>
    </nav>
  )
}