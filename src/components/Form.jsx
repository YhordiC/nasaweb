import { useState } from "react"
import { get } from "../utils/httpCliente"
import { useEffect } from "react";
import Card from "./Card";
import './Form.css'
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";
import FlechaInicio from "../logos/FlechaInicio";
export default function Form() {
 
   const [count,SetCount] = useState(6)
   const [result,setResult]= useState([])
   const [Start_date, setStartDate] = useState('');
   const [End_date, setEndDate] = useState('');
   const [HasMore,setHasMore] = useState(true);
   const  [isLoading, setIsLoading] = useState(false);


  // const datoinicial = Start_date.get('datoinicial');

   const handleSubmit = (e) =>{
      e.preventDefault();
   }

   const params = ()=>{
      let parche = ''
      if(Start_date.length==0 & End_date.length ==0){
        parche = `&count=${count}`
       
        return parche;
      }

      if(Start_date.length>0 && End_date.length >0){
         setResult([]);
         parche = `&start_date=${Start_date}&end_date=${End_date}`
        return parche;
       
      }
      
      if(Start_date){
         setResult([])
        parche = `&date=${Start_date}`
        return parche;
      }

   }
   
   useEffect(()=>{
      const paramsAPI = params();
      setIsLoading(true)
      get('&thumbs=true'+ paramsAPI).then((data)=>{
         //añadar los nuevos datos a result 
         setResult((results) => results.concat(data));
         // elimar los objetos vacios,errores añadidos
        setResult((results) => results.filter((result) =>result.date )) 
        setHasMore( count == data.length ) 
        setIsLoading(false);
         
         console.log(count)
         console.log(result.length)
      })

   },[count,Start_date,End_date])

   
   return (
    <div className=" w-screen max-w-[1230px]  m-auto " >
      <div className="w-[60px] h-[60px] bg-[#c122e0] rounded-full fixed
       bottom-10 right-10 animate-bounce opacity-90 " >
        <a  href="#">
         <FlechaInicio/>
         </a>
      </div>
      
      <div className="bg-[url('src/assets/star.jpg')] bg-no-repeat bg-cover 
        bg-center  flex  h-[30vh]">
         <h1 className='m-auto text-sky-300 text-center text-6xl' >View Space Web</h1>
      </div>

     <form onSubmit={handleSubmit}
        className="text-zinc-50  flex justify-evenly mt-6 
        mb-10 text-lg max-w-[700px] mx-auto" >
       
        <label className="">Fecha Inicial:
        <input type="date" name="Inicio calendario" value={Start_date}
         placeholder="Fecha inicial" className="w-36"
         onChange={(e) => {
         const value = e.target.value;
         setStartDate(value); }}/>
        </label>
        
        <label>Fecha final:
        <input type="date" name="FIn Calendario" placeholder="Fecha final"
         className="w-36"
         value={End_date}
         onChange={(e) => {
          const value = e.target.value;
          setEndDate(value);}}/>
        </label>
        
     </form>

    {!isLoading && result.length == 0 
     ? <Empty/> 
     : <InfiniteScroll 
     dataLength={result.length}
     hasMore={HasMore}
     next={()=>SetCount((prepage) => prepage + 2)}
     >
      
   <section className="m-2">
       <ul className="grid gap-7 px-5 ">
        {result.map((star)=>(
           <Card Star={star} key={star.date}/>
        ))}
       </ul>
    </section>
   </InfiniteScroll>}
    
    </div>
      )
}
