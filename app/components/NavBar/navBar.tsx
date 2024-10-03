"use client"

import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import ImageNav from "../../../public/img-navbar.png";
import Button from "../ui/Button";
import Link from 'next/link'

const Header = () => {
    const Links = [
        { name: "Cursos", link: "/components/cursos" },
        { name: "Programas", link: "/components/programas" },
        { name: "Sobre", link: "/" },
        { name: "Blog", link: "/" },
        { 
            name: "Para empresas", 
            link: "/components/empresa", 
            target: "_blank", // Adicionado o target
        },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full fixed 2xl:fixed z-10 top-0 left-0'>
            <div className='md:flex items-center justify-between bg-orange-500 py-3 md:px-3 px-7'>
                {/* Logo section */}
                <Link href="/">
                <div className='md:p-0 cursor-pointer flex items-center gap-1'>
                    
                    <Image
                        src={ImageNav}
                        width={950}
                        height={900}
                        className="w-[100px] h-[55px] 
                                   md:w-[100px] md:h-[50px] 
                                   xl:w-[100px] xl:h-[55px] xl:py-0"
                        alt="image"
                    />
                    
                </div>
                </Link>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                {/* Link items */}
                <ul className={`lg:mb-0 -mt-1 lg:mt-0 md:h-0 2xl:mr-[9rem] md:flex md:items-center
                    md:pb-0 pb-12 absolute md:static bg-orange-500 md:z-auto z-[-1]
                    left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                    ${open ? 'top-12' : 'top-[-700px] lg:top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='text-center -ml-[2.5rem] md:ml-8 md:my-0 my-14 font-cooper-bold'>
                            <a
                                href={link.link}
                                target={link.name === "Para empresas" ? "_blank" : "_self"} // Abrir em nova aba para "Para empresas"
                                onClick={() => {
                                    if (link.name === "Para empresas") {
                                        setOpen(false); // Fecha o menu ao clicar no link "Para empresas"
                                    }
                                }}
                                className='text-gray-950 text-[1.2rem] hover:text-slate-100 md:text-[1rem] font-cooper-bold tracking-widest duration-500'>
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <Button>
                        Inscreva-se
                    </Button>
                </ul>
            </div>
        </div>
    );
};

export default Header;