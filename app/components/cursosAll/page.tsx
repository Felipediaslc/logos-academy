'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import InstrutorGreg from "../../../public/greg.jpeg";
import Instrutor from "../../../public/danielcaval.png";



const slide = [
  {
    title: "Html5 Css3 Javascript",
    description: "HTML5 é a quinta versão da linguagem de marcação    padrão para páginas web. O CSS, ou Cascading Style  Sheets, é uma linguagem de folha de estilo usada para       descrever a aparência e a formatação de um documento    escrito em HTML. JavaScript (JS) é uma linguagem de    programação usada para criar páginas web interativas,  com funcionalidades como animações, mapas interativos  e atualização de feeds.",
        icons: ["/icons/html5.png", "/icons/css.png", "/icons/js.png"] 
  },
  {
    title: "Cross",
    description: " Git é um sistema de controle de versão distribuído (dVCS). GitHub é uma plataforma de desenvolvimento colaborativo que permite aos desenvolvedores  armazenar, compartilhar e colaborar em projetos de software.",
    icons: ["/icons/git.png", "/icons/github.png"]
  },
  {
    title: " Node.JS",
    description: " Node.js é um ambiente de execução JavaScript server-side que permite executar código JavaScript fora do navegador. Ele é baseado no motor V8 do Google Chrome e é amplamente utilizado para desenvolvimento de aplicações back-end.",
    icons: ["/icons/node-js.png", ]
  },
  {
    title: "Express",
    description: "Express é um framework minimalista para Node.js que facilita a criação de aplicações web e APIs RESTful. Ele fornece uma estrutura robusta para lidar com rotas, middlewares e requisições HTTP.",
    icons: [ "/icons/Express.png"]
  },
  {
    title: "Banco de Dados",
    description: "Bancos de dados são sistemas de armazenamento e organização de informações. Existem dois tipos principais: relacionais (como MySQL e PostgreSQL) e não relacionais (como MongoDB). Cada tipo tem suas vantagens e é escolhido com base nas necessidades do projeto.",
    icons: ["/icons/mysql.png"]
  },
  {
    title: "ORM (Prisma)",
    description: "Prisma é uma ferramenta ORM (Object-Relational Mapping) que permite aos desenvolvedores interagir com bancos de dados de forma mais eficiente e segura. Ele oferece um mapeamento de objetos para tabelas do banco de dados, facilitando o desenvolvimento de aplicações.",
    icons: ["/icons/prisma.webp"]
  },
  {
    title: "NoSQL (MongoDB)",
    description: "MongoDB é um banco de dados NoSQL orientado a documentos. Ele armazena dados em formatos como JSON, o que facilita a manipulação de dados complexos e hierárquicos.",
    icons: ["/icons/mongodb.png"]
  },
  {
    title: "React.JS",
    description: "React é uma biblioteca JavaScript para criar interfaces de usuário. Ele permite construir aplicações web reativas e componentizadas, facilitando o desenvolvimento de interfaces complexas e interativas.",
    icons: ["/icons/react.png"]
  },
  {
    title: "Cloud",
    description: "Cloud é uma plataforma de computação em nuvem que oferece serviços e infraestrutura sob demanda. Ela permite aos desenvolvedores e empresas escalar aplicações, armazenar dados e executar processos de forma flexível e econômica.",
    icons: ["/icons/cloud.png"]
  },
  {
    title: "Project Integration",
    description: "Projeto Integrador em Web é uma disciplina prática para integrar os conhecimentos adquiridos ao longo de um curso Técnico e que é apresentado ao final do curso.",
    icons: ["/projects.png"]
  },
]

export default function Page() {
  // Inicializa o Embla com Autoplay de 4 segundos
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id='curso' className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] bg-gray-950 text-white">
      
      {/* LADO ESQUERDO: Conteúdo Estático */}
      <div className="p-12 flex flex-col justify-center border-none">
        <div  className="inline-block border border-orange-500 px-4 py-1 mb-6 self-start">
          <span className=" text-sm tracking-tighter font-mono   ">O que você vai aprender_</span>
        </div>
        
        <h2 className="text-5xl font-bold text-orange-500 mb-3 leading-tight font-cooper-bold">
          Aulas direto ao ponto
        </h2>
        
        <div className="h-px w-full bg-orange-900/50 mb-2" />
        
        <p className="text-xs tracking-widest uppercase mb-6 opacity-80 font-semibold font-jakarta-regular ">
          Ministrador por:
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            <div className="w-16 h-16 rounded-full border-2 border-transparent overflow-hidden bg-gray-600">
               <Image src={Instrutor} width={64} height={64} alt="Daniel" />
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-transparent overflow-hidden bg-gray-500">
               <Image src={InstrutorGreg} width={64} height={64} alt="Gregorio" />
            </div>
          </div>
          <div>
            <h4 className="text-orange-500 font-bold -mb-4 text-lg font-jakarta-regular">Daniel Cavalcante & Gregorio Arlindo</h4>
            <p className="text-sm opacity-70 font-jakarta-regular">Educadores na Logos Academy</p>
          </div>
        </div>
      </div>

      {/* LADO DIREITO: Slider Autoplay */}
      <div className="relative overflow-hidden bg-gray-950 flex items-center p-8" ref={emblaRef}>
        <div className="flex w-full">
          {slide.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-[#121212] rounded-2xl p-8 border border-none shadow-2xl relative">
                
                {/* Cabeçalho do Card com Ícones */}
                <div className="flex justify-between items-start -mb-5">
                  <h3 className="text-2xl font-bold text-orange-500 font-cooper-bold">{slide.title}</h3>
                  <div className="flex gap-3">
  {slide.icons.map((icon, i) => (
    <div key={i} className="w-8 h-8 bg-transparent rounded flex items-center justify-center p-1 overflow-hidden">
      <Image src={icon} alt={`Icon ${i}`} width={36} height={36} className="object-contain" />
    </div>
  ))}
</div>
                </div>

                <div className="h-[1px] w-full bg-orange-900/30 mb-8" />

                {/* Conteúdo do Slide */}
                <div className="flex items-start gap-4">
                   <div className="mt-1 w-6 h-6 flex-shrink-0 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-1" />
                   </div>
                   <div>
                      <h4 className="text-xl font-semibold mb-3 font-jakarta-regular">Conhecendo o {slide.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm lg:text-base font-jakarta-regular">
                        {slide.description}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Navegação (Inferior Direito) */}
        <div className="absolute bottom-6 right-8 flex gap-3">
          <button 
            onClick={scrollPrev}
            className="w-10 h-10 text-amber-500 hover:text-gray-950 bg-transparent rounded-full border border-orange-500/100 flex items-center justify-center hover:bg-orange-500/100 transition-colors"
          >
            ←
          </button>
          <button 
            onClick={scrollNext}
            className="w-10 h-10 text-amber-500 bg-transparent hover:text-gray-950 rounded-full border border-orange-500/100 flex items-center justify-center hover:bg-orange-500/100 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}