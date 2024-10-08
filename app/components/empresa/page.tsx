"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logos-todo.png";
import Home from "../../../public/empresa.png"



const Page = () => {
  return (
    <>
      <section className="w-full h-[140vh] bg-gray-950 pb-20 pt-10">
        <div className="mx-auto flex w-full max-w-[78.5rem] flex-col gap-6 px-5 lg:flex-row lg:justify-between">
          <div className=" lg:pt-20 flex w-full flex-col items-center justify-center gap-6 text-center lg:items-start 
        lg:text-start"><div className="flex items-end gap-2 whitespace-nowrap text-start">
              <Image alt="Rocketseat" loading="lazy"
                width="150"
                height="90"
                decoding="async" data-nimg="1"
                className="h-15 w-30  color:transparent"
                src={logo} />
              <strong className="font-medium text-white lg:text-xl">Para Empresas</strong>
            </div><div className="space-y-4 lg:space-y-6">
              <h3 className="max-w-[475px] text-3xl font-cooper-bold text-orange-500

                     lg:text-5xl">Capacite seu time de tecnologia e leve sua empresa para o próximo nível</h3>
              <p className="text-white lg:text-lg">Agora você RH ou Tech Lead gerencia o aprendizado
                e acessos de forma simples e fácil, enquanto seu time se desenvolve com conteúdos práticos
                e atualizados em nossa plataforma.</p>
              <a className="group flex w-full items-center justify-center
                         gap-2 rounded-[0.625rem] px-6 text-sm font-bold uppercase leading-[16.41px]
                          text-gary-950 transition-colors disabled:cursor-not-allowed disabled:opacity-75
                           md:w-fit max-h-[3.25rem] py-[1.125rem] bg-orange-500 hover:bg-rocketseat-low 
                           " href="#subscription">FALE COM UM ESPECIALISTA
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg></a></div></div><div className="w-full lg:pt-20 ">
            <Image alt="" loading="eager" width="1303" height="1332"
              decoding="async" data-nimg="1" className="color:transparen rounded-full"
              src={Home} />
          </div></div></section>










      <section className="w-full bg-orange-500 py-20">
        <div className="mx-auto w-full max-w-[78.5rem] space-y-10 px-5 lg:space-y-[60px]">
          <div className="flex w-full flex-col gap-4 lg:items-center">
            <strong className="text-sm  text-white font-bold uppercase tracking-widest text-success-base lg:text-base">
              PORQUE EMBARCAR NA LOGOS ACADEMY</strong>
            <h2 className="text-2xl font-cooper-bold text-success-low lg:max-w-[788px] lg:text-center lg:text-4xl">
              Um ecossistema completo para levar sua empresa e seu time para o próximo nível</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="flex-1 space-y-6 pb-10">
              <strong className="text-xl font-medium text-success-low lg:text-2xl">Para sua empresa</strong>
              <div className="space-y-6"><div className="flex gap-4">
                <div className="h-7 w-6 text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" className="h-7 w-6 text-success-base"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                  </path><path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1">
                  <strong className="text-lg font-medium text-success-low">Retenção de talentos</strong>
                  <p className="text-sm text-white">Investir no desenvolvimento profissional demonstra compromisso com as equipes,
                     reduzindo rotatividade e custos de contratação.</p></div></div><div className="flex gap-4">
                      <div className="h-7 w-6 text-lime-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1"><strong className="text-lg font-medium text-success-low">Produtividade e qualidade</strong>
                    <p className="text-sm text-white">Capacitação eleva habilidades técnicas e resulta em melhorias nas entregas.
                      </p></div></div><div className="flex gap-4"><div className="h-7 w-6 text-lime-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1"><strong className="text-lg font-medium text-success-low">
                          Inovação</strong><p className="text-sm text-white">
                      Manter seu time atualizado aumenta a competitividade e adaptação em um mercado em constante mudança.</p>
                  </div></div></div></div>
            <div className="flex-1 space-y-6 border-t border-gray-100 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <strong className="text-xl font-medium text-success-low lg:text-2xl">Para o colaborador</strong>
              <div className="space-y-6"><div className="flex gap-4"><div className="h-7 w-6 text-lime-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
              </div><div className="space-y-1">
                  <strong className="text-lg font-medium text-success-low">Crescimento profissional</strong>
                  <p className="text-sm text-white">Aprender novas tecnologias e ferramentas torna um profissional
                    reconhecido e valorizado.</p></div></div><div className="flex gap-4"><div className="text-lime-600 h-7 w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="h-7 w-6 text-success-base"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1">
                    <strong className="text-lg font-medium text-success-low">Upgrade no portfólio e currículo</strong>
                    <p className="text-sm text-white">Aprendizado prático aumenta as habilidades técnicas,
                      o nível de experiência e a resolução de desafios e soluções no dia a dia.</p></div></div>
                <div className="flex gap-4"><div className="h-7 text-lime-600 w-6"><svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4">
                  </path></svg></div><div className="space-y-1">
                    <strong className="text-lg font-medium text-success-low">Atualização constante</strong>
                    <p className="text-sm text-white">Permite se manter relevante, inovando, antecipando
                      as tendências futuras e preparando-se para elas.
                    </p></div></div></div></div></div></div>
      </section>


      

    </>
  );
};

export default Page;