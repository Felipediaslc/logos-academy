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

      <section className="w-full h-[100vh] bg-gray-950 pb-20 pt-10">
        <div className="mx-auto 
        flex w-[100vw]  -mt-[2.5rem]
         flex-col gap-3 px-5 
         lg:flex-row lg:justify-between lg:-mt-[5rem] lg:w-[100vw]
         2xl:-mt-[15rem]">
          <div className="  
           lg:-ml-7  lg:pt-20 flex w-full
            flex-col items-center justify-center gap-6 text-center 
        lg:text-center lg:mt-[5rem]">
            <div className="relative  lg:-mt-[8.5rem] 
           mx-auto flex w-full max-w-[40vw] flex-col
            items-center justify-center px-5 ">
              <div className="mb-4 flex w-full flex-col items-center lg:mb-0">
                <div className="md:mb-1 group/tag w-fit border border-transparent bg-gradient-to-b
          from-orange-600 to-orange-600 bg-origin-border overflow-hidden rounded">
                  <div className="flex items-center bg-gray-950 w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                    <span className="text-xs lg:text-sm whitespace-nowrap text-transparent md:text-[1.5rem]
                bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono">
                      Sobre a Logos Academy_
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 w-[100vw] text-center text-2xl 
            font-cooper-bold text-orange-400  md:w-[70vw] lg:w-[30vw] md:text-4xl 
            lg:text-3xl">
                  Somos uma plataforma de aprendizado contínuo em programação.
                </h2>
                <p className="mt-6 w-[83vw] text-justify text-sm text-gray-200 md:text-2xl
            lg:w-[39vw] lg:text-base ">
                  A Logos Academy,
                  é uma escola de programação que transforma
                  a vida de alunos e alunas através
                  do ensino de tecnologia e programação.
                  Nosso objetivo é adquirir e desenvolver com as ferramentas,
                  habilidades e conhecimentos técnicos necessários
                  para resolver situações que nos serão apresentadas na vida real.
                  Também procuraremos aprender a (pensar como um programador),
                  uma habilidade que inclui tudo, desde a montagem de um sistema até
                  a identificação de erros (bugs) no mesmo, propondo soluções e atualizações
                  baseadas em mudanças na tecnologia. Procuramos incentivar constantemente
                  a pesquisa, a busca por informações, a leitura de documentação técnica
                  e o trabalho em equipe.</p>


              </div>
            </div>

          </div>



          <div className="w-full  lg:flex lg:flex-col lg:items-center lg:p-0   md:px-32  ">
            <Image alt="" loading="eager" width="500" height="500"
              decoding="async" data-nimg="1"
              className=" -mt-[1rem] lg:mt-[1.5rem] lg:-ml-3
            color:transparen rounded-full"
              src={LogosAcademy} />
   
          </div>
        </div></section>



      <section className="relative py-0 md:-mt-24" >

        <div className=" py-32 relative mx-auto flex w-full lg:-mt-20 lg:py-28
         2xl:py-32  2xl:-mt-3 lg:w-[60vw] 2xl:w-[55vw] flex-col items-center justify-center px-5">
          <div className="mb-4 flex w-full flex-col items-center lg:mb-0">
            <div className=" md:mb-12 group/tag w-fit border border-transparent bg-gradient-to-b
          from-orange-600 to-orange-600 bg-origin-border overflow-hidden rounded">
                <div className="flex items-center bg-gray-950 w-fit p-2 max-h-8 lg:px-4 lg:h-9
                 rounded">
                <span className="text-xs lg:text-sm whitespace-nowrap text-transparent md:text-[1.5rem] 
                 bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono">
                  Perguntas_
                </span>
              </div>
            </div>

            <Accordion type="single" 
            collapsible className="
            w-full flex flex-col justifi-center
             lg:pt-[2rem] lg:-ml-[10rem] md:text-2xl md:w-[70vw] lg:w-full lg:text-2xl ">
              <AccordionItem value="item-1">
                <AccordionTrigger>O que vamos alcançar no curso?</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>
                      <p className="text-justify">- Adquirir os conhecimentos necessários para desenvolver um site de ponta a ponta integrando front-end e back-end.</p>
                    </li>
                    <li>
                      <p className="text-justify">- Identificar os problemas em um projeto e implementar as modificações necessárias para resolvê-los.</p>
                    </li>
                    <li>
                      <p className="text-justify">- Trabalhar em equipe.</p>
                    </li>
                    <li>
                      <p className="text-justify">- Saber a que documentação e comunidades recorrer para a solução de problemas e manter-se atualizado em cada uma das linguagens aprendidas.</p>
                    </li>
                    <li>
                      <p className="text-justify">- Trabalhar com frameworks para ser capaz de gerar projetos escaláveis, seguros e eficientes.</p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-2">
                <AccordionTrigger>O que vamos aprender no curso?</AccordionTrigger>
                <AccordionContent>
                  <div className="lg:max-w-[25.875rem]">
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 tracking-widest lg:text-base">Introdução ao curso</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Bem-vindo ao curso e à imersão nas novas ferramentas que utilizaremos ao longo do curso. Conheceremos o terminal, o Visual Studio Code e muitas outras ferramentas.</p>
                    </div>

                    <div className="mt-6 w-full flex-1 border-b border-orange-500  tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">Introdução ao Node.js e JavaScript</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Vamos conhecer o potencial que esta linguagem nos oferece e experimentar a diversidade de aplicações que podem ser feitas graças ao ambiente de desenvolvimento do Node.js.</p>
                    </div>

                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">Metodologias de desenvolvimento</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Aprender metodologias e ferramentas de trabalho utilizadas na área de desenvolvimento, como Git e Scrum.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">Como funciona a web</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Entender como um site é estruturado e como podemos acrescentar estilo e design a essa estrutura.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">Express</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Desenvolveremos o conceito de Full Stack, reunindo o mundo do front end e back end. Para isso, utilizaremos o framework mais utilizado no ecossistema do Node.js.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">Banco de dados</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Saberemos o que são bancos de dados e como podemos operá-los. Trabalharemos com o MySQL e o Sequelize.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">JavaScript front-end</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Acrescentaremos dinamismo e interatividade ao nosso front-end.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">APIs</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Vamos criar nossas próprias APIs e aprender como consumir APIs de terceiros.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">React</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Criaremos uma aplicação com React. Trabalharemos com componentes e ciclo de vida. E por fim, vamos unir tudo isso.</p>
                    </div>
                    <div className="mt-6 w-full flex-1 border-b border-orange-500 tracking-widest pb-6 last:border-none">
                      <span className="text-sm font-cooper-bold text-orange-500 lg:text-base">Projeto Integrador</span>
                      <p className="mt-2 text-sm text-white lg:text-base">
                        Aprender como fazer um deploy de um projeto de desenvolvimento e aplicar no seu projeto integrador.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>








      <section className="bg-transparent py-0">
        <div className="mx-auto w-full max-w-[1256px] px-5">
          <div className="border border-transparent bg-origin-border
overflow-hidden rounded-[10px]">
            <div className="rounded-[10px] flex flex-col gap-10 bg-transparent p-6 lg:p-[3.75rem]">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="max-lg:w-full">
                  <Image alt="" loading="lazy" width="532" height="400" decoding="async" data-nimg="1"
                    className="rounded-full max-lg:w-full md:h-[45vh] md:ml-[6rem] md:w-[68vw] lg:h-[70vh] lg:w-[30vw]  lg:ml-[1rem] color: transparent;"

                    src={Instrutor} />
                </div>
                <div className="space-y-4 lg:max-w-[524px]">
                  <div className="group/tag w-fit border border-transparent bg-gradient-to-b
                from-orange-600 to-orange-600 bg-origin-border overflow-hidden rounded">
                    <div className="flex items-center bg-gray-950 w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                      <span className="text-xs lg:text-sm whitespace-nowrap text-transparent
                      bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono md:text-[1.5rem] ">
                        <h2>
                          Instrutor_
                        </h2>
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-cooper-bold text-white lg:text-4xl">
                    Daniel Cavalcante de Souza</p>
                  <p className="text-sm md:text-2xl lg:text-base text-white text-justify ">
                    Líder Técnico | CEO e Professor na Logos Academy | Tech Lead | Node.JS | ReactJS | React Native.
                    Apaixonado por codar, aprender novas ferramentas e tecnologias
                    e estar sempre à frente do que há de mais atual no mercado de
                    programação. Meu propósito é impulsionar devs para o seu próximo nível.
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg fill="none" height="41" viewBox="0 0 40 41" width="40" xmlns="http://www.w3.org/2000/svg">
                      <circle className="" cx="20" cy="20.2148" r="15.5"></circle>
                      <circle className="fill-gary-950" cx="20" cy="20.2148" r="12"></circle>
                      <path d="M25 17.2148L18.75 23.4648L15 19.7148" stroke="#FF7900" stroke-linecap="square"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      13 anos de experiência na área de programação
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg fill="none" height="41" viewBox="0 0 40 41" width="40" xmlns="http://www.w3.org/2000/svg">
                      <circle className="" cx="20" cy="20.2148" r="15.5"></circle>
                      <circle className="fill-gary-950" cx="20" cy="20.2148" r="12"></circle>
                      <path d="M25 17.2148L18.75 23.4648L15 19.7148" stroke="#FF7900" stroke-linecap="square"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      Fundador e CEO da Logos Academy
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-transparent py-0">
        <div className="mx-auto w-full max-w-[1256px] px-5">
          <div className="border border-transparent bg-origin-border
            overflow-hidden rounded-[10px]">
            <div className="rounded-[10px] flex flex-col gap-10 bg-transparent p-6 lg:p-[3.75rem]">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className=" max-lg:w-full">
                  <Image alt="" loading="lazy" width="532" height="400" decoding="async" data-nimg="1"
                    className="rounded-full max-lg:w-full h-[40vh]  lg:h-[70vh] lg:w-[30vw]  lg:ml-[1rem]  md:h-[45vh] md:ml-[6rem] md:w-[68vw]   color: transparent;"

                    src={InstrutorGreg} />
                </div>
                <div className="space-y-4 lg:max-w-[524px]">
                  <div className="group/tag w-fit border border-transparent bg-gradient-to-b
                 from-orange-600 to-orange-600 bg-origin-border overflow-hidden rounded">
                    <div className="flex items-center bg-gray-950 w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                      <span className="text-xs lg:text-sm whitespace-nowrap text-transparent md:text-2xl
                         bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono">
                        <h2>
                          Instrutor_
                        </h2>
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-cooper-bold text-white lg:text-4xl">
                    Gregorio Arlindo Pinheiro Jr
                  </p>
                  <p className="text-sm md:text-2xl lg:text-base text-white text-justify">
                    Desenvolvedor Full Stack | NodeJS | React.
                    Sou apaixonado por programação, sempre buscando aprender novas ferramentas
                    e tecnologias para me manter atualizado com as tendências do mercado.
                    Meu objetivo é ajudar outros desenvolvedores a alcançarem novos níveis de excelência.
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg fill="none" height="41" viewBox="0 0 40 41" width="40" xmlns="http://www.w3.org/2000/svg">
                      <circle className="" cx="20" cy="20.2148" r="15.5"></circle>
                      <circle className="fill-gary-950" cx="20" cy="20.2148" r="12"></circle>
                      <path d="M25 17.2148L18.75 23.4648L15 19.7148" stroke="#FF7900" stroke-linecap="square"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
                      +11 anos de experiência na área de programação
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
                    <svg fill="none" height="41" viewBox="0 0 40 41" width="40" xmlns="http://www.w3.org/2000/svg">
                      <circle className="" cx="20" cy="20.2148" r="15.5"></circle>
                      <circle className="fill-gary-950" cx="20" cy="20.2148" r="12"></circle>
                      <path d="M25 17.2148L18.75 23.4648L15 19.7148" stroke="#FF7900" stroke-linecap="square"
                        stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                    <p className="text-sm md:text-2xl text-gray-100 lg:text-base">
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




