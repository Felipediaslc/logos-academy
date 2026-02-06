import Homer from "./components/homer/page";
import Aprendiz from "./components/aprendizado/page";
import CurssosAll from "./components/cursosAll/page"
import Cursos from "./components/cursos/page";
import Footer from "./components/footer/page";


export default function Home() {
  return <section className="bg-orange-500
   min-h-screen">
    <Homer />
    <CurssosAll />
    <Cursos />
    <Aprendiz />
    <Footer />
    

    </section>;
}