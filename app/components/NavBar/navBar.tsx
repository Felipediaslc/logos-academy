"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import ImageNav from "../../../public/img-navbar.png";
import Button from "../ui/Button";

const links = [
  { name: "Cursos", href: "#curso" },
  { name: "Sobre", href: "/components/sobre" },
  { name: "Para empresas", href: "/components/empresa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-orange-500">
      <div
        ref={menuRef}
        className="mx-auto flex items-center justify-between px-7 py-3 md:px-6 "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={ImageNav}
            alt="Logo"
            width={100}
            height={55}
            className="h-13.75 w-25"
            priority
          />
        </Link>

        {/* Botão hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label="Abrir menu"
          className="lg:hidden text-gray-950 bg-transparent border-none cursor-pointer focus:outline-none"
        >
          <span className="relative block h-7 w-7">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
          </span>
        </button>

        {/* Menu */}
        <nav
          id="main-menu"
          className={`
            absolute left-0 top-full w-full bg-orange-500
            transition-all duration-300 ease-in-out
            lg:static lg:w-auto lg:bg-transparent
            ${
              open
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 -translate-y-4 lg:visible lg:opacity-100 lg:translate-y-0"
            }
          `}
        >
          <ul className=" px-2 lg:px-0 flex flex-col items-center gap-8 py-10 lg:flex-row lg:gap-6 lg:py-0 list-none">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-950 text-[1.2rem] md:text-[1rem]
                             font-cooper-bold tracking-widest
                             hover:text-slate-100 transition-colors
                             no-underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/components/cadastUser" onClick={() => setOpen(false)}>
                <Button>Inscreva-se</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}