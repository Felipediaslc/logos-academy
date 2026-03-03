import Image from "next/image";
import React from "react";
import HeroImagy from "../../public/aprendiz-up.png";

const Page: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white">

      {/* TAG SUPERIOR */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20">
        <div className="inline-block border border-orange-500/40 px-5 py-1.5 rounded-full backdrop-blur-sm">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-orange-400">
            Pra quem é
          </span>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT COLUMN */}
        <div className="lg:w-1/2 flex flex-col gap-12">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cooper-bold leading-tight tracking-tight">
            Independente do seu nível a{" "}
            <span className="text-orange-400">Logos Academy</span>{" "}
            é para você
          </h2>

          <div className="space-y-10">

            {[
              {
                title: "Para aprender do zero",
                desc: "Fundamentos da programação web HTML, CSS, Git, banco de dados relacional e não relacional, back-end e front-end."
              },
              {
                title: "Para se especializar",
                desc: "Trilhas de React e Node.js com ferramentas e tecnologias alinhadas com o mercado."
              },
              {
                title: "Para se manter atualizado",
                desc: "Masterclass exclusivas, encontros por voz com convidados e newsletter com novidades do mercado."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group space-y-3 pb-6 border-b border-gray-800"
              >
                <h3 className="text-xl md:text-2xl font-semibold font-cooper-bold group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-1/2 flex justify-center items-center">

          <div className="relative w-full max-w-xl aspect-square md:aspect-video lg:aspect-square xl:aspect-[4/3] group">

            <Image
              src={HeroImagy}
              alt="A forma como você estuda mudou"
              fill
              className="rounded-3xl  shadow-2xl shadow-orange-500/10 group-hover:shadow-orange-500/20 transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 rounded-3xl border border-orange-500/10 pointer-events-none" />

          </div>
        </div>

      </section>

      {/* BOTTOM SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">

        {/* DIVISOR CENTRAL */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent flex-1" />

          <button className="bg-gray-950 border border-orange-500/40 text-orange-400 px-6 py-2 rounded-full font-mono text-xs tracking-[0.2em] uppercase backdrop-blur-sm hover:bg-orange-500 hover:text-black transition-all duration-300">
            Também é para quem
          </button>

          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent flex-1" />
        </div>

        {/* GRID INFERIOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {[
            "Quer fazer transição de carreira para a programação",
            "Quer ganhar melhores salários ou fazer um upgrade de carreira",
            "Quer conquistar uma vaga internacional",
            "Quer trabalhar de casa ou remoto"
          ].map((text, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-800 hover:border-emerald-400/40 hover:bg-gray-900/60 transition-all duration-300"
            >
              {/* BOLINHA VERDE */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-emerald-400/40 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300">
                ✓
              </div>

              <p className="text-gray-400 group-hover:text-white transition-colors duration-300 leading-relaxed">
                {text}
              </p>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};

export default Page;