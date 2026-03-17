"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/logos-todo.png";
import Home from "../../public/empresa.png";

const EmpressPack01: React.FC = () => {
  return (
     <section className="bg-gray-950 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">

          {/* TEXTO */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Logo Logos Academy Empresas"
                width={140}
                height={80}
                className="w-24 sm:w-28 lg:w-32 h-auto"
                priority
              />
              <span className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
                Para Empresas
              </span>
            </div>

            {/* Título */}
            <h1 className="
              max-w-[680px]
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-cooper-bold
              text-orange-500
              leading-[1.1]
              tracking-tight
            ">
              Capacite seu time de tecnologia e leve sua empresa para o próximo nível
            </h1>

            {/* Texto */}
            <p className="
              max-w-[520px]
              text-sm
              sm:text-base
              md:text-lg
              text-gray-400
              leading-relaxed
            ">
              Agora você RH ou Tech Lead gerencia o aprendizado e acessos de forma simples, enquanto seu time evolui com conteúdos práticos e atualizados.
            </p>

            {/* Botão */}
            <div className="pt-2">
              <a
                href="#subscription"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-500
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-gray-950
                  transition-all
                  duration-300
                  hover:bg-orange-400
                  hover:scale-[1.03]
                "
              >
                Fale com um especialista
              </a>
            </div>

          </div>

          {/* IMAGEM */}
          <div className="flex justify-center lg:justify-end">

            <div className="
              w-full
              max-w-[280px]
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
            ">
              <Image
                src={Home}
                alt="Plataforma Logos Academy para empresas"
                className="w-full h-auto object-contain"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EmpressPack01;