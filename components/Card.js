export default function Card({item}){
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="card p-4 block hover:scale-[1.01] transition-transform">
      <div className="h-44 w-full overflow-hidden rounded-md mb-3">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
      </div>
      <div className="text-xs text-gray-400">{item.date}</div>
      <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
      <p className="text-sm text-gray-300 mt-2 line-clamp-3">{item.description}</p>
    </a>
  )
}