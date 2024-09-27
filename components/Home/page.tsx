"use client";

import React from "react";
import Image from "next/image";
import ImageHome from "../../public/home-img.png";
import Html5 from "../../public/html.png";
import Css from "../../public/css.png";
import Javascript from "../../public/js.png";
import TypeScript from "../../public/ts.png";
import NodeJS from "../../public/node-js.png";
import ReactJs from "../../public/react.png";
import MongoDB from "../../public/mongodb.png";
import Prisma from "../../public/prisma.webp";
import MySQL from "../../public/mysql.png";
import Express from "../../public/Express.png";
import Git from "../../public/git.png";
import GitHub from "../../public/github.png";



const HomePage: React.FC = () => {
  return (
    <section className="h-[110vh]  xl:-mt-3 bg-orange-500 md:h-[105vh] md:w-[100vw]
      xl:h-[110vh]  w-screen  flex items-center justify-center bg-cover bg-center
      xl:w-screen
      2xl:-mt-3 2xl:w-screen">
    <div className="flex  flex-wrap p-6 xl:-mt-[8rem]">
    <div className="flex items-center w-full lg:w-1/2">
      <div className="max-w-2xl mb-8">
        <h1 className="text-[4rem] -mt-[1rem] font-cooper-bold leading-none
        tracking-tight text-gray-950 lg:text-4xl lg:leading-none lg:mt-3 
         xl:text-[6rem] xl:p-8  xl:leading-none ">
        Encontre seu futuro
        </h1>
        <p className="py-5 -mt-3 text-xl leading-normal
          lg:text-xl xl:text-2xl xl:-mt-10 text-gray-300">
          A plataforma completa pra você aprender programação do zero no seu ritmo,
           se tornar Full Stack e se especializar em diversas tecnologias.
        </p>

        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
          <ul className="flex flex-wrap ">
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={Html5}
                     className="color: transparent;"/>HTML5</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={Css}
                     className="color: transparent;"/>Css3</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={Javascript}
                     className="color: transparent;"/>Javascript</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={TypeScript}
                     className="color: transparent;"/>TypeScript</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={NodeJS }
                     className="color: transparent;"/>NodeJS </div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={Express}
                     className="color: transparent;"/>Express </div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={ReactJs}
                     className="color: transparent;"/>ReactJs</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="10" height="15"
                    decoding="async" data-nimg="1" 
                    src={MongoDB}
                     className="color: transparent;"/>MongoDB</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={Prisma}
                     className="color: transparent;"/>Prisma</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={MySQL}
                     className="color: transparent;"/>MySQL</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={GitHub}
                     className="color: transparent;"/>GitHub</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b
         from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-black w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-gray-100 lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="23" height="21"
                    decoding="async" data-nimg="1" 
                    src={Git}
                     className="color: transparent;"/>Git</div></span></div></div>
            </li>
            

          </ul>
       
         
        </div>
      </div>
    </div>
    <div className="flex -mt-16 lg:mt-0 items-center justify-center w-full lg:w-1/2">
      <div className="">
        <Image
          src={ImageHome}
          width="616"
          height="617"
          className={"object-cover"}
          alt="Hero Illustration"
          loading="eager"
          
        />
      </div>
    </div>
  </div>
  </section>
  );
};

export default HomePage;
