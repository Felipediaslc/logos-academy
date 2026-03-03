'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import InstrutorGreg from "../../public/greg.jpeg";
import Instrutor from "../../public/danielcaval.png";

const slide = [
  {
    title: "Html5 Css3 Javascript",
    description: "HTML5 é a quinta versão da linguagem de marcação padrão para páginas web. O CSS é uma linguagem de estilo usada para definir a aparência e a formatação de documentos HTML. JavaScript é uma linguagem de programação utilizada para criar páginas interativas.",
    icons: ["/icons/html5.png", "/icons/css.png", "/icons/js.png"]
  },
  {
    title: "Cross",
    description: "Git é um sistema de controle de versão distribuído. GitHub é uma plataforma colaborativa para armazenar, compartilhar e versionar projetos de software.",
    icons: ["/icons/git.png", "/icons/github.png"]
  },
  {
    title: "Node.JS",
    description: "Node.js é um ambiente de execução JavaScript server-side baseado no motor V8, amplamente utilizado para aplicações back-end escaláveis.",
    icons: ["/icons/node-js.png"]
  },
  {
    title: "Express",
    description: "Express é um framework minimalista para Node.js que facilita a criação de aplicações web e APIs RESTful.",
    icons: ["/icons/Express.png"]
  },
  {
    title: "Banco de Dados",
    description: "Bancos de dados organizam e armazenam informações. Podem ser relacionais como MySQL ou não relacionais como MongoDB.",
    icons: ["/icons/mysql.png"]
  },
  {
    title: "ORM (Prisma)",
    description: "Prisma é um ORM moderno que facilita a comunicação segura e eficiente entre aplicações e bancos de dados.",
    icons: ["/icons/prisma.webp"]
  },
  {
    title: "NoSQL (MongoDB)",
    description: "MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em formato JSON.",
    icons: ["/icons/mongodb.png"]
  },
  {
    title: "React.JS",
    description: "React é uma biblioteca JavaScript para criação de interfaces modernas, reativas e componentizadas.",
    icons: ["/icons/react.png"]
  },
  {
    title: "Cloud",
    description: "Cloud computing permite escalar aplicações, armazenar dados e executar serviços sob demanda.",
    icons: ["/icons/cloud.png"]
  },
  {
    title: "Project Integration",
    description: "Projeto integrador prático que consolida todos os conhecimentos adquiridos durante o curso.",
    icons: ["/projects.png"]
  },
]

export default function Page() {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section
      id="curso"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
    >

      {/* LADO ESQUERDO */}
      <div className="px-8 lg:px-20 py-20 flex flex-col justify-center gap-8">

        <div className="inline-block border border-orange-500/50 px-5 py-1.5 rounded-full backdrop-blur-sm self-start">
          <span className="text-xs tracking-widest uppercase text-orange-400 font-mono">
            O que você vai aprender
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 leading-tight tracking-tight font-cooper-bold">
          Aulas direto <br /> ao ponto
        </h2>

        <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />

        <div className="space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-semibold">
            Ministrado por
          </p>

          <div className="flex items-center gap-5">

            <div className="flex -space-x-4">
              <div className="w-16 h-16 rounded-full border-2 border-orange-500/40 overflow-hidden shadow-lg">
                <Image src={Instrutor} width={64} height={64} alt="Daniel" />
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-orange-500/40 overflow-hidden shadow-lg">
                <Image src={InstrutorGreg} width={64} height={64} alt="Gregorio" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">
                Daniel Cavalcante & Gregorio Arlindo
              </h4>
              <p className="text-sm text-gray-400">
                Educadores na Logos Academy
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* LADO DIREITO */}
      <div
        className="relative overflow-hidden flex items-center px-6 lg:px-12"
        ref={emblaRef}
      >
        <div className="flex w-full">

          {slide.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">

              <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] rounded-3xl p-10 border border-orange-500/10 shadow-xl hover:border-orange-500/30 transition-all duration-300">

                {/* HEADER CARD */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-orange-400 tracking-tight">
                    {slide.title}
                  </h3>

                  <div className="flex gap-3">
                    {slide.icons.map((icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center p-2 border border-orange-500/20"
                      >
                        <Image
                          src={icon}
                          alt={`Icon ${i}`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-orange-500/30 to-transparent mb-8" />

                {/* BODY CARD */}
                <div className="flex items-start gap-5">

                  <div className="mt-1 w-7 h-7 border border-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-orange-400 border-b-[4px] border-b-transparent ml-1" />
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-white">
                      Conhecendo o {slide.title}
                    </h4>

                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base max-w-xl">
                      {slide.description}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CONTROLES */}
        <div className="absolute bottom-8 right-10 flex gap-4">

          <button
            onClick={scrollPrev}
            className="w-11 h-11 text-orange-400 rounded-full border border-orange-500/50 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="w-11 h-11 text-orange-400 rounded-full border border-orange-500/50 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            →
          </button>

        </div>

      </div>
    </section>
  )
}