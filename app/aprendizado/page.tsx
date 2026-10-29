import Image from 'next/image'
import HeroImagy from '../../public/aprendiz-up.png'

const container = 'mx-auto max-w-7xl px-6 lg:px-16'

const trilhas = [
  {
    title: 'Para aprender do zero',
    desc: 'Fundamentos da programação web HTML, CSS, Git, banco de dados relacional e não relacional, back-end e front-end.',
  },
  {
    title: 'Para se especializar',
    desc: 'Trilhas de React e Node.js com ferramentas e tecnologias alinhadas com o mercado.',
  },
  {
    title: 'Para se manter atualizado',
    desc: 'Masterclass exclusivas, encontros por voz com convidados e newsletter com novidades do mercado.',
  },
]

const perfis = [
  'Quer fazer transição de carreira para a programação',
  'Quer ganhar melhores salários ou fazer um upgrade de carreira',
  'Quer conquistar uma vaga internacional',
  'Quer trabalhar de casa ou remoto',
]

export default function Page() {
  return (
    <div className="bg-gray-950 text-white">
      {/* TAG SUPERIOR */}
      <div className={`${container} pt-20`}>
        <div className="inline-block rounded-full border border-orange-500/40 px-5 py-1.5 backdrop-blur-sm">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-orange-400">
            Pra quem é
          </span>
        </div>
      </div>

      {/* SEÇÃO PRINCIPAL */}
      <section className={`${container} flex flex-col gap-12 py-16 lg:flex-row lg:gap-24 lg:py-24`}>
        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col gap-12 lg:w-1/2">
          <h2 className="font-cooper-bold text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Independente do seu nível a <span className="text-orange-400">Logos Academy</span> é
            para você
          </h2>

          <ul className="space-y-10">
            {trilhas.map((item) => (
              <li key={item.title} className="group space-y-3 border-b border-gray-800 pb-6">
                <h3 className="font-cooper-bold text-xl font-semibold transition-colors duration-300 group-hover:text-orange-400 md:text-2xl">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUNA DIREITA
            Sem caixa de aspecto fixa + fill: a imagem usa a proporção real do arquivo,
            então não estica nem corta em nenhum breakpoint. */}
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="group relative w-full max-w-xl">
            <Image
              src={HeroImagy}
              alt="A forma como você estuda mudou"
              sizes="(max-width: 640px) 100vw, 576px"
              className="h-auto w-full rounded-3xl shadow-2xl shadow-orange-500/10 transition-shadow duration-500 group-hover:shadow-orange-500/20"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-orange-500/10" />
          </div>
        </div>
      </section>

      {/* SEÇÃO INFERIOR */}
      <section className={`${container} pb-24`}>
        {/* DIVISOR: rótulo não clicável, então é título (não botão) e não estoura em 320px */}
        <div className="mb-14 flex items-center gap-3 sm:gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <h3 className="shrink-0 rounded-full border border-orange-500/40 bg-gray-950 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-orange-400 backdrop-blur-sm sm:px-6 sm:text-xs sm:tracking-[0.2em]">
            Também é para quem
          </h3>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>

        <ul className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-10">
          {perfis.map((text) => (
            <li
              key={text}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-emerald-400/40 hover:bg-gray-900/60"
            >
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-black"
              >
                ✓
              </div>

              <p className="leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-white">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
