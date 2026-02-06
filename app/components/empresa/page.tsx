"use client";
import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";
import Image from "next/image";
import logo from "../../../public/logos-todo.png";
import Home from "../../../public/empresa.png";
import Footer from "../footer/page";
import { Input } from "../Input";
import { Check as IconCheck } from "lucide-react";

// Definição da interface do formulário
interface RegisterFormData {
  name: string;
  nameEmpresa: string;
  fone: string;
  email: string;
}

// Estado inicial do formulário
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

  // Schema de validação com Joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label("Name"),
    fone: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required()
      .label("Fone"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
  });

  // Manipulador de mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função de validação
  const validate = () => {
    const result = schema.validate(formData, { abortEarly: false });
    if (!result.error) return null;

    const validationErrors: { [key: string]: string } = {};
    result.error.details.forEach((detail) => {
      validationErrors[detail.path[0] as string] = detail.message;
    });
    return validationErrors;
  };

  // Manipulador de envio do formulário
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
      setFormData(initialState); // Resetar o formulário após sucesso
    } catch (error) {
      console.log(error);
      alert("Erro ao realizar o cadastro!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-full bg-gray-950 py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-5 lg:flex-row lg:justify-between">
          {/* TEXTO */}
          <div className="flex w-full flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
            {/* LOGO + TAG */}
            <div className="flex items-end gap-2 whitespace-nowrap">
              <Image
                src={logo}
                alt="Logo Logos Academy Empresas"
                width={150}
                height={90}
                className="h-auto w-24 sm:w-32"
                priority
              />

              <strong className="font-jakarta-regular font-medium text-white sm:text-lg lg:text-xl">
                Para Empresas
              </strong>
            </div>

            {/* HEADLINE */}
            <h1
              className="
        max-w-xl
        text-3xl
        font-cooper-bold
        text-orange-500
        sm:text-4xl
        lg:text-5xl
      "
            >
              Capacite seu time de tecnologia e leve sua empresa para o próximo
              nível
            </h1>

            {/* TEXTO */}
            <p className="max-w-lg text-white sm:text-base lg:text-lg font-jakarta-regular ">
              Agora você RH ou Tech Lead gerencia o aprendizado e acessos de
              forma simples, enquanto seu time evolui com conteúdos práticos e
              atualizados.
            </p>

            {/* CTA */}
            <a
              href="#subscription"
              className=" no-underline font-jakarta-regular
          flex items-center justify-center gap-2
          rounded-lg
          bg-orange-500
          px-8 py-4
          text-sm font-bold uppercase
          text-gray-950
          transition hover:bg-orange-400
          sm:w-fit
        "
            >
              Fale com um especialista
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* IMAGEM */}
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src={Home}
              alt="Plataforma Logos Academy para empresas"
              width={600}
              height={600}
              priority
              className="
          w-64
          sm:w-80
          md:w-105
          lg:w-130
          h-auto
          object-contain
        "
              sizes="
          (max-width:768px) 260px,
          (max-width:1024px) 420px,
          520px
        "
            />
          </div>
        </div>
      </section>
    
      <section className="w-full bg-orange-500 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[78.5rem] px-5">
          {/* HEADER */}
          <div className="flex flex-col gap-4 text-left lg:items-center lg:text-center">
            <strong className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-950 font-jakarta-regular">
              PORQUE EMBARCAR NA LOGOS ACADEMY
            </strong>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-cooper-bold text-gray-950 max-w-[788px]">
              Um ecossistema completo para levar sua empresa e seu time para o
              próximo nível
            </h2>
          </div>

          {/* GRID */}
          <div
            className="
      mt-12
      grid
      gap-10
      md:grid-cols-2
      lg:gap-14
    "
          >
            {/* COLUNA EMPRESA */}
            <div className="space-y-8">
              <strong className="text-xl lg:text-2xl font-medium text-gray-50 font-cooper-bold">
                Para sua empresa
              </strong>

              <div className="space-y-6">
                {/* ITEM */}
                <div className="flex gap-4">
                  <IconCheck  className="text-lime-600 "/>
                  <div>
                    <strong className="text-lg text-gray-950 font-jakarta-regular">
                      Retenção de talentos
                    </strong>
                    <p className="text-sm text-white/90 font-jakarta-regular">
                      Investir no desenvolvimento profissional demonstra
                      compromisso com as equipes, reduzindo rotatividade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCheck  className="text-lime-600 "/>
                  <div>
                    <strong className="text-lg text-gray-950 font-jakarta-regular">
                      Produtividade e qualidade
                    </strong>
                    <p className="text-sm text-white/90">
                      Capacitação eleva habilidades técnicas e melhora entregas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCheck  className="text-lime-600 "/>
                  <div>
                    <strong className="text-lg text-gray-950 font-jakarta-regular">Inovação</strong>
                    <p className="text-sm text-white/90 font-jakarta-regular">
                      Times atualizados aumentam competitividade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA COLABORADOR */}
            <div
              className="
        space-y-1
        border-t
        pt-1
        mb-6
        md:border-t-0
        md:border-l
        md:pl-10
        border-white/30
      "
            >
              <strong className="text-xl lg:text-2xl font-medium text-amber-50 font-cooper-bold mb-32 ">
                Para o colaborador
              </strong>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <IconCheck className="text-lime-600" />
                  <div>
                    <strong className="text-lg text-gray-950 font-jakarta-regular ">
                      Crescimento profissional
                    </strong>
                    <p className="text-sm text-white/90 font-jakarta-regular">
                      Aprender novas tecnologias valoriza o profissional.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCheck className="text-lime-600" />
                  <div>
                    <strong className="text-lg text-gray-950 font-jakarta-regular">
                      Upgrade no portfólio
                    </strong>
                    <p className="text-sm text-white/90 font-jakarta-regular">
                      Projetos práticos aumentam experiência.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCheck className="text-lime-600" />
                  <div>
                    <strong className="text-lg text-gray-950 font-jakarta-regular">
                      Atualização constante
                    </strong>
                    <p className="text-sm text-white/90 font-jakarta-regular">
                      Mantém relevância no mercado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="w-full bg-gray-950 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[78.5rem] px-5">
          {/* GRID */}
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* TEXTO */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* TAG */}
              <div className="mb-6">
                <div className="rounded bg-gradient-to-b from-orange-600 to-orange-600 p-[1px]">
                  <div className="bg-gray-950 px-4 py-2 rounded">
                    <span className="text-xs font-mono text-white">
                      FALE CONOSCO_
                    </span>
                  </div>
                </div>
              </div>

              {/* TITLE */}
              <h2
                className="
          text-2xl
          md:text-3xl
          lg:text-4xl
          font-cooper-bold
          text-orange-500
          max-w-xl
        "
              >
                Empresas já embarcaram com a gente.
              </h2>

              {/* TEXT */}
              <p
                className="
          mt-6
          text-sm
          md:text-base
          text-gray-300
          max-w-lg
          font-jakarta-regular
        "
              >
                Descubra como podemos atender aos desafios do seu negócio!
              </p>
            </div>

            {/* FORM */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <h3
                className="
          text-2xl
          md:text-3xl
          font-cooper-bold
          text-orange-500
          text-center
          lg:text-left
          mb-10
        "
              >
                Sign Up Empresas
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8 font-jakarta-regular">
                {/* INPUT */}
                <Input
                  id="name"
                  label="Nome"
                  value={formData.name}
                  error={errors.name}
                  onChange={handleChange}
                />

                <Input
                  id="nameEmpresa"
                  label="Nome da Empresa"
                  value={formData.nameEmpresa}
                  error={errors.nameEmpresa}
                  onChange={handleChange}
                />

                <Input
                  id="fone"
                  label="Telefone"
                  value={formData.fone}
                  error={errors.fone}
                  onChange={handleChange}
                />

                <Input
                  id="email"
                  type="email"
                  label="E-mail"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
              w-full
              rounded-lg
              bg-orange-500
              py-3
              font-jakarta-regular

              font-medium
              text-gray-950
              transition
              hover:bg-orange-600
              disabled:opacity-60
            "
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
