"use client";

import React, { useState } from "react";
import { Input } from "@/components/Input";
import axios from "axios";
import Joi from "joi";

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

export default function EmpressPack03() {
  const [formData, setFormData] = useState<RegisterFormData>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label("Name"),
    nameEmpresa: Joi.string()
      .min(2)
      .max(50)
      .pattern(/^[a-zA-Z0-9\s]+$/) // permite letras, números e espaços
      .required()
      .label("Nome da Empresa"),
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
    <section className="w-full bg-gray-950 py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <div className="rounded bg-gradient-to-b from-orange-600 to-orange-600 p-[1px]">
              <div className="bg-gray-950 px-4 py-2 rounded">
                <span className="text-xs sm:text-sm font-mono text-white">FALE CONOSCO_</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cooper-bold text-orange-500 leading-tight max-w-md lg:max-w-lg">
              Empresas já embarcaram com a gente.
            </h2>

            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-sm md:max-w-md">
              Descubra como podemos atender aos desafios do seu negócio!
            </p>
          </div>

          {/* FORMULÁRIO */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md px-4 sm:px-0">

              <h3 className="text-xl sm:text-2xl md:text-3xl font-cooper-bold text-orange-500 mb-6 text-center md:text-left">
                Sign Up Empresas
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 font-jakarta-regular  max-w-xl mx-auto ">

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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-orange-500 py-3 font-semibold text-gray-950 text-lg transition-all duration-300 hover:bg-orange-600 hover:scale-[1.02] disabled:opacity-60"
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
}