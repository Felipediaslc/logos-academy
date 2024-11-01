"use client";
import React from "react";
import Image from "next/image";
import ImagemUp from "../../../public/educ-up.png";
import Html5 from "../../../public/html5.png";
import Javascript from "../../../public/js.png";
import Css from "../../../public/css.png";
import InstrutorGreg from "../../../public/greg.jpeg";
import Instrutor from "../../../public/danielcaval.png";
import Git from "../../../public/git.png";
import GitHub from "../../../public/github.png";
import NodeJS from "../../../public/node-js.png";
import Express from "../../../public/Express.png";
import MongoDB from "../../../public/mongodb.png";
import MySQL from "../../../public/mysql.png";
import Prisma from "../../../public/prisma.webp";
import ReactJs from "../../../public/react.png";
import Cloud from "../../../public/cloud.png";
import Projects from "../../../public/projects.png";

const Page = () => {
  return (
    <div className="bg-gray-950 ">
      <section className="bg-gray-950 py-20">
        <div
          className="mx-auto flex w-full max-w-[78.5rem]
 flex-col justify-between gap-10 px-5 lg:flex-row"
        >
          <div className="h-fit lg:sticky lg:top-32">
            <div
              className="group/tag w-fit border
  border-transparent bg-gradient-to-b
   from-orange-500 to-orange-500 
   bg-origin-border overflow-hidden
    rounded"
            >
              <div
                id="curso"
                className="flex 
    items-center bg-gray-950 w-fit p-2 
max-h-8 lg:px-4 lg:h-9 rounded"
              >
                <span
                  className="text-xs lg:text-sm whitespace-nowrap
 text-transparent bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono"
                >
                  O que você vai aprender_
                </span>
              </div>
            </div>
            <h2
              className="mt-4 text-2xl font-cooper-bold
  text-orange-500 lg:max-w-[23.6875rem] 
  lg:text-3xl"
            >
              Aulas direto ao ponto
            </h2>
            <div
              className="my-4 h-px w-full bg-orange-500
   lg:my-10"
            ></div>
            <div className="space-y-4">
              <p
                className="text-sm font-medium uppercase 
   tracking-[1.4px] text-white"
              >
                Ministrador por:
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    className="inline-block h-10 w-10 rounded-full "
                    src={Instrutor}
                    alt=""
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full "
                    src={InstrutorGreg}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-bold text-orange-500">
                    Daniel Cavalcante &amp; Gregorio Arlindo
                  </p>
                  <p className="text-xs text-white">
                    Educadores na Logos Academy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:max-w-[43.5rem]">
            <div
              className="flex flex-col gap-4 overflow-hidden"
              data-orientation="vertical"
            >
              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Html5 Css3 Javascript
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Javascript}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>

                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="HTML"
                                        loading="lazy"
                                        width="24"
                                        height="24"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Html5}
                                        className="color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="CSS"
                                        loading="lazy"
                                        width="40"
                                        height="40"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Css}
                                        className="color: transparent; lg:-mt-2 lg:-ml-3"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o Html5 Css3 Javascript
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          HTML5 é a quinta versão da linguagem de marcação
                          padrão para páginas web. O CSS, ou Cascading Style
                          Sheets, é uma linguagem de folha de estilo usada para
                          descrever a aparência e a formatação de um documento
                          escrito em HTML. JavaScript (JS) é uma linguagem de
                          programação usada para criar páginas web interativas,
                          com funcionalidades como animações, mapas interativos
                          e atualização de feeds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Cross
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Git}
                                        className=" lg:mt-2
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>

                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="HTML"
                                        loading="lazy"
                                        width="38"
                                        height="38"
                                        decoding="async"
                                        data-nimg="1"
                                        src={GitHub}
                                        className="color: transparent ;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o Cross
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          Git é um sistema de controle de versão distribuído
                          (dVCS). GitHub é uma plataforma de desenvolvimento
                          colaborativo que permite aos desenvolvedores
                          armazenar, compartilhar e colaborar em projetos de
                          software.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Node.JS
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={NodeJS}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o Node.JS
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          O NodeJS é construído sob o motor v8 do Google Chrome.
                          Isso o torna um ambiente de execução Javascript e faz
                          com que o idioma não dependa mais do navegador para
                          ser executado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Express
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Express}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o Express
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          Express.js é o framework backend mais popular para o
                          Node.js, e faz parte do ecossistema JavaScript.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Banco de Dados
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={MySQL}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o Banco de Dados
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          Banco de Dados relacional é um modelo de organização
                          de dados que armazena informações em tabelas, com o
                          objetivo de facilitar a compreensão das relações entre
                          os dados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                ORM (Prisma)
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Prisma}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o ORM Prisma
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          O ORM Prisma é um recurso utilizado durante a fase de
                          desenvolvimento de software para mapear objetos
                          presentes em um banco de dados relacional (SQL).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                NoSQL (MongoDB)
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={MongoDB}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o NoSQL (MongoDB)
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          O NoSQL, também conhecido como (não somente SQL) ou
                          (não SQL), é uma abordagem de projeto de banco de
                          dados que possibilita o armazenamento e a consulta de
                          dados fora das estruturas tradicionais encontradas nos
                          bancos de dados relacionais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                React.JS
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="28"
                                        height="28"
                                        decoding="async"
                                        data-nimg="1"
                                        src={ReactJs}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o React.JS
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          O React JS é uma biblioteca com base na linguagem
                          JavaScript utilizada para o desenvolvimento de
                          interfaces de usuários (UI) em aplicativos web.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Cloud
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="32"
                                        height="31"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Cloud}
                                        className=" lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Conhecendo o Cloud
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          Cloud, ou computação em nuvem, é um termo que se
                          refere a uma rede de servidores remotos que funcionam
                          como um único ecossistema.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" overflow-hidden rounded-[10px]">
                <div className="bg-gray-950 rounded-[10px]">
                  <div
                    data-state="open"
                    data-orientation="vertical"
                    className="overflow-hidden"
                  >
                    <h3
                      data-orientation="vertical"
                      data-state="open"
                      className="overflow-hidden bg-transparent"
                    >
                      <button
                        type="button"
                        aria-controls="radix-:ro:"
                        aria-expanded="true"
                        data-state="open"
                        data-orientation="vertical"
                        id="radix-:rn:"
                        className="group flex w-full items-center justify-between  bg-zinc-900 p-6 text-white outline-rocketseat-light"
                        data-radix-collection-item=""
                      >
                        <div className="flex w-full items-center gap-6">
                          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <p className="text-xs  uppercase tracking-widest text-gray-300"></p>
                              <strong className="text-xl font-cooper-bold text-orange-500">
                                Project Integration
                              </strong>
                            </div>
                            <div className="flex items-center gap-2">
                              <ul
                                className="flex max-w-full gap-4 tracking-[1.4px] max-sm:overflow-y-hidden max-sm:overflow-x-scroll 
md:flex-wrap"
                              >
                                <li>
                                  <button data-state="closed">
                                    <div className="h-12 w-12">
                                      <Image
                                        alt="JavaScript"
                                        loading="lazy"
                                        width="40"
                                        height="40"
                                        decoding="async"
                                        data-nimg="1"
                                        src={Projects}
                                        className=" text-white lg:-mt-1
                color: transparent;"
                                      />
                                    </div>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div
                      data-state="open"
                      id="radix-:ro:"
                      role="region"
                      aria-labelledby="radix-:rn:"
                      data-orientation="vertical"
                      className="bg-zinc-900 px-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown
--radix-accordion-content-height: var(--radix-collapsible-content-height); 
 --radix-accordion-content-width: var(--radix-collapsible-content-width);
  --radix-collapsible-content-height: 171px; --radix-collapsible-content-width: 694px;"
                    >
                      <div className="space-y-2 border-t border-orange-500 py-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          <strong className="text-lg font-medium text-white">
                            Apresentação do Project Integration
                          </strong>
                        </div>

                        <p className="text-sm text-white">
                          Projeto Integrador em Web é uma disciplina prática
                          para integrar os conhecimentos adquiridos ao longo de
                          um curso Técnico e que é apresentado ao final do
                          curso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 lg:h-[110vh] ">
        <div className="mx-auto w-full max-w-[100vw] px-2">
          <div
            className="border border-transparent bg-origin-border
overflow-hidden "
          >
            <div className="rounded-[10px] flex flex-col gap-10 bg-transparent p-6 lg:p-[3.75rem]">
              <div className="flex flex-col gap-10 lg:flex-row  lg:mt-16   lg:items-center">
                <div className="max-lg:w-full">
                  <Image
                    alt=""
                    loading="lazy"
                    width="532"
                    height="400"
                    decoding="async"
                    data-nImage="1"
                    className="rounded-[10px] max-lg:w-full md:h-[45vh] md:ml-[6rem] md:w-[68vw] lg:h-[70vh] lg:w-[50vw]  lg:ml-[1rem] color: transparent;"
                    src={ImagemUp}
                  />
                </div>
                <div className="space-y-4 lg:max-w-[524px]">
                  <div
                    className="group/tag w-fit border border-transparent bg-gradient-to-b
            from-orange-600 to-orange-600 bg-origin-border overflow-hidden rounded"
                  >
                    <div className="flex items-center bg-gray-950 w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                      <span
                        className="text-xs lg:text-sm whitespace-nowrap text-transparent
                  bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono md:text-[1.5rem] "
                      >
                        <h2>Vantagens__</h2>
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-cooper-bold text-white lg:text-4xl">
                    Por que se tornar um dev Full-Stack?
                  </p>

                  <div className="flex items-center gap-4  pt-4">
                    <svg
                      fill="none"
                      height="41"
                      viewBox="0 0 40 41"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className=""
                        cx="20"
                        cy="20.2148"
                        r="15.5"
                      ></circle>
                      <circle
                        className="fill-gary-950"
                        cx="20"
                        cy="20.2148"
                        r="12"
                      ></circle>
                      <path
                        d="M25 17.2148L18.75 23.4648L15 19.7148"
                        stroke="#FF7900"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      Ser um(a) profissional completo(a) e valorizado(a)
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg
                      fill="none"
                      height="41"
                      viewBox="0 0 40 41"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className=""
                        cx="20"
                        cy="20.2148"
                        r="15.5"
                      ></circle>
                      <circle
                        className="fill-gary-950"
                        cx="20"
                        cy="20.2148"
                        r="12"
                      ></circle>
                      <path
                        d="M25 17.2148L18.75 23.4648L15 19.7148"
                        stroke="#FF7900"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      Trabalhar de casa ou de qualquer lugar no mundo
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg
                      fill="none"
                      height="41"
                      viewBox="0 0 40 41"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className=""
                        cx="20"
                        cy="20.2148"
                        r="15.5"
                      ></circle>
                      <circle
                        className="fill-gary-950"
                        cx="20"
                        cy="20.2148"
                        r="12"
                      ></circle>
                      <path
                        d="M25 17.2148L18.75 23.4648L15 19.7148"
                        stroke="#FF7900"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      Conquistar melhores salários no mercado
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg
                      fill="none"
                      height="41"
                      viewBox="0 0 40 41"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className=""
                        cx="20"
                        cy="20.2148"
                        r="15.5"
                      ></circle>
                      <circle
                        className="fill-gary-950"
                        cx="20"
                        cy="20.2148"
                        r="12"
                      ></circle>
                      <path
                        d="M25 17.2148L18.75 23.4648L15 19.7148"
                        stroke="#FF7900"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      Ser um(a) profissional versátil e produtivo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
