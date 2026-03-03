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
  { name: "Git", icon: "/icons/git.png" },
  { name: "GitHub", icon: "/icons/github.png" },
];

const HomePage: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-orange-500 py-12 lg:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Texto */}
        <div className="text-center lg:text-left">
          <h1 className="font-cooper-bold text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            Encontre <br /> seu <br /> futuro
          </h1>

          <p className="mt-6 text-gray-50 text-sm sm:text-lg max-w-md sm:max-w-xl mx-auto lg:mx-0 font-jakarta-regular">
            A plataforma completa pra você aprender programação do zero
            no seu ritmo, se tornar Full Stack e se especializar em
            diversas tecnologias.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-8">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-2 bg-orange-700 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-200"
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
        <div className="flex justify-center mt-10 lg:mt-0">
          <Image
            src="/home-img.png"
            alt="Ilustração pessoas programando"
            width={420}
            height={420}
            priority
            className="w-[240px] sm:w-[350px] lg:w-[420px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;