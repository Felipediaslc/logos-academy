"use client"

import React, { useState } from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import ImageNav from "../../public/img-navbar.png";

const Header = () => {
    const Links =[
        {name:"Cursos",link:"/"},
        {name:"Programas",link:"/"},
        {name:"Sobre",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Para empresas",link:"/"},
      ];
      const [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full  fixed  2xl:fixed 
        z-10 top-0 left-0'>
           <div className='md:flex items-center justify-between
            bg-orange-500
            py-3 md:px-3 px-7'>
            {/* logo section */}
            <div className=' md:p-0  cursor-pointer   flex items-center gap-1'>
            <Image
            src={ImageNav}
            width={950}
            height={900}
            className=" w-[100px] h-[55px] 
                      md:w-[100px] md:h-[50px] 
                      xl:w-[100px] xl:h-[55px] xl:py-0 "
                alt="image"
      />
                
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 
            top-6 cursor-pointer  md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`mb-20 lg:mb-0  mt-8 lg:mt-0  md:h-0 2xl:mr-[9rem] md:flex md:items-center
                 md:pb-0 pb-12 absolute md:static
                  bg-orange-500 md:z-auto z-[-1]
                   left-0 w-full md:w-auto md:pl-0 pl-9
                    transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li key={link.name} className=' md:ml-8 md:my-0 my-11 font-cooper-bold'>
                        <a href={link.link} className='text-gray-950 text-[1.2rem]
                         hover:text-slate-100 md:text-[1rem] font-cooper-bold tracking-widest duration-500'>{link.name}</a>
                    </li>))
                }
            
                <button
                className="btn mb-24  lg:mb-0  md:ml-8 mt-[0.1rem] relative inline-block  xl:font-cooper-bold 
                           tracking-widest  w-[12rem] lg:w-[10.5rem] text-gray-950 no-underline font-cooper-bold
                         bg-transparent shadow-2xl cursor-pointer px-0 py-1 
                           group rounded-xl shadow-zinc-900">
                  
                  <span
                    className="py-1 absolute inset-0 overflow-hidden border-2 border-gray-950  rounded-xl"><span
                        className="absolute inset-0 rounded-xl 
                         bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.6)_0%,rgba(56,189,248,0)_75%)]
                          opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    className="relative z-10 flex items-center px-4 py-1 space-x-0 rounded-xl
                      ring-1 ring-white/10 ">
                    <span className="pl-2 pr-0 w-80 text-[1.2rem] xl:text-[1rem] "  >Inscreva-se</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon" className="w-12 h-6">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] 
                    bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 
                    transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;