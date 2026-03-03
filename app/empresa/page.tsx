"use client";
import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";
import Image from "next/image";
import logo from "../../public/logos-todo.png";
import Home from "../../public/empresa.png";
import Footer from "@/app/footer/page";
import { Input } from "@/components/Input";
import { Check as IconCheck } from "lucide-react";

interface RegisterFormData {
  name: string;
  nameEmpresa: string;
  fone: string;
  email: string;
}

const initialState: RegisterFormData = {
  name: "",
  nameEmpresa: "",
  fone: "",
  email: "",
};

const Page: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label("Name"),
    fone: Joi.string().pattern(/^[0-9]{10,15}$/).required().label("Fone"),
    email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const result = schema.validate(formData, { abortEarly: false });
    if (!result.error) return null;

    const validationErrors: { [key: string]: string } = {};
    result.error.details.forEach((detail) => {
      validationErrors[detail.path[0] as string] = detail.message;
    });
    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await axios.post("http://localhost:3001/empresas", formData);
      alert("Cadastro realizado com sucesso!");
      setFormData(initialState);
    } catch (error) {
      alert("Erro ao realizar o cadastro!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <section className="w-full   bg-gray-950 py-10 sm:py-20 overflow-hidden">
  <div className="mx-auto  flex w-[90vw] lg:w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-6 lg:flex-row lg:gap-20">

    <div className="flex w-full flex-col items-center gap-5 text-center lg:w-1/2 lg:items-start lg:text-left">

      {/* Logo */}
      <div className="flex items-center justify-center gap-2 lg:justify-start">
        <Image
          src={logo}
          alt="Logo Logos Academy Empresas"
          width={150}
          height={90}
          className="h-auto w-24 sm:w-28 lg:w-32"
          priority
        />
        <strong className="font-jakarta-regular font-medium text-white text-xs sm:text-base lg:text-xl">
          Para Empresas
        </strong>
      </div>

      {/* Título */}
      <h1 className="
         w-full
  max-w-70
  mx-auto
  lg:max-w-none
  lg:mx-0
  text-[18px]
  leading-snug
  sm:text-3xl
  lg:text-5xl
  xl:text-6xl
  font-cooper-bold
  text-orange-500
      ">
        Capacite seu time de tecnologia e leve sua empresa para o próximo nível
      </h1>

      {/* Texto */}
      <p className="
       max-w-70
       text-justify
  mx-auto 
  lg:mx-0
  lg:max-w-none
        text-[13px]
        leading-relaxed
        sm:text-base
        lg:text-lg
        xl:text-xl
        text-white
        font-jakarta-regular
      ">
        Agora você RH ou Tech Lead gerencia o aprendizado e acessos de forma simples, enquanto seu time evolui com conteúdos práticos e atualizados.
      </p>

      {/* Botão */}
      <a
        href="#subscription"
        className="
          mt-1
          flex
          w-full
          max-w-[240px]
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-orange-500
          px-5
          py-3
          text-[11px]
          sm:text-sm
          font-bold
          uppercase
          text-gray-950
          transition
          hover:bg-orange-400
          sm:w-fit
        "
      >
        Fale com um especialista
      </a>
    </div>

    {/* Imagem */}
    <div className="flex w-full justify-center lg:w-1/2 mt-2 lg:mt-0">
      <Image
        src={Home}
        alt="Plataforma Logos Academy para empresas"
        width={600}
        height={600}
        priority
        className="
          w-full
          max-w-[260px]
          sm:max-w-md
          lg:w-full
          lg:max-w-lg
          h-auto
          object-contain
        "
      />
    </div>

  </div>
</section>

      {/* BENEFÍCIOS */}
      <section className="w-full bg-orange-500 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <strong className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-950 font-jakarta-regular">
              PORQUE EMBARCAR NA LOGOS ACADEMY
            </strong>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-cooper-bold text-gray-950 max-w-3xl">
              Um ecossistema completo para levar sua empresa e seu time para o próximo nível
            </h2>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <strong className="text-xl lg:text-2xl font-cooper-bold text-gray-50">
                Para sua empresa
              </strong>

              <div className="space-y-6">
                {[
                  ["Retenção de talentos","Investir no desenvolvimento profissional demonstra compromisso com as equipes, reduzindo rotatividade."],
                  ["Produtividade e qualidade","Capacitação eleva habilidades técnicas e melhora entregas."],
                  ["Inovação","Times atualizados aumentam competitividade."]
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <IconCheck className="text-lime-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg text-gray-950 font-jakarta-regular">{title}</strong>
                      <p className="text-sm text-white/90 font-jakarta-regular max-w-md">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 md:border-l md:pl-10 border-white/30">
              <strong className="text-xl lg:text-2xl font-cooper-bold text-amber-50">
                Para o colaborador
              </strong>

              <div className="space-y-6">
                {[
                  ["Crescimento profissional","Aprender novas tecnologias valoriza o profissional."],
                  ["Upgrade no portfólio","Projetos práticos aumentam experiência."],
                  ["Atualização constante","Mantém relevância no mercado."]
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <IconCheck className="text-lime-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg text-gray-950 font-jakarta-regular">{title}</strong>
                      <p className="text-sm text-white/90 font-jakarta-regular max-w-md">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="w-full bg-gray-950 py-14 sm:py-20">
  <div className="lg:mx-auto w-full max-w-7xl px-2.5 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-2 mr-5">

        <div className="mb-4">
          <div className="rounded bg-gradient-to-b from-orange-600 to-orange-600 p-[1px]">
            <div className="bg-gray-950 px-4 py-2 rounded">
              <span className="text-xs font-mono text-white">FALE CONOSCO_</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cooper-bold text-orange-500 max-w-xl items-center px-6 lg:px-0">
          Empresas já embarcaram com a gente.
        </h2>

        <p className="mt-4 text-[13px] sm:text-sm md:text-base text-gray-300 max-w-lg font-jakarta-regular">
          Descubra como podemos atender aos desafios do seu negócio!
        </p>
      </div>

      <div className="flex justify-center mr-6 lg:mr-0 lg:justify-end ">
        <div className="w-full max-w-md">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-cooper-bold text-orange-500 mb-8 text-center lg:text-left">
            Sign Up Empresas
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 font-jakarta-regular">
            <Input id="name" label="Nome" value={formData.name} error={errors.name} onChange={handleChange} />
            <Input id="nameEmpresa" label="Nome da Empresa" value={formData.nameEmpresa} error={errors.nameEmpresa} onChange={handleChange} />
            <Input id="fone" label="Telefone" value={formData.fone} error={errors.fone} onChange={handleChange} />
            <Input id="email" type="email" label="E-mail" value={formData.email} error={errors.email} onChange={handleChange} />

            <button
              type="submit"
              disabled={loading}
              className="w-[85vw] mx-auto lg:w-full rounded-lg
               bg-orange-500 py-3 font-medium
                text-gray-950 transition
                 hover:bg-orange-600 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default Page;