import Homer from "@/app/homer/page";
import Aprendiz from "@/app/aprendizado/page";
import CurssosAll from "@/app/cursosAll/page";
import Cursos from "@/app/cursos/page";
import Footer from "@/app/footer/page";

export default function Home() {
  return (
    <main>
      <Homer />
      <CurssosAll />
      <Cursos />
      <Aprendiz />
      <Footer />
    </main>
  );
}
