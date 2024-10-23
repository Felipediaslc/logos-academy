"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import Image from "next/image";
import logo from "../../../public/logos-todo.png";
import Home from "../../../public/empresa.png";


// Definição da interface do formulário
interface RegisterFormData {

  name: string;
  fone: string;
  email: string;

}

// Estado inicial do formulário
const initialState: RegisterFormData = {

  name: '',
  fone: '',
  email: ''
};



const Page: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);


  // Schema de validação com Joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label('Name'),
    fone: Joi.string().pattern(/^[0-9]{10,15}$/).required().label('Fone'),
    email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
   
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
      await axios.post('http://localhost:3001/users', formData);
      alert('Cadastro realizado com sucesso!');
      setFormData(initialState); // Resetar o formulário após sucesso
    } catch (error) {
      console.log(error);
      alert('Erro ao realizar o cadastro!');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-full h-[140vh] bg-gray-950 pb-20 pt-10">
        <div className="mx-auto flex w-full max-w-[78.5rem] flex-col gap-6 px-5 lg:flex-row lg:justify-between">
          <div className=" lg:pt-20 flex w-full flex-col items-center justify-center gap-6 text-center lg:items-start 
        lg:text-start"><div className="flex items-end gap-2 whitespace-nowrap text-start">
              <Image alt="Rocketseat" loading="lazy"
                width="150"
                height="90"
                decoding="async" data-nimg="1"
                className="h-15 w-30  color:transparent"
                src={logo} />
              <strong className="font-medium text-white lg:text-xl">Para Empresas</strong>
            </div><div className="space-y-4 lg:space-y-6">
              <h3 className="max-w-[475px] text-3xl font-cooper-bold text-orange-500

                     lg:text-5xl">Capacite seu time de tecnologia e leve sua empresa para o próximo nível</h3>
              <p className="text-white lg:text-lg">Agora você RH ou Tech Lead gerencia o aprendizado
                e acessos de forma simples e fácil, enquanto seu time se desenvolve com conteúdos práticos
                e atualizados em nossa plataforma.</p>
              <a className="group flex w-full items-center justify-center
                         gap-2 rounded-[0.625rem] px-6 text-sm font-bold uppercase leading-[16.41px]
                          text-gary-950 transition-colors disabled:cursor-not-allowed disabled:opacity-75
                           md:w-fit max-h-[3.25rem] py-[1.125rem] bg-orange-500 hover:bg-rocketseat-low 
                           " href="#subscription">FALE COM UM ESPECIALISTA
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg></a></div></div><div className="w-full lg:pt-20 ">
            <Image alt="" loading="eager" width="1303" height="1332"
              decoding="async" data-nimg="1" className="color:transparen rounded-full"
              src={Home} />
          </div></div></section>










      <section className="w-full bg-orange-500 py-20">
        <div className="mx-auto w-full max-w-[78.5rem] space-y-10 px-5 lg:space-y-[60px]">
          <div className="flex w-full flex-col gap-4 lg:items-center">
            <strong className="text-sm  text-white font-bold uppercase tracking-widest text-success-base lg:text-base">
              PORQUE EMBARCAR NA LOGOS ACADEMY</strong>
            <h2 className="text-2xl font-cooper-bold text-success-low lg:max-w-[788px] lg:text-center lg:text-4xl">
              Um ecossistema completo para levar sua empresa e seu time para o próximo nível</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="flex-1 space-y-6 pb-10">
              <strong className="text-xl font-medium text-success-low lg:text-2xl">Para sua empresa</strong>
              <div className="space-y-6"><div className="flex gap-4">
                <div className="h-7 w-6 text-lime-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" className="h-7 w-6 text-success-base"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                  </path><path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1">
                  <strong className="text-lg font-medium text-success-low">Retenção de talentos</strong>
                  <p className="text-sm text-white">Investir no desenvolvimento profissional demonstra compromisso com as equipes,
                     reduzindo rotatividade e custos de contratação.</p></div></div><div className="flex gap-4">
                      <div className="h-7 w-6 text-lime-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1"><strong className="text-lg font-medium text-success-low">Produtividade e qualidade</strong>
                    <p className="text-sm text-white">Capacitação eleva habilidades técnicas e resulta em melhorias nas entregas.
                      </p></div></div><div className="flex gap-4"><div className="h-7 w-6 text-lime-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1"><strong className="text-lg font-medium text-success-low">
                          Inovação</strong><p className="text-sm text-white">
                      Manter seu time atualizado aumenta a competitividade e adaptação em um mercado em constante mudança.</p>
                  </div></div></div></div>
            <div className="flex-1 space-y-6 border-t border-gray-100 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <strong className="text-xl font-medium text-success-low lg:text-2xl">Para o colaborador</strong>
              <div className="space-y-6"><div className="flex gap-4"><div className="h-7 w-6 text-lime-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
              </div><div className="space-y-1">
                  <strong className="text-lg font-medium text-success-low">Crescimento profissional</strong>
                  <p className="text-sm text-white">Aprender novas tecnologias e ferramentas torna um profissional
                    reconhecido e valorizado.</p></div></div><div className="flex gap-4"><div className="text-lime-600 h-7 w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="h-7 w-6 text-success-base"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path></svg></div><div className="space-y-1">
                    <strong className="text-lg font-medium text-success-low">Upgrade no portfólio e currículo</strong>
                    <p className="text-sm text-white">Aprendizado prático aumenta as habilidades técnicas,
                      o nível de experiência e a resolução de desafios e soluções no dia a dia.</p></div></div>
                <div className="flex gap-4"><div className="h-7 text-lime-600 w-6"><svg xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" className="h-7 w-6 text-success-base">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4">
                  </path></svg></div><div className="space-y-1">
                    <strong className="text-lg font-medium text-success-low">Atualização constante</strong>
                    <p className="text-sm text-white">Permite se manter relevante, inovando, antecipando
                      as tendências futuras e preparando-se para elas.
                    </p></div></div></div></div></div></div>
      </section>


      <section className="w-full h-[100vh] bg-gray-950 pb-20 pt-10">
        <div className="mx-auto 
        flex w-[100vw]  -mt-[2.5rem]
         flex-col gap-3 px-5 
         lg:flex-row lg:justify-between lg:-mt-[5rem] lg:w-[100vw]
         2xl:-mt-[15rem]">
          <div className="  
           lg:-ml-7  lg:pt-20 flex w-full
            flex-col items-center justify-center gap-6 text-center 
        lg:text-center lg:mt-[5rem]">
            <div className="relative  lg:-mt-[8.5rem] 
           mx-auto flex w-full max-w-[40vw] flex-col
            items-center justify-center px-5 ">
              <div className="mb-4 flex w-full flex-col items-center lg:mb-0">
                <div className="group/tag w-fit border border-transparent bg-gradient-to-b
          from-orange-600 to-orange-600 bg-origin-border overflow-hidden rounded">
                  <div className="flex items-center bg-gray-950 w-fit p-2 max-h-8 lg:px-4 lg:h-9rounded">
                    <span className="text-xs lg:text-sm whitespace-nowrap text-transparent
                bg-clip-text bg-gradient-to-r from-white to-white font-medium font-mono">
                      Sobre a Logos Academy_
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 w-[100vw] text-center text-2xl 
            font-cooper-bold text-orange-400  md:w-[50vw] lg:w-[30vw]
            lg:text-3xl">
                  Somos uma plataforma de aprendizado contínuo em programação.
                </h2>
                <p className="mt-6 w-[83vw] text-justify text-sm text-gray-200 
            lg:w-[39vw] lg:text-base ">
                  A Logos Academy,
                 .</p>


              </div>
            </div>

          </div>



          <div className="w-full  lg:flex lg:flex-col lg:items-center lg:p-0    ">
          <div className="md:w-8/12 lg:ms-6 
   lg:w-5/12  pt-36 lg:pt-6">

  <div className='flex font-cooper-bold justify-center -mt-6 pr-3 pb-6
  lg:pr-[15rem]'>
  <h1 className='text-4xl text-white' >Sign Up</h1>
  </div>
    <form className='flex w-72 flex-col items-end gap-6' onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900
           bg-transparent border-0 border-b-2 border-gray-300 
           appearance-none dark:text-white dark:border-gray-950
            dark:focus:border-white focus:outline-none focus:ring-0
             focus:border-white peer" placeholder=" " required 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="name" className="peer-focus:font-medium 
        absolute text-sm text-slate-50 dark:text-slate-100
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10
         origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto peer-focus:text-slate-50 peer-focus:dark:text-slate-200
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
           peer-focus:scale-75 peer-focus:-translate-y-6">Nome:</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900
           bg-transparent border-0 border-b-2 border-gray-300 
           appearance-none dark:text-white dark:border-gray-950
            dark:focus:border-white focus:outline-none focus:ring-0
             focus:border-white peer" placeholder=" " required 
          id="fone"
          name="fone"
          value={formData.fone}
          onChange={handleChange}
        />
        {errors.fone && <p>{errors.fone}</p>}
        <label htmlFor="fone" className="peer-focus:font-medium 
        absolute text-sm text-slate-50 dark:text-slate-100
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10
         origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto peer-focus:text-slate-50 peer-focus:dark:text-slate-200
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
           peer-focus:scale-75 peer-focus:-translate-y-6">Telefone:</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
      
        <input
          type="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900
           bg-transparent border-0 border-b-2 border-gray-300 
           appearance-none dark:text-white dark:border-gray-950
            dark:focus:border-white focus:outline-none focus:ring-0
             focus:border-white peer" placeholder=" " required 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="email" className="peer-focus:font-medium 
        absolute text-sm text-slate-50 dark:text-slate-100
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10
         origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto peer-focus:text-slate-50 peer-focus:dark:text-slate-200
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
           peer-focus:scale-75 peer-focus:-translate-y-6">Email:</label>
      </div>

      

      <button className="text-orange-500 bg-slate-50
       hover:bg-slate-600 focus:ring-4 focus:outline-none
        focus:ring-slate-300 font-medium 
        rounded-lg text-sm w-full sm:w-auto
         px-5 py-2.5 text-center dark:bg-gray-950
          dark:hover:bg-slate-700 dark:focus:ring-slate-800" type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
    </div>
   
          </div>
        </div></section>
    </>
  );
};

export default Page;