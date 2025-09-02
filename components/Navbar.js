import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-lg">
      <div className="text-xl font-bold text-blue-400">aiworldnext.com</div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/news">News</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}