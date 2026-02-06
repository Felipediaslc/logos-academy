import Image from "next/image";
import React from "react";
import HeroImagy from "../../../public/aprendiz-up.png"; 

const Page: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white">
      {/* Top Button */}
      <div className="inline-block border border-orange-500 px-4 py-1 mb-6 mx-32">
          <span className="font-mono text-sm text-gray-50 tracking-tighter">Pra quem é?</span>
        </div>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-5 lg:flex lg:gap-16 py-12">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col gap-10">
          <h2 className="text-2xl lg:text-3xl font-bold font-cooper-bold text-orange-500">
            Independente do seu nível a Logos Academy é para você
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold font-cooper-bold">Para aprender do zero</h3>
              <p className="text-gray-300 mt-2 font-jakarta-regular">
                Fundamentos da programação web HTML, CSS, Git, banco de dados
                relacional e não relacional, back-end e front-end.
              </p>
              <hr className="border-orange-500 mt-2" />
            </div>

            <div>
              <h3 className="text-xl font-semibold font-cooper-bold">Para se especializar</h3>
              <p className="text-gray-300 mt-2 font-jakarta-regular">
                Trilhas de React e Node.js com ferramentas e tecnologias
                alinhadas com o mercado.
              </p>
              <hr className="border-orange-500 mt-2" />
            </div>

            <div>
              <h3 className="text-xl font-semibold font-cooper-bold">Para se manter atualizado</h3>
              <p className="text-gray-300 mt-2 font-jakarta-regular">
                Masterclass exclusivas, encontros por voz com convidados e
                newsletter com novidades do mercado.
              </p>
              <hr className="border-orange-500 mt-2" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
    <Image
      src={HeroImagy}
      alt="A forma como você estuda mudou"
      className="rounded-lg "
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>
</div>
      </section>

      {/* Bottom Section */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="flex items-center justify-center gap-4 mb-10">
          <hr className="border-orange-500 flex-1" />
          <button className="border border-orange-500 text-gray-50 px-4 py-2 bg-transparent font-mono text-sm tracking-tighter  rounded hover:bg-orange-500 hover:text-gray-950 transition">
            Também é para quem...
          </button>
          <hr className="border-orange-500 flex-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="font-jakarta-regular">Quer fazer transição de carreira para a programação</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="font-jakarta-regular">Quer ganhar melhores salários ou fazer um upgrade de carreira</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="font-jakarta-regular">Quer conquistar uma vaga internacional</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="font-jakarta-regular">Quer trabalhar de casa ou remoto</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;