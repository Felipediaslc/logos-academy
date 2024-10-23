"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import Image from "next/image";
import Logos from '../../../public/cast-imag.png';



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

const RegisterForm: React.FC = () => {
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
   
    <section className="h-full bg-orange-500">
    <div className="container h-[100vh]  lg:h-[100vh] px-6 py-0 0">
      <div
        className="flex h-full flex-wrap items-center justify-center lg:justify-between">
       
        <div className="
        -mb-44 pt-[3rem] w-[40vw] md:mb-0 md:w-8/12  lg:mt-10 lg:ml-40 lg:w-[35vw]">
          <Image
            src={Logos}
            width={500}
            height={500}
            className="w-full lg:-mt-10 "
            alt="Phone image" />
        </div>
    
       
  <div className="md:w-8/12 lg:ms-6 
   lg:w-5/12 bg-white pt-36 lg:pt-6">

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
  </div>
</section>
  );
};

export default RegisterForm;