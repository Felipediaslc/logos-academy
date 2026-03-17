"use client";

import React from "react";
import { Check as IconCheck } from "lucide-react";

const EmpressPack02: React.FC = () => {
  return (
    <section className="w-full bg-orange-500 py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <strong className="text-[12px] sm:text-sm md:text-base font-bold uppercase tracking-widest text-gray-950">
            PORQUE EMBARCAR NA LOGOS ACADEMY
          </strong>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cooper-bold text-gray-950 leading-tight max-w-[700px]">
            Um ecossistema completo para levar sua empresa e seu time para o próximo nível
          </h2>
        </div>

        {/* CONTEÚDO */}
        <div className="mt-16 sm:mt-20 grid gap-12 sm:gap-16 md:grid-cols-2">

          {/* PARA EMPRESA */}
          <div className="flex flex-col space-y-8">
            <strong className="text-xl sm:text-2xl lg:text-3xl font-cooper-bold text-gray-50">
              Para sua empresa
            </strong>

            <div className="space-y-6">
              {[
                [
                  "Retenção de talentos",
                  "Investir no desenvolvimento profissional demonstra compromisso com as equipes, reduzindo rotatividade."
                ],
                [
                  "Produtividade e qualidade",
                  "Capacitação eleva habilidades técnicas e melhora entregas."
                ],
                [
                  "Inovação",
                  "Times atualizados aumentam competitividade."
                ]
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 items-start">
                  <IconCheck className="text-lime-600 shrink-0 mt-1 w-6 h-6 sm:w-7 sm:h-7" />

                  <div>
                    <strong className="text-lg sm:text-xl text-gray-950 font-jakarta-regular">
                      {title}
                    </strong>

                    <p className="text-sm sm:text-base lg:text-lg text-white/90 font-jakarta-regular leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PARA COLABORADOR */}
          <div className="flex flex-col space-y-8 md:border-l md:pl-12 border-white/30">
            <strong className="text-xl sm:text-2xl lg:text-3xl font-cooper-bold text-amber-50">
              Para o colaborador
            </strong>

            <div className="space-y-6">
              {[
                [
                  "Crescimento profissional",
                  "Aprender novas tecnologias valoriza o profissional."
                ],
                [
                  "Upgrade no portfólio",
                  "Projetos práticos aumentam experiência."
                ],
                [
                  "Atualização constante",
                  "Mantém relevância no mercado."
                ]
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 items-start">
                  <IconCheck className="text-lime-600 shrink-0 mt-1 w-6 h-6 sm:w-7 sm:h-7" />

                  <div>
                    <strong className="text-lg sm:text-xl text-gray-950 font-jakarta-regular">
                      {title}
                    </strong>

                    <p className="text-sm sm:text-base lg:text-lg text-white/90 font-jakarta-regular leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmpressPack02;