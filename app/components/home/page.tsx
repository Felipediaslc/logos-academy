"use client";

import React from "react";
import Image from "next/image";
import ImageHome from "../../../public/home-img.png";
import html5 from "../../../public/html5.png";
import Css from "../../../public/css.png";
import Javascript from "../../../public/js.png";
import TypeScript from "../../../public/ts.png";
import NodeJS from "../../../public/node-js.png";
import ReactJs from "../../../public/react.png";
import MongoDB from "../../../public/mongodb.png";
import Prisma from "../../../public/prisma.webp";
import MySQL from "../../../public/mysql.png";
import Express from "../../../public/Express.png";
import Git from "../../../public/git.png";
import GitHub from "../../../public/github.png";



const HomePage: React.FC = () => {
  return (
    <section className="h-[110vh] md:-mt-3 xl:-mt-3 bg-orange-500 md:h-[105vh] md:w-[100vw]
      xl:h-[110vh]  w-screen  flex items-center justify-center bg-cover bg-center
      xl:w-screen
      2xl:-mt-3 2xl:w-screen">
    <div className="flex  -mt-[3.5rem]  md:-mt-[7rem] 
     flex-wrap p-6 xl:-mt-[6rem]">
    <div className="flex  2xl:-ml-[12rem] items-center w-full lg:w-1/2">
      <div className="max-w-2xl lg:-mt-36  mb-8">
        <h2 className="text-[4rem] py-3  -mt-[6rem] font-cooper-bold leading-none
        tracking-tight text-gray-950 sm:py-3 md:py-3 md:mt-[5rem] md:text-[5rem]
           md:w-[49vw] lg:w-[30vw] lg:text-3xl lg:leading-none
         lg:mt-1 lg:mb-3
         xl:text-[5rem] xl:py-2 xl:pl-1 xl:leading-none xl:w-[35vw]
          2xl:w-[25vw]  ">
        Encontre seu futuro
        </h2>
        <p className="py-5 mb-3 sm:mb-3 md:text-[1.3rem] md:w-[60vw] lg:w-[40vw] xl:py-6  -mt-6 text-[1rem] leading-normal
        md:mb-3  lg:text-xl xl:text-1xl xl:-mt-10 xl:pl-1 lg:mb-3 text-white">
          A plataforma completa pra você aprender programação do zero no seu ritmo,
           se tornar Full Stack e se especializar em diversas tecnologias.
        </p>

        <div className="pb-6 flex flex-col -mt-[1.3rem]
        items-start space-y-3 sm:space-x-4
         sm:space-y-0 sm:items-center sm:flex-row">
          <ul className="flex flex-wrap ">
            <li>
            <div className="group/tag w-fit border border-transparent 
             overflow-hidden rounded-full
             hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="15" height="15"
                    decoding="async" data-nimg="1" 
                    src={html5}
                     className="color: transparent;"/>HTML5</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent 
         overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="26" height="19"
                    decoding="async" data-nimg="1" 
                    src={Css}
                     className="color: transparent;"/>Css3</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="21" height="19"
                    decoding="async" data-nimg="1" 
                    src={Javascript}
                     className="color: transparent;"/>Javascript</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="21" height="19"
                    decoding="async" data-nimg="1" 
                    src={TypeScript}
                     className="color: transparent;"/>TypeScript</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="21" height="19"
                    decoding="async" data-nimg="1" 
                    src={NodeJS }
                     className="color: transparent;"/>NodeJS </div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="20" height="19"
                    decoding="async" data-nimg="1" 
                    src={Express}
                     className="color: transparent;"/>Express </div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="15" height="5"
                    decoding="async" data-nimg="1" 
                    src={ReactJs}
                     className="color: transparent;"/>ReactJs</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="19" height="15"
                    decoding="async" data-nimg="1" 
                    src={MongoDB}
                     className="color: transparent;"/>MongoDB</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent  overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="15" height="15"
                    decoding="async" data-nimg="1" 
                    src={Prisma}
                     className="color: transparent;"/>Prisma</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent 
         overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="20" height="15"
                    decoding="async" data-nimg="1" 
                    src={MySQL}
                     className="color: transparent;"/>MySQL</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent 
         overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="20" height="15"
                    decoding="async" data-nimg="1" 
                    src={GitHub}
                     className="color: transparent;"/>GitHub</div></span></div></div>
            </li>
            <li>
            <div className="group/tag w-fit border border-transparent 
          overflow-hidden rounded-full
          hover:from-rocketseat-light hover:to-rocketseat-light">
            <div className="flex items-center bg-orange-700 w-fit p-2
             max-h-8 lg:px-4 lg:h-9 rounded-full px-4 
             font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter 
             [&amp;>span]:text-xs [&amp;>span]:font-bold">
              <span className="text-xs text-white lg:text-sm whitespace-nowrap
               font-medium font-mono">
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="18" height="15"
                    decoding="async" data-nimg="1" 
                    src={Git}
                     className="color: transparent;"/>Git</div></span></div></div>
            </li>
            

          </ul>
       
         
        </div>
      </div>
    </div>
    <div className="flex   md:mt-20
     2xl:ml-48 -mt-16 lg:mt-0 items-center justify-center w-full lg:w-1/2">
      <div className="  ">
        <Image
          src={ImageHome}
          width="916"
          height="917"
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
