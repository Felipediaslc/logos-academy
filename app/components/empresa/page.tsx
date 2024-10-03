"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logos-todo.png";
import Home from "../../../public/empresa.png"



const Page = () => {
  return (
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
  );
};

export default Page;