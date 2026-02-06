"use client";

import React from "react";
import Image from "next/image";


const techs = [
  { name: "HTML5", icon: "/icons/html5.png" },
  { name: "CSS3", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "Node.js", icon: "/icons/node-js.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Prisma", icon: "/icons/prisma.webp" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "GitHub", icon: "/icons/github.png" },
];



const HomePage: React.FC = () => {
  return (
   <section className="bg-transparent min-h-screen flex items-center pt-24">
      <div className="container  mx-auto px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div>
          <h1 className=" font-cooper-bold text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Encontre <br /> seu <br /> futuro
          </h1>

          <p className="mt-6 text-white text-lg max-w-xl font-jakarta-regular">
            A plataforma completa pra você aprender programação do zero
            no seu ritmo, se tornar Full Stack e se especializar em
            diversas tecnologias.
          </p>

          {/* Badges */}
           <div className="flex flex-wrap gap-3 mt-8">
      {techs.map((tech) => (
        <span
          key={tech.name}
          className="flex items-center gap-2 bg-orange-700 text-white px-4 py-1.5 font-jakarta-regular rounded-full text-sm"
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={16}
            height={16}
          />
          {tech.name}
        </span>
      ))}
    </div>
        </div>

        {/* Ilustração */}
        <div className="flex justify-center">
          <Image
            src="/home-img.png"
            alt="Ilustração pessoas programando"
            width={420}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
