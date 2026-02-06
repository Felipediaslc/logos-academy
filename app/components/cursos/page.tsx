"use client";
import React from "react";
import Image from "next/image";
import ImagemUp from "../../../public/educ-up.png";

const Page = () => {
  return (
    <div className="bg-gray-950">
      {/* Ajustei o min-h para h-auto em telas pequenas para evitar cortes de conteúdo */}
      <section className="min-h-screen lg:h-screen flex items-center justify-center py-16 lg:py-0">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* LADO ESQUERDO: IMAGEM */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              {/* Ajustado o Aspect Ratio para ser mais fluido no mobile */}
              <div className="relative w-full max-w-xl aspect-square md:aspect-video lg:aspect-square xl:aspect-[4/3]">
                <Image
                  alt="Vantagens de ser Dev Full-Stack"
                  src={ImagemUp}
                  fill
                  className="rounded-2xl  shadow-2xl shadow-orange-900/10"
                  priority
                />
              </div>
            </div>

            {/* LADO DIREITO: CONTEÚDO */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 order-1 lg:order-2">
              
              {/* TAG Vantagens */}
        
         <div className="inline-block border border-orange-500 px-4 py-1 mb-6 self-start">
          <span className="font-mono text-sm text-gray-50 tracking-tighter">Vantagens_</span>
        </div>
              {/* TÍTULO */}
              <h2 className="font-cooper-bold text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                Por que se tornar um <br className="hidden md:block" />
                <span className="text-orange-500">dev Full-Stack?</span>
              </h2>

              {/* LISTA DE BENEFÍCIOS */}
              <div className="divide-y divide-gray-800">
                {[
                  "Ser um(a) profissional completo(a) e valorizado(a)",
                  "Trabalhar de casa ou de qualquer lugar no mundo",
                  "Conquistar melhores salários no mercado",
                  "Ser um(a) profissional versátil e produtivo"
                ].map((text, index) => (
                  <div 
                    key={index} 
                    className="flex items-start md:items-center gap-4 py-4"
                  >
                    <svg
                      className="flex-shrink-0 mt-1 md:mt-0"
                      width="28"
                      height="28"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <circle cx="20" cy="20.5" r="15.5" stroke="#333" />
                      <path
                        d="M25 17.5L18.75 23.75L15 20"
                        stroke="#FF7900"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 font-jakarta-regular ">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
