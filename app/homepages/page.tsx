import Home from "../components/home/page";
import Cursos from "../components/cursos/page";
import Aprendizado from "../components/aprendizado/page";





export default function HomePages() {
  return (
    <>
   
    <div className="grid md:h-[90vh] md:w-full md:p-0
    lg:h-[90vh]  lg:py-0 
    lg:w-[98.7vw]  xl:w-[98.7vw]   xl:h-[100vh] 
    bg-orange-500 grid-rows-[20px_1fr_20px] 
     md:bg-orange-500 
   items-center justify-items-center min-h-screen gap-16
   sm:p-0 font-[family-name:var(--font-geist-sans)]">
     <main className="flex flex-col  xl:p-0 row-start-2 
     items-center justify-center  sm:items-start xl:items-end">
       <Home/>
       <Cursos />
       <Aprendizado />
      
     
      
     </main>
    
   </div>
   </>
  );
}