export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <div className="text-xl font-bold">AIWorldNext</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/vision" className="hover:text-gray-400">Vision</a>
      </div>
    </nav>
  )
}