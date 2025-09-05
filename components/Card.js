// components/Card.js
export default function Card({item}) {
  if (!item) return null;
  return (
    <a href={item.link || "#"} style={{display:"block", padding:12, border:"1px solid #1f2937", borderRadius:8, textDecoration:"none", color:"inherit"}}>
      {item.image && <div style={{height:160, overflow:"hidden", borderRadius:6, marginBottom:8}}>
        <img src={item.image} alt={item.title} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
      </div>}
      <div style={{fontSize:12, color:"#9CA3AF"}}>{item.date}</div>
      <div style={{fontWeight:600, marginTop:6}}>{item.title}</div>
      <div style={{color:"#9CA3AF", marginTop:6}}>{item.excerpt || item.description}</div>
    </a>
  )
}
