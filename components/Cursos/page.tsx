"use client";
import React from "react";
import Image from "next/image";
import Html5 from "../../public/html.png";
import Css from "../../public/css.png";
import Javascript from "../../public/js.png";
import Git from "../../public/git.png";
import GitHub from "../../public/github.png";
import NodeJS from "../../public/node-js.png";
import Express from "../../public/Express.png";
import MongoDB from "../../public/mongodb.png";
import MySQL from "../../public/mysql.png";
import Prisma from "../../public/prisma.webp";
import ReactJs from "../../public/react.png";
import Cloud from "../../public/cloud.png";
import Project from "../../public/project.png"


const Page = () => {
  return (
    <section   className=" h-screem bg-gray-950  md:px-0 md:py-0  md:w-full md:h-[250vh]  md:bg-gray-950 
      lg:bg-gray-950  lg:h-[335vh]  xl:w-full xl:bg-gray-950 xl:h-[235vh] xl:py-0  xl:-mt-[1.5rem] xl:justify-center
      2xl:h-[140vh]" > 
      <div
        className="mt-[9rem] mb-[3rem] flex flex-col md:mt-[5rem] md:mb-[5rem]
       lg:mt-[5rem] lg:mb-[5rem]
       xl:mt-[6.1rem] z-0 items-center gap-4"
      >
        <h1
          className="tracking-widest text-orange-500 font-cooper-bold 
        lg:text-[3.5rem] text-[50px]"
        >
          Cursos
        </h1>
        <p className="tracking-widest  text-slate-50 lg:text-[1.5rem] text-[20px]">
          Full-Stack JS
        </p>
      </div>

      <div
        className="flex md:p-0 xl:p-0  xl:-mt-[6rem]
        justify-center flex-wrap"
      >
        <div
          className=" py-6 px-10
           
          xl:px-12  xl:py-16 
          xl:w-[49.2vw]    lg:space-y-8 lg:py-16
          space-y-8 relative  
          before:absolute before:inset-0
          before:ml-[3.6rem] before:-translate-x-px 
          md:before:mx-auto md:before:translate-x-0
          before:h-full before:w-0.5 before:bg-gradient-to-b
          before:from-transparent  before:via-orange-500 
          before:to-transparent" 
        >
          <div
            className="relative  flex items-center 
            lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
            justify-between  md:justify-start md:pr-[1rem] md:h-[10rem]
            xl:mr-4
            sm:justify-start sm:pr-[15rem]
            md:odd:flex-row-reverse group 
            is-active"
          >
            <div
              className="flex items-center justify-center w-10 h-10 
              rounded-full border-none 
            group-[.is-active]:bg-orange-500 
            group-[.is-active]:text-gray-950   md:order-1
              md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] md:h-[15vh]
             lg:w-[calc(50%-3rem)] xl:h-[30vh]
             bg-transparent border border-1 border-yellow-800 p-4 rounded b"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">Html5 Css3 JavaScript</div>
                <time className="flex items-strat  ">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Html5}
                     className="color: transparent;"/></div>
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Css}
                     className="color: transparent;"/></div>
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Javascript}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="relative  flex items-center 
            lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
            justify-between  md:justify-start  md:pl-[1rem] md:h-[10rem] 
            sm:justify-start sm:pr-[15rem]
            md:odd:flex-row-reverse group   
            is-active"
          >
            <div
              className="flex items-center justify-center
           w-10 h-10 rounded-full border-none
         bg-slate-300 group-[.is-active]:bg-orange-500
         text-slate-500 group-[.is-active]:text-gray-950
           shadow shrink-0 md:order-1 md:ml-[1px] xl:ml-0
           md:group-odd:-translate-x-1/2
           md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(100%-15rem)] md:h-[15vh]
              lg:w-[calc(50%-2.5rem)]
              xl:h-[30vh]
            bg-transparent border border-1 border-yellow-800 p-4 rounded "
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">Cross</div>
                <time className="flex items-strat">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Git}
                     className="color: transparent;"/></div>
                <div className="flex items-center gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={GitHub}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="relative  flex items-center 
            lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
            justify-between  md:justify-start  md:pr-[1rem] md:h-[10rem]
            sm:justify-start sm:pr-[15rem]
            md:odd:flex-row-reverse group 
            is-active"
          >
            <div
              className="flex items-center justify-center
               w-10 h-10 rounded-full border-none
              group-[.is-active]:bg-orange-500  group-[.is-active]:text-gray-950
               shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] md:h-[15vh] 
               lg:w-[calc(50%-2.5rem)]
              xl:h-[30vh]
             bg-transparent border border-1 border-yellow-800 p-4 rounded "
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">Node.JS</div>
                <time className="">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={NodeJS}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="rrelative  flex items-center 
            lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
            justify-between  md:justify-start
              md:pl-[1rem]   md:h-[10rem]
            sm:justify-start sm:pr-[15rem]
            md:odd:flex-row-reverse group 
            is-active"
          >
             <div
              className="flex items-center justify-center
               w-10 h-10 rounded-full border-none
              group-[.is-active]:bg-orange-500  
                group-[.is-active]:text-gray-950
               shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(100%-15rem)]
               md:h-[15vh]
             lg:w-[calc(50%-2.5rem)]
             xl:h-[30vh]
             bg-transparent border border-1 border-yellow-800 p-2 rounded"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">Express</div>
                <time className="">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Express}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
          <div
            className="relative flex items-center lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
              md:justify-start   md:pr-[1rem] md:h-[10rem]
              sm:justify-start sm:pr-[15rem]
              justify-between  md:odd:flex-row-reverse
              group is-active"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full
              border-none
            bg-slate-300 group-[.is-active]:bg-orange-500 text-slate-500 group-[.is-active]:text-gray-950
              shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)]
               md:w-[calc(50%-3rem)] md:h-[15vh]
             lg:w-[calc(50%-2.5rem)]
               xl:h-[30vh]
           bg-transparent border border-1 border-yellow-800  p-2 rounded  shadow"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">Banco de Dados</div>
                <time className=" ">
                
                
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={MySQL}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>

        <div
          className="py-16 px-10
          md:py-20 md:px-10 
          xl:px-10  xl:py-16 
          xl:w-[49.5vw]   
          space-y-8 relative  
          before:absolute before:inset-0
          before:ml-[3.6rem] before:-translate-x-px 
          md:before:mx-auto md:before:translate-x-0
          before:h-full before:w-0.5 before:bg-gradient-to-b
          before:from-transparent before:via-orange-500
          before:to-transparent " 
        >
          <div
            className="relative  flex items-center 
              lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
              justify-between  md:justify-start md:pr-[1rem] md:h-[10rem]
              sm:justify-start sm:pr-[15rem]
              md:odd:flex-row-reverse group 
              is-active"
          >
            <div
              className="flex items-center justify-center w-10 h-10 
              rounded-full border-none bg-slate-300
            group-[.is-active]:bg-orange-500 text-slate-500
            group-[.is-active]:text-gray-950 shadow shrink-0 md:order-1
             md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] md:h-[15vh]
             lg:w-[calc(50%-2.5rem)]
           xl:h-[30vh]
           bg-transparent border border-1 border-yellow-800 p-4 rounded " >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">ORM</div>
                <time className="">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Prisma}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="rrelative  flex items-center 
            lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
            justify-between  md:justify-start md:bg-transparent 
             md:pr-[11.2rem] md:h-[10rem]
            sm:justify-start sm:pr-[15rem]
            md:odd:flex-row-reverse group 
            is-active"
          >
            <div
              className="flex items-center justify-center w-10 
              h-10 rounded-full border-none
            bg-slate-300 group-[.is-active]:bg-orange-500
             text-slate-500 group-[.is-active]:text-gray-950
              shadow shrink-0
              md:ml-[0rem] md:order-1 md:group-odd:-translate-x-1/2
               md:group-even:translate-x-1/2
              xl:ml-0"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(100%-16rem)] md:h-[15vh]
              lg:w-[calc(50%-2.5rem)]
            xl:h-[24vh]
            bg-transparent border border-1 border-yellow-800 p-2 rounded "
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">NoSQL</div>
                <time className="font-caveat font-medium text-indigo-500">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="21" height="19"
                    decoding="async" data-nimg="1" 
                    src={MongoDB}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="relative  flex items-center 
           lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
           justify-between  md:justify-start md:pr-[1rem] md:h-[10rem]
           sm:justify-start sm:pr-[15rem]
           md:odd:flex-row-reverse group 
           is-active"
          >
            <div
              className="flex items-center justify-center w-10 h-10 
              rounded-full border-none bg-slate-300
            group-[.is-active]:bg-orange-500 text-slate-500
            group-[.is-active]:text-gray-950 shadow shrink-0 md:order-1
              md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] md:h-[15vh]
             lg:w-[calc(50%-2.5rem)]
             xl:h-[30vh]
             bg-transparent border border-1 border-yellow-800 p-4 rounded "
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">React.JS</div>
                <time className="font-caveat font-medium text-indigo-500">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={ReactJs}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="rrelative  flex items-center 
            lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
            justify-between  md:justify-start  md:pr-[11.2rem] md:h-[10rem]
            sm:justify-start sm:pr-[15rem]
            md:odd:flex-row-reverse group 
            is-active"
          >
            <div
              className="flex items-center justify-center w-10 
              h-10 rounded-full border-none
            bg-slate-300 group-[.is-active]:bg-orange-500
             text-slate-500 group-[.is-active]:text-gray-950
              shadow shrink-0
             md:ml-[0rem] md:order-1 md:group-odd:-translate-x-1/2
              md:group-even:translate-x-1/2
              xl:ml-0"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(100%-16rem)] md:h-[15vh]
             lg:w-[calc(50%-2.5rem)]
            xl:h-[24vh]
             bg-transparent border border-1 border-yellow-800 p-2 rounded "
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold tracking-widest text-orange-500">Cloud</div>
                <time className="font-caveat font-medium text-indigo-500">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="30" height="19"
                    decoding="async" data-nimg="1" 
                    src={Cloud}
                     className="color: transparent;"/></div>
                </time>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          <div
            className="relative  flex items-center 
           lg:justify-normal lg:p-0 xl:justify-normal xl:p-0
           justify-between  md:justify-start md:pr-[1rem] md:h-[10rem] 
           sm:justify-start sm:pr-[15rem]
           md:odd:flex-row-reverse group 
           is-active "
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white
            bg-slate-300 group-[.is-active]:bg-orange-500 text-slate-500 group-[.is-active]:text-emerald-50
              shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
              </svg>
            </div>

            <div
              className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] md:h-[15vh]  lg:w-[calc(50%-2.5rem)]
             xl:h-[24vh]
             bg-transparent p-2 rounded border border-1 border-gray-100"
            >
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-orange-500">
                  Project Integration
                </div>
                <time className="">
                <div className="flex items-strat gap-2">
                  <Image alt="Formação Full-Stack"
                   loading="lazy" width="80" height="19"
                    decoding="async" data-nimg="1" 
                    src={Project}
                     className="color: transparent;"/></div>
                
                </time>
              </div>
              <div className="text-orange-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>
        </div>
      
 </section>
  );
};

export default Page;
