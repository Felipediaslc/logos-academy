"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import ImageNav from "../../public/img-navbar.png";
import Button from "@/components/ui/Button";

const links = [
  { name: "Cursos", href: "#curso" },
  { name: "Sobre", href: "/sobre" },
  { name: "Para empresas", href: "/empresa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-orange-500 shadow-sm">
      <div
        ref={menuRef}
        className="mx-auto flex items-center justify-between max-w-7xl px-6 py-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={ImageNav}
            alt="Logo"
            width={110}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="main-menu"
          className="lg:hidden text-[#111111] border-none bg-transparent transition-transform duration-200 hover:scale-110"
        >
          <span className="relative block h-7 w-7">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                open
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-0 opacity-0 -rotate-90"
              }`}
            />
          </span>
        </button>

        {/* Menu */}
        <nav
          id="main-menu"
          className={`
            absolute left-0 top-full w-full bg-orange-600 shadow-md
            transition-all duration-300 ease-in-out
            lg:static lg:w-auto lg:bg-transparent lg:shadow-none
            ${
              open
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 -translate-y-4 lg:visible lg:opacity-100 lg:translate-y-0"
            }
          `}
        >
          <ul
            className="
              flex flex-col items-center gap-8 py-10
              lg:flex-row lg:gap-10 lg:py-0
              list-none m-0 p-0
            "
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-[#111111]
                    text-lg lg:text-base
                    font-semibold
                    tracking-wide
                    no-underline
                    transition-colors duration-300
                    hover:text-white
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/cadastUser"
                onClick={() => setOpen(false)}
                className="no-underline"
              >
                <Button>Inscreva-se</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}