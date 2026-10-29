'use client'
 
import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import InstrutorGreg from '../../public/greg.jpeg'
import Instrutor from '../../public/danielcaval.png'
 
const slides = [
  {
    title: 'Html5 Css3 Javascript',
    description:
      'HTML5 é a quinta versão da linguagem de marcação padrão para páginas web. O CSS é uma linguagem de estilo usada para definir a aparência e a formatação de documentos HTML. JavaScript é uma linguagem de programação utilizada para criar páginas interativas.',
    icons: ['/icons/html5.png', '/icons/css.png', '/icons/js.png'],
  },
  {
    title: 'Cross',
    description:
      'Git é um sistema de controle de versão distribuído. GitHub é uma plataforma colaborativa para armazenar, compartilhar e versionar projetos de software.',
    icons: ['/icons/git.png', '/icons/github.png'],
  },
  {
    title: 'Node.JS',
    description:
      'Node.js é um ambiente de execução JavaScript server-side baseado no motor V8, amplamente utilizado para aplicações back-end escaláveis.',
    icons: ['/icons/node-js.png'],
  },
  {
    title: 'Express',
    description:
      'Express é um framework minimalista para Node.js que facilita a criação de aplicações web e APIs RESTful.',
    // Atenção: o hero usa "/icons/express.png" (minúsculo). Mantenha um único nome de arquivo.
    icons: ['/icons/Express.png'],
  },
  {
    title: 'Banco de Dados',
    description:
      'Bancos de dados organizam e armazenam informações. Podem ser relacionais como MySQL ou não relacionais como MongoDB.',
    icons: ['/icons/mysql.png'],
  },
  {
    title: 'ORM (Prisma)',
    description:
      'Prisma é um ORM moderno que facilita a comunicação segura e eficiente entre aplicações e bancos de dados.',
    icons: ['/icons/prisma.webp'],
  },
  {
    title: 'NoSQL (MongoDB)',
    description:
      'MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em formato JSON.',
    icons: ['/icons/mongodb.png'],
  },
  {
    title: 'React.JS',
    description:
      'React é uma biblioteca JavaScript para criação de interfaces modernas, reativas e componentizadas.',
    icons: ['/icons/react.png'],
  },
  {
    title: 'Cloud',
    description:
      'Cloud computing permite escalar aplicações, armazenar dados e executar serviços sob demanda.',
    icons: ['/icons/cloud.png'],
  },
  {
    title: 'Project Integration',
    description:
      'Projeto integrador prático que consolida todos os conhecimentos adquiridos durante o curso.',
    icons: ['/projects.png'],
  },
]
 
const instrutores = [
  { src: Instrutor, alt: 'Daniel Cavalcante' },
  { src: InstrutorGreg, alt: 'Gregorio Arlindo' },
]
 
const AUTOPLAY_MS = 4000
 
// 44px = alvo de toque mínimo recomendado em mobile
const navButton =
  'flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/50 text-sm text-orange-400 backdrop-blur-sm transition-colors duration-300 hover:bg-orange-500 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400'
 
export default function Curso() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
 
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
 
  // Autoplay próprio (sem plugin): avança a cada AUTOPLAY_MS, pausa enquanto o usuário
  // arrasta, reinicia a contagem após qualquer troca de slide e não roda com a aba oculta.
  useEffect(() => {
    if (!emblaApi) return
 
    let timer: ReturnType<typeof setInterval> | undefined
    const stop = () => {
      if (timer) clearInterval(timer)
      timer = undefined
    }
    const start = () => {
      stop()
      timer = setInterval(() => {
        if (!document.hidden) emblaApi.scrollNext()
      }, AUTOPLAY_MS)
    }
 
    start()
    emblaApi.on('pointerDown', stop).on('pointerUp', start).on('select', start)
 
    return () => {
      stop()
      emblaApi.off('pointerDown', stop).off('pointerUp', start).off('select', start)
    }
  }, [emblaApi])
 
  return (
    <section
      id="curso"
      aria-label="O que você vai aprender"
      className="grid grid-cols-1 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white lg:min-h-screen lg:grid-cols-2"
    >
      {/* LADO ESQUERDO */}
      <div className="flex flex-col justify-center gap-6 px-6 py-16 lg:gap-8 lg:px-20 lg:py-20">
        <div className="self-start rounded-full border border-orange-500/50 px-4 py-1.5 backdrop-blur-sm">
          <span className="font-mono text-[11px] uppercase tracking-widest text-orange-400 sm:text-xs">
            O que você vai aprender
          </span>
        </div>
 
        <h2 className="font-cooper-bold text-3xl font-bold leading-tight tracking-tight text-orange-400 sm:text-4xl md:text-5xl lg:text-6xl">
          Aulas direto <br /> ao ponto
        </h2>
 
        <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent lg:w-24" />
 
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-400 sm:text-xs">
            Ministrado por
          </p>
 
          <div className="flex items-center gap-4">
            {/* shrink-0: o texto longo não pode esmagar os avatares em telas estreitas */}
            <div className="flex shrink-0 -space-x-3">
              {instrutores.map(({ src, alt }) => (
                <div
                  key={alt}
                  className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-orange-500/40 shadow-lg lg:h-16 lg:w-16"
                >
                  <Image src={src} alt={alt} fill sizes="64px" className="object-cover" />
                </div>
              ))}
            </div>
 
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-white sm:text-lg">
                Daniel Cavalcante & Gregorio Arlindo
              </h4>
              <p className="text-xs text-gray-400 sm:text-sm">Educadores na Logos Academy</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* LADO DIREITO
          O padding fica no wrapper e NÃO no viewport do Embla: padding no viewport
          deixa um pedaço do slide vizinho visível nas bordas. */}
      <div className="relative flex items-center px-4 pb-24 sm:px-6 lg:px-12 lg:pb-0">
        <div
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Conteúdo das aulas"
          className="w-full overflow-hidden"
        >
          {/* pan-y: mantém o scroll vertical da página fluido ao arrastar no celular */}
          <div className="flex [touch-action:pan-y_pinch-zoom]">
            {slides.map((item, index) => (
              <div
                key={item.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${slides.length}`}
                className="flex min-w-0 flex-[0_0_100%] px-2 sm:px-4"
              >
                {/* w-full + slide em flex: todos os cards ficam com a mesma altura */}
                <article className="w-full rounded-2xl border border-orange-500/10 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-6 shadow-xl transition-colors duration-300 hover:border-orange-500/30 sm:p-8 lg:rounded-3xl lg:p-10">
                  {/* HEADER DO CARD */}
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between lg:mb-6">
                    <h3 className="text-xl font-bold tracking-tight text-orange-400 sm:text-2xl">
                      {item.title}
                    </h3>
 
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {item.icons.map((icon) => (
                        <div
                          key={icon}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/20 bg-black/40 p-1.5 sm:h-10 sm:w-10 sm:p-2"
                        >
                          <Image
                            src={icon}
                            alt=""
                            aria-hidden="true"
                            width={20}
                            height={20}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
 
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-orange-500/30 to-transparent lg:mb-8" />
 
                  {/* CORPO DO CARD */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-orange-400 sm:h-7 sm:w-7">
                      <div className="ml-1 h-0 w-0 border-b-[4px] border-l-[6px] border-t-[4px] border-b-transparent border-l-orange-400 border-t-transparent" />
                    </div>
 
                    <div className="min-w-0 space-y-2 sm:space-y-3">
                      <h4 className="text-lg font-semibold text-white sm:text-xl">
                        Conhecendo o {item.title}
                      </h4>
 
                      {/* mínimo de 14px no celular */}
                      <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
 
        {/* CONTROLES (fora do viewport do Embla) */}
        <div className="absolute bottom-4 right-4 flex gap-3 sm:bottom-8 sm:right-10 sm:gap-4">
          <button type="button" onClick={scrollPrev} aria-label="Aula anterior" className={navButton}>
            ←
          </button>
          <button type="button" onClick={scrollNext} aria-label="Próxima aula" className={navButton}>
            →
          </button>
        </div>
      </div>
    </section>
  )
}