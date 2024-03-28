import { Link, useLocation, useNavigate } from "react-router-dom"
import "./SapceDetails.css"
import { Linkeding } from "../logos/Linkeding";
import { GitHub } from "../logos/GitHub";
import Facebook from "../logos/Facebook";
import Flecha from "../logos/Flecha";

export  function SpaceDetails() {
  let {state} = useLocation();
console.log(state)
  return (
    <div className="text-amber-50 w-screen max-w-[1230px] mx-auto min-h-screen">
      
      <section className="flex  h-16 relative
        bg-gradient-to-r from-red-800 to-orange-400">
         <Link to={'/'}> 
          <div> <Flecha/> </div>
         </Link>
        <h2 className="m-auto text-[24px] font-mono font-bold">VIEW SPACE WEB </h2>
      </section>

      <div className="p-2">
       <p className="font-mono font-thin ">{state.date}</p>
        {state.hdurl ? 
         <img src={state.hdurl}  className="w-full " />:
         <iframe width="100%" height="auto" src={state.url} allowfullscreen></iframe>
}
       <h3 className="text-2xl text-center my-4 font-semibold">{state.title}</h3>
        <p className="mb-3">{state.explanation}</p>
       <span className="text-xs">{state.copyright}</span>
      </div>
         
      <footer className="flex flex-col items-center p-5 bg-red-600 ">
        <h6 className="text-3xl my-2">Contacts</h6>
          <ul className="flex gap-3 mb-2 contactos">
            <li>
              <a href="https://www.linkedin.com/in/yhordi-code/" target="_blank"  >
               <Linkeding/>
              </a>
            </li>

            <li>
              <a href="https://github.com/YhordiC" target="_blank">
               <GitHub/>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/gorge.choque.39" target="_blank">
               <Facebook/>
              </a>
            </li>
          </ul>

          <p>Correo: yordychoque124@gmail.com</p>
          <h4 className="text-[12px]"> Autor: 
            <a href="https://www.linkedin.com/in/yhordi-code/" target="_blank"
            className="decoration-solid hover:text-blue-400 "> Yhordi Choque Espinoza</a>
          </h4>
        </footer>
    </div>
  )
}
