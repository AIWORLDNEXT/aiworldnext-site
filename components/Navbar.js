import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-3">
        <img src="/assets/logo.png" alt="AIWorldNext Logo" className="h-10"/>
        <span className="font-bold text-xl">AIWorldNext</span>
      </div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/news">News</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/products">Products</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/community">Community</Link>
        <Link href="/vision">Vision</Link>
      </div>
    </nav>
  );
}