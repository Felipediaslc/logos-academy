"use client";

import React, { useState } from "react";
import axios from "axios";
import Joi from "joi";
import Image from "next/image";
import Logos from "../../public/cast-imag.png";

interface RegisterFormData {
  name: string;
  fone: string;
  email: string;
}

const initialState: RegisterFormData = {
  name: "",
  fone: "",
  email: "",
};

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label("Name"),
    fone: Joi.string().pattern(/^[0-9]{10,15}$/).required().label("Fone"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      await axios.post("http://localhost:3001/users", formData);
      alert("Cadastro realizado com sucesso!");
      setFormData(initialState);
    } catch (error) {
      console.log(error);
      alert("Erro ao realizar o cadastro!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[95vh] bg-orange-500 flex items-center py-12">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:items-center">

          {/* IMAGE */}
          <div className="pt-12 lg:pt-0 w-[70%] sm:w-[55%] md:w-[40%] lg:w-[30%] flex justify-center">
            <Image
              src={Logos}
              width={420}
              height={420}
              className="w-full h-auto"
              alt="Phone image"
              priority
            />
          </div>

          {/* FORM */}
          <div className="flex justify-center md:justify-start w-full max-w-md px-4 sm:px-0">
            <div className="w-full">

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-cooper-bold text-white mb-6 text-center md:text-left tracking-widest ">
                Sign Up
              </h3>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 sm:gap-8 w-full font-jakarta-regular"
              >
                {/* NAME */}
                <div className="relative w-full">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer
                       min-w-[89%]  
                       sm:min-w-[90%]
                       md:min-w-[90%]  
                       lg:w-[91%]     
                      bg-gray-900/50 backdrop-blur-md
                      border border-gray-700 rounded-2xl
                      px-5 pt-7 pb-3
                      text-base sm:text-lg text-white
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-orange-400/50
                      focus:border-orange-400
                      ${errors.name ? "border-red-500 focus:ring-red-400/50" : ""}
                    `}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-5 text-gray-400 transition-all duration-300 pointer-events-none
                      top-2 text-xs sm:text-sm
                      peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                      peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-400
                      ${formData.name ? "top-2 text-xs text-orange-400" : ""}
                    `}
                  >
                    Nome:
                  </label>
                  {errors.name && <p className="mt-1 text-sm text-red-400 animate-fadeIn">{errors.name}</p>}
                </div>

                {/* FONE */}
                <div className="relative w-full">
                  <input
                    id="fone"
                    name="fone"
                    type="text"
                    value={formData.fone}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer
                       min-w-[89%]  
                        sm:min-w-[90%] 
                         md:min-w-[90%]   
                         lg:w-[91%]      
                      bg-gray-900/50 backdrop-blur-md
                      border border-gray-700 rounded-2xl
                      px-5 pt-7 pb-3
                      text-base sm:text-lg text-white
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-orange-400/50
                      focus:border-orange-400
                      ${errors.fone ? "border-red-500 focus:ring-red-400/50" : ""}
                    `}
                  />
                  <label
                    htmlFor="fone"
                    className={`absolute left-5 text-gray-400 transition-all duration-300 pointer-events-none
                      top-2 text-xs sm:text-sm
                      peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                      peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-400
                      ${formData.fone ? "top-2 text-xs text-orange-400" : ""}
                    `}
                  >
                    Telefone:
                  </label>
                  {errors.fone && <p className="mt-1 text-sm text-red-400 animate-fadeIn">{errors.fone}</p>}
                </div>

                {/* EMAIL */}
                <div className="relative w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer
                       min-w-[89%]  
                        sm:min-w-[90%] 
                         md:min-w-[91%]   
                         lg:w-[91%]      
                      bg-gray-900/50 backdrop-blur-md
                      border border-gray-700 rounded-2xl
                      px-5 pt-7 pb-3
                      text-base sm:text-lg text-white
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-orange-400/50
                      focus:border-orange-400
                      ${errors.email ? "border-red-500 focus:ring-red-400/50" : ""}
                    `}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-5 text-gray-400 transition-all duration-300 pointer-events-none
                      top-2 text-xs sm:text-sm
                      peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                      peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-400
                      ${formData.email ? "top-2 text-xs text-orange-400" : ""}
                    `}
                  >
                    Email:
                  </label>
                  {errors.email && <p className="mt-1 text-sm text-red-400 animate-fadeIn">{errors.email}</p>}
                </div>

                <button
  type="submit"
  disabled={loading}
  className="ml-2  min-w-[91%]  
                        sm:min-w-[90%] 
                         md:min-w-[91%]   
                         lg:w-[91%]       rounded-2xl bg-gray-950 py-3 font-semibold text-orange-500 text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] disabled:opacity-60"
>
  {loading ? "Enviando..." : "Enviar"}
</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegisterForm;