import HomePage from "../components/Home/page";
import Programas  from "../components/Programas/page";
import Cursos from "../components/Cursos/page"

export default function Home() {
  return (
    <div className="grid md:h-[90vh] md:w-full md:p-0
    lg:h-[90vh]  lg:py-0 
    lg:w-[98.7vw]  xl:w-[98.7vw]   xl:h-[100vh] 
    bg-orange-500 grid-rows-[20px_1fr_20px] 
     md:bg-black lg:bg-slate-400  xl:bg-transparent 2xl:bg-transparent
   items-center justify-items-center min-h-screen gap-16
   sm:p-0 font-[family-name:var(--font-geist-sans)]">
     <main className="flex flex-col  xl:p-0 row-start-2 
     items-center justify-center  sm:items-start xl:items-end">
       <HomePage/>
       <Cursos />
       <Programas />

     </main>
    
   </div>
  );
}
