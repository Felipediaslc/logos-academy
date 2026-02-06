"use client"

import React from 'react';

import Image from "next/image";
import logo from "../../../public/logos-todo.png";
const Footer: React.FC = () =>{

    return (
      <footer className="w-full bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a href="" className="flex justify-center lg:justify-start">
                <Image
                  alt="Rocketseat"
                  loading="lazy"
                  width="150"
                  height="90"
                  decoding="async"
                  data-nimg="1"
                  className="h-15 w-30  color:transparent"
                  src={logo}
                />
              </a>
              <p className="py-8 text-sm text-white lg:max-w-xs text-center lg:text-left font-jakarta-regular">
                A plataforma completa pra você aprender programação do zero no
                seu ritmo, se tornar Full Stack e se especializar em diversas
                tecnologias.
              </p>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-orange-500 font-cooper-bold  mb-7">
                Logos
              </h4>
              <ul className="  px-1 transition-all duration-500 list-none">
                <li className="mb-6">
                  <a href="/" className="text-white hover:text-orange-500 no-underline font-jakarta-regular">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="#curso"
                    className=" text-white hover:text-orange-500 no-underline font-jakarta-regular"
                  >
                    Cursos
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/components/sobre"
                    className=" text-white hover:text-orange-500 no-underline font-jakarta-regular"
                  >
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-orange-500 font-cooper-bold  mb-7">
                Empresa
              </h4>
              <ul className="px-1  transition-all duration-500 list-none">
                <li className="mb-6">
                  <a
                    href="/components/empresa"
                    className="text-white hover:text-orange-500 no-underline font-jakarta-regular "
                  >
                    Para empresas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-1 border-t border-orange-500">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-orange-500 no-underline font-jakarta-regular ">
                ©<a className='no-underline text-orange-500' href="https://www.linkedin.com/in/felipediasdev/">https://www.linkedin.com/in/felipediasdev/</a> 2024,
                All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                <div className="flex items-center gap-4">
                  <div className="w-fit">
                    <div className="flex items-center justify-center   bg-transparent">
                      <a
                        aria-label="Acessar comunidade no discord"
                        className="group p-2"
                        href=""
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">Discord</span>
                        <svg
                          fill="none"
                          height="25"
                          viewBox="0 0 24 25"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_838_2653)">
                            <path
                              className="fill-orange-500 "
                              d="M8.625 14.5557C9.24632 14.5557 9.75 14.052 9.75 13.4307C9.75 12.8093 9.24632 12.3057 8.625 12.3057C8.00368 12.3057 7.5 12.8093 7.5 13.4307C7.5 14.052 8.00368 14.5557 8.625 14.5557Z"
                            ></path>
                            <path
                              className="fill-orange-500"
                              d="M15.375 14.5557C15.9963 14.5557 16.5 14.052 16.5 13.4307C16.5 12.8093 15.9963 12.3057 15.375 12.3057C14.7537 12.3057 14.25 12.8093 14.25 13.4307C14.25 14.052 14.7537 14.5557 15.375 14.5557Z"
                            ></path>
                            <path
                              className="stroke-orange-500 "
                              d="M14.385 7.21433L14.8538 5.37402C14.9006 5.18886 15.0154 5.02814 15.1755 4.92389C15.3355 4.81964 15.5289 4.77952 15.7172 4.81152L19.0959 5.36839C19.2419 5.39209 19.3777 5.45797 19.4866 5.55792C19.5956 5.65788 19.6729 5.78753 19.7091 5.93089L22.4775 16.8406C22.5198 17.0121 22.5002 17.193 22.4222 17.3515C22.3441 17.5099 22.2127 17.6358 22.0509 17.7068L15.7697 20.4912C15.6744 20.5345 15.5712 20.5577 15.4665 20.5594C15.3619 20.5612 15.258 20.5414 15.1613 20.5013C15.0646 20.4612 14.9772 20.4017 14.9044 20.3264C14.8317 20.2511 14.7752 20.1617 14.7384 20.0637L13.7812 17.4678"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              className="stroke-orange-500 "
                              d="M9.61432 7.21433L9.14557 5.37402C9.09875 5.18886 8.98389 5.02814 8.82386 4.92389C8.66384 4.81964 8.47041 4.77952 8.28213 4.81152L4.90338 5.36839C4.75744 5.39209 4.62162 5.45797 4.51267 5.55792C4.40372 5.65788 4.3264 5.78753 4.29025 5.93089L1.52182 16.8387C1.47952 17.0102 1.49912 17.1911 1.57715 17.3496C1.65519 17.5081 1.78665 17.6339 1.94838 17.705L8.22963 20.4893C8.32494 20.5326 8.42813 20.5558 8.53279 20.5576C8.63745 20.5593 8.74135 20.5395 8.83804 20.4994C8.93474 20.4593 9.02216 20.3998 9.0949 20.3245C9.16764 20.2493 9.22413 20.1598 9.26088 20.0618L10.2181 17.4678"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              className="stroke-orange-500 "
                              d="M7.5 7.64743C8.96628 7.24731 10.4801 7.0483 12 7.05587C13.5199 7.0483 15.0337 7.24731 16.5 7.64743"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              className="stroke-orange-500 "
                              d="M16.5 16.9639C15.0337 17.364 13.5199 17.563 12 17.5554C10.4801 17.563 8.96628 17.364 7.5 16.9639"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_838_2653">
                              <rect
                                fill="white"
                                height="24"
                                transform="translate(0 0.305664)"
                                width="24"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-fit">
                    <div className="flex items-center justify-center  bg-transparent">
                      <a
                        aria-label="Acessar Instagram"
                        className="group p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                        href=""
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-orange-500 "
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-fit">
                    <div className="flex items-center justify-center  bg-transparent">
                      <a
                        aria-label="Acessar Linkedin"
                        className="group p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                        href=""
                      >
                        <span className="sr-only">Linkedin</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-orange-500 group-hover:text-rocketseat-light"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="w-fit">
                    <div className="flex items-center justify-center  bg-transparent">
                      <a
                        aria-label="Acessar Facebook"
                        className="group p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://pt-br.facebook.com/rocketseat/"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-orange-500 group-hover:text-rocketseat-light"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;





















































