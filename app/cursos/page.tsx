import Image from 'next/image'
import ImagemUp from '../../public/educ-up.png'

const vantagens = [
  'Ser um(a) profissional completo(a) e valorizado(a)',
  'Trabalhar de casa ou de qualquer lugar no mundo',
  'Conquistar melhores salários no mercado',
  'Ser um(a) profissional versátil e produtivo',
]

// Sem "use client": a seção não usa estado nem eventos, então vira Server Component (menos JS no celular).
export default function Vantagens() {
  return (
    <section className="flex items-center justify-center bg-gray-950 py-20 lg:min-h-screen lg:py-0">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
          {/* IMAGEM
              A proporção vem do próprio arquivo (a arte tem texto embutido: um aspect-square
              no celular cortaria o texto). Sem "priority": a seção está abaixo da dobra. */}
          <div className="order-2 flex w-full justify-center lg:order-1 lg:w-1/2">
            <div className="group relative w-full max-w-xl">
              <Image
                src={ImagemUp}
                alt="Vantagens de ser Dev Full-Stack"
                sizes="(max-width: 640px) 100vw, 576px"
                className="h-auto w-full rounded-3xl shadow-2xl shadow-orange-500/10 transition-shadow duration-500 group-hover:shadow-orange-500/20"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-orange-500/10" />
            </div>
          </div>

          {/* TEXTO */}
          <div className="order-1 w-full space-y-10 lg:order-2 lg:w-1/2">
            <div className="inline-block rounded-full border border-orange-500/40 px-5 py-1.5 backdrop-blur-sm">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-orange-400">
                Vantagens
              </span>
            </div>

            <h2 className="font-cooper-bold text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Por que se tornar um <span className="text-orange-400">dev Full-Stack?</span>
            </h2>

            <ul className="divide-y divide-gray-800/60 border-y border-gray-800/60">
              {vantagens.map((text) => (
                <li key={text} className="group flex items-start gap-5 py-6 md:items-center">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-black/40 transition-colors duration-300 group-hover:border-orange-500">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#FF7900]"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="text-base leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white md:text-lg lg:text-xl">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}





