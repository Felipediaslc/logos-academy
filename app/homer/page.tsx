import Image from 'next/image'
import HomeImg from '../../public/home-img.png'
 
const techs = [
  { name: 'HTML5', icon: '/icons/html5.png' },
  { name: 'CSS3', icon: '/icons/css.png' },
  { name: 'JavaScript', icon: '/icons/js.png' },
  { name: 'TypeScript', icon: '/icons/ts.png' },
  { name: 'Node.js', icon: '/icons/node-js.png' },
  // Linux/Vercel diferencia maiúsculas: o arquivo precisa se chamar exatamente "express.png"
  { name: 'Express', icon: '/icons/express.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'MongoDB', icon: '/icons/mongodb.png' },
  { name: 'Prisma', icon: '/icons/prisma.webp' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'Git', icon: '/icons/git.png' },
  { name: 'GitHub', icon: '/icons/github.png' },
]
 
export default function Hero() {
  return (
    // svh = altura "pequena" do viewport: não pula quando a barra do Safari/Chrome some
    <section className="flex items-center bg-orange-500 py-12 sm:py-16 md:min-h-[90svh] lg:min-h-screen lg:py-0">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-16">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <h1 className="font-cooper-bold text-5xl font-extrabold leading-tight text-black sm:text-6xl">
            Encontre <br /> seu <br /> futuro
          </h1>
 
          <p className="font-jakarta-regular mx-auto mt-6 max-w-md text-base text-gray-50 sm:max-w-xl sm:text-lg lg:mx-0">
            A plataforma completa pra você aprender programação do zero no seu ritmo, se tornar Full
            Stack e se especializar em diversas tecnologias.
          </p>
 
          {/* Badges */}
          <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
            {techs.map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2 rounded-full bg-orange-700 px-3 py-2 text-xs font-medium text-white shadow-sm transition-transform duration-200 motion-safe:hover:scale-105 sm:px-4 sm:text-sm"
              >
                <Image
                  src={tech.icon}
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Ilustração (o espaçamento já vem do gap do grid) */}
        <div className="flex justify-center">
          <Image
            src={HomeImg}
            alt="Ilustração de pessoas programando"
            priority
            sizes="(max-width: 639px) 240px, (max-width: 1023px) 350px, 420px"
            className="h-auto w-full max-w-[240px] sm:max-w-[350px] lg:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
 