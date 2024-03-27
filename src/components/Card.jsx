import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({Star}) {
    return (
    <li className="w-full flex flex-col justify-between bg-zinc-800 rounded-2xl
     cursor-pointer  Card">
     <Link to={'/space/' + Star.title} state={Star}>
      <div  className="w-full h-80 rounded-t-2xl pb-3
        border-b-2 border-emerald-400  "
         style={{backgroundImage:`url(${
           Star.hdurl  ?  Star.url : Star.thumbnail_url})`}}>
      </div>
       
      <section className="text-amber-50 p-5 mt-4  ">
        <h4 className="text-xl">{Star.title}</h4>
        <p className="font-extralight">{Star.date}</p>
      </section>
      </Link>
      
    </li>
  )
}
