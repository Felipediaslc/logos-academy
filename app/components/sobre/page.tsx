"use client";
import React from "react";
import Image from "next/image";
import Instrutor from "../../../public/danielcaval.png";
import InstrutorGreg from "../../../public/greg.jpeg";
import LogosAcademy from "../../../public/LOGOS-ACADEMY.gif";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";



const Page = () => {




  return (


    <div id="sobre" className="bg-gray-950 pt-28">

      <section className="w-full min-h-screen  py-1">
  <div
    className="
      mx-auto
      flex
      max-w-7xl
      flex-col
      items-center
      gap-10
      px-5
      py-24
      lg:flex-row
      lg:items-center
      lg:justify-between
    "
  >
    {/* TEXTO */}
    <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left  ">

      {/* TAG */}
      <div className="mb-4 w-fit overflow-hidden rounded border border-orange-600 bg-gradient-to-b from-orange-600 to-orange-600">
        <div className="flex items-center rounded bg-gray-950 px-4 py-2">
          <span className="bg-gradient-to-r from-white to-white bg-clip-text font-mono text-xs font-medium text-transparent sm:text-sm md:text-base">
            Sobre a Logos Academy_
          </span>
        </div>
      </div>

      {/* TÍTULO */}
      <h2
        className="
          mt-4
          max-w-xl
          text-2xl
          font-cooper-bold
          text-orange-400
          sm:text-3xl
          md:text-4xl
          lg:text-3xl
        "
      >
        Somos uma plataforma de aprendizado contínuo em programação.
      </h2>

      {/* TEXTO */}
      <p
        className="
          mt-6
          max-w-2xl
          text-justify
          text-sm
          text-gray-200
          sm:text-base
          md:text-lg
          lg:text-base
          font-jakarta-regular
        "
      >
        A Logos Academy é uma escola de programação que transforma
        a vida de alunos e alunas através do ensino de tecnologia e programação.
        Nosso objetivo é adquirir e desenvolver com as ferramentas,
        habilidades e conhecimentos técnicos necessários para resolver
        situações reais. Também procuramos aprender a pensar como um
        programador, desde a montagem de sistemas até a identificação
        de bugs, propondo soluções e atualizações baseadas nas mudanças
        da tecnologia. Incentivamos constantemente a pesquisa, leitura
        de documentação técnica e o trabalho em equipe.
      </p>
    </div>

    {/* IMAGEM */}
    <div className="flex w-full justify-center lg:justify-end">
      <Image
        src={LogosAcademy}
        alt="Logos Academy"
        className="
          rounded-full
          w-56
          sm:w-72
          md:w-80
          lg:w-[420px]
          h-auto
        "
        priority
      />
    </div>
  </div>
</section>

/*  * /

      <section className="relative py-10 bg-transparent">

  <div
    className="
      relative
      mx-auto
      flex
      w-full
      max-w-4xl
      flex-col
      items-center
      justify-center
      px-5
      lg:max-w-5xl
    "
  >
    {/* TAG */}
    <div className="mb-8 w-fit overflow-hidden rounded border border-orange-600 bg-gradient-to-b from-orange-600 to-orange-600">
      <div className="flex items-center rounded bg-gray-950 px-4 py-2">
        <span className="bg-gradient-to-r from-white to-white bg-clip-text font-mono text-xs font-medium text-transparent sm:text-sm md:text-base">
          Perguntas_
        </span>
      </div>
    </div>

    {/* ACCORDION */}
    <Accordion
      type="single"
      collapsible
      className="
        flex
        w-full
        flex-col
        justify-center
        gap-4
        text-sm
        sm:text-base
        md:text-lg
        font-jakarta-regular
      "
    >
      {/* ITEM 1 */}
      <AccordionItem value="item-1 ">
        <AccordionTrigger>
          O que vamos alcançar no curso?
        </AccordionTrigger>

        <AccordionContent>
          <ul className="space-y-3 text-justify list-none font-jakarta-regular  ">
            <li>- Desenvolver um site full stack.</li>
            <li>- Identificar e resolver problemas.</li>
            <li>- Trabalhar em equipe.</li>
            <li>- Buscar documentação e comunidades.</li>
            <li>- Criar projetos escaláveis e seguros.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 2 */}
      <AccordionItem value="item-2">
        <AccordionTrigger>
          O que vamos aprender no curso?
        </AccordionTrigger>

        <AccordionContent>
          <div className="space-y-6  ">

            {/* BLOCO */}
            <div className="border-b border-orange-500 pb-0.5  ">
              <span className="font-cooper-bold tracking-widest text-orange-500  ">
                Introdução ao curso
              </span>
              <p className="mt-2 text-white  mb-0.5 font-jakarta-regular">
                Conheceremos terminal, VS Code e ferramentas do curso.
              </p>
            </div>

            <div className="border-b border-orange-500 pb-0.5">
              <span className="font-cooper-bold tracking-widest text-orange-500">
                Node.js e JavaScript
              </span>
              <p className="mt-2 text-white mb-0.5 font-jakarta-regular">
                Explorando o potencial do ecossistema Node.
              </p>
            </div>

            <div className="border-b border-orange-500 pb-0.5">
              <span className="font-cooper-bold tracking-widest text-orange-500">
                Metodologias
              </span>
              <p className="mt-2 text-white mb-0.5 font-jakarta-regular">
                Git, Scrum e ferramentas de mercado.
              </p>
            </div>

            <div className="border-b border-orange-500 pb-0.5">
              <span className="font-cooper-bold tracking-widest text-orange-500">
                React
              </span>
              <p className="mt-2 text-white mb-0.5 font-jakarta-regular ">
                Componentes, ciclo de vida e integração full stack.
              </p>
            </div>

          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>




/*  * /



      <section className="bg-transparent py-16">

  <div className="mx-auto w-full max-w-6xl px-5">

    <div className="overflow-hidden rounded-xl border border-transparent bg-origin-border">

      <div className="flex flex-col gap-12 rounded-xl bg-transparent p-6 lg:flex-row lg:items-center lg:p-16">

        {/* IMAGEM */}
        <div className="flex w-full justify-center lg:w-1/2">

          <Image
            src={Instrutor}
            alt="Instrutor Logos Academy"
            className="
              rounded-full
              w-56
              sm:w-72
              md:w-80
              lg:w-105
              h-auto
              object-cover
            "
            priority
          />

        </div>

        {/* TEXTO */}
        <div className="w-full space-y-6 lg:w-1/2">

          {/* TAG */}
          <div className="w-fit overflow-hidden rounded border border-orange-600 bg-gradient-to-b from-orange-600 to-orange-600">
            <div className="flex items-center rounded bg-gray-950 px-4 py-0.5">
              <h2 className="my-1 bg-gradient-to-r from-white to-white bg-clip-text font-mono text-xs font-medium text-transparent sm:text-sm md:text-base">
                Instrutor_
              </h2>
            </div>
          </div>

          {/* NOME */}
          <p className="text-2xl font-cooper-bold text-orange-500 sm:text-3xl lg:text-4xl">
            Daniel Cavalcante de Souza
          </p>

          {/* BIO */}
          <p className="text-sm text-justify text-white sm:text-base md:text-lg lg:text-base font-jakarta-regular">
            Líder Técnico | CEO e Professor na Logos Academy | Tech Lead |
            Node.js | ReactJS | React Native. Apaixonado por codar,
            aprender novas tecnologias e impulsionar devs para o próximo nível.
          </p>

          {/* LISTA */}
          <div className="space-y-4 pt-4">

            {/* ITEM */}
            <div className="flex items-center gap-4 border-t border-gray-700 pt-4">

              <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
                <circle cx="20" cy="20.2148" r="15.5" />
                <circle cx="20" cy="20.2148" r="12" className="fill-gray-950" />
                <path
                  d="M25 17.2148L18.75 23.4648L15 19.7148"
                  stroke="#FF7900"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-sm text-gray-100 sm:text-base font-jakarta-regular ">
                13 anos de experiência na área de programação
              </p>

            </div>

            {/* ITEM */}
            <div className="flex items-center gap-4 border-t border-gray-700 pt-4">

              <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
                <circle cx="20" cy="20.2148" r="15.5" />
                <circle cx="20" cy="20.2148" r="12" className="fill-gray-950" />
                <path
                  d="M25 17.2148L18.75 23.4648L15 19.7148"
                  stroke="#FF7900"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-sm text-gray-100 sm:text-base font-jakarta-regular">
                Fundador e CEO da Logos Academy
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</section>

/*  * /
      <section className="bg-transparent py-16">

  <div className="mx-auto w-full max-w-6xl px-5">

    <div className="overflow-hidden rounded-xl border border-transparent bg-origin-border">

      <div className="flex flex-col gap-12 rounded-xl bg-transparent p-6 lg:flex-row lg:items-center lg:p-16">

        {/* IMAGEM */}
        <div className="flex w-full justify-center lg:w-1/2">

          <Image
            src={InstrutorGreg}
            alt="Instrutor Gregorio"
            className="
              rounded-full
              w-64
              sm:w-72
              md:w-80
              lg:w-105
              h-[65vh]
              
            "
            priority
          />

        </div>

        {/* TEXTO */}
        <div className="w-full space-y-6 lg:w-1/2">

          {/* TAG */}
          <div className="w-fit overflow-hidden rounded border border-orange-600 bg-gradient-to-b from-orange-600 to-orange-600">
            <div className="flex items-center rounded bg-gray-950 px-4 py-0.5">
              <h2 className="my-1 bg-gradient-to-r from-white to-white bg-clip-text font-mono text-xs font-medium text-transparent sm:text-sm md:text-base">
                Instrutor_
              </h2>
            </div>
          </div>

          {/* NOME */}
          <p className="text-2xl font-cooper-bold text-orange-500 sm:text-3xl lg:text-4xl">
            Gregorio Arlindo Pinheiro Jr
          </p>

          {/* BIO */}
          <p className="text-sm text-justify text-white sm:text-base md:text-lg lg:text-base font-jakarta-regular">
            Desenvolvedor Full Stack | NodeJS | React. Apaixonado por
            programação e por aprender novas tecnologias, sempre buscando
            evolução constante e ajudando outros devs a alcançarem novos níveis.
          </p>

          {/* LISTA */}
          <div className="space-y-4 pt-4">

            <div className="flex items-center gap-4 border-t border-gray-700 pt-4">

              <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
                <circle cx="20" cy="20.2148" r="15.5" />
                <circle cx="20" cy="20.2148" r="12" className="fill-gray-950" />
                <path
                  d="M25 17.2148L18.75 23.4648L15 19.7148"
                  stroke="#FF7900"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-sm text-gray-100 sm:text-base font-jakarta-regular">
                +11 anos de experiência na área de programação
              </p>

            </div>

            <div className="flex items-center gap-4 border-t border-gray-700 pt-4">

              <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
                <circle cx="20" cy="20.2148" r="15.5" />
                <circle cx="20" cy="20.2148" r="12" className="fill-gray-950" />
                <path
                  d="M25 17.2148L18.75 23.4648L15 19.7148"
                  stroke="#FF7900"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-sm text-gray-100 sm:text-base font-jakarta-regular ">
                Instrutor
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




