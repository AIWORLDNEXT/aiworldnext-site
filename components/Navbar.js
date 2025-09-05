// components/Navbar.js
export default function Navbar(){
  return (
    <nav style={{padding:16, borderBottom:"1px solid #111", display:"flex", gap:16, alignItems:"center"}}>
      <div style={{display:"flex", alignItems:"center", gap:12}}>
        <img src="/assets/logo.svg" alt="AIWorldNext" style={{width:48,height:48}}/>
        <div>
          <div style={{fontWeight:700}}>AIWorldNext</div>
          <div style={{fontSize:12, color:"#9CA3AF"}}>Global Hub for AI & Robotics</div>
        </div>
      </div>
      <div style={{marginLeft:"auto"}}>
        <a href="/news" style={{marginRight:12}}>News</a>
        <a href="/blogs" style={{marginRight:12}}>Blogs</a>
        <a href="/jobs" style={{marginRight:12}}>Jobs</a>
      </div>
    </nav>
  )
}
