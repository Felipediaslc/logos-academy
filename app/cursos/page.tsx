"use client";
import React from "react";
import Image from "next/image";
import ImagemUp from "../../public/educ-up.png";

const Page = () => {
  return (
    <div className="bg-gray-950">
      
      <section className="min-h-screen flex items-center justify-center py-20 lg:py-0">
        <div className="container mx-auto px-6 lg:px-16">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* LADO ESQUERDO: IMAGEM */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              
              <div className="relative w-full max-w-xl aspect-square md:aspect-video lg:aspect-square xl:aspect-[4/3] group">
                
                <Image
                  alt="Vantagens de ser Dev Full-Stack"
                  src={ImagemUp}
                  fill
                  className="rounded-3xl shadow-2xl shadow-orange-500/10 group-hover:shadow-orange-500/20 transition-all duration-500"
                  priority
                />

                {/* Glow suave */}
                <div className="absolute inset-0 rounded-3xl border border-orange-500/10 pointer-events-none" />

              </div>
            </div>

            {/* LADO DIREITO: CONTEÚDO */}
            <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">

              {/* TAG */}
              <div className="inline-block border border-orange-500/40 px-5 py-1.5 rounded-full backdrop-blur-sm">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-400">
                  Vantagens
                </span>
              </div>

              {/* TÍTULO */}
              <h2 className="font-cooper-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                Por que se tornar um{" "}
                <span className="text-orange-400">
                  dev Full-Stack?
                </span>
              </h2>

              {/* LISTA */}
              <div className="divide-y divide-gray-800/60 border-y border-gray-800/60">

                {[
                  "Ser um(a) profissional completo(a) e valorizado(a)",
                  "Trabalhar de casa ou de qualquer lugar no mundo",
                  "Conquistar melhores salários no mercado",
                  "Ser um(a) profissional versátil e produtivo"
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start md:items-center gap-5 py-6 group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-orange-500/30 bg-black/40 group-hover:border-orange-500 transition-all duration-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="#FF7900"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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