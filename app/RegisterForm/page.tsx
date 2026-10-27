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

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

const schema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Informe seu nome.",
    "string.min": "O nome deve ter pelo menos 3 caracteres.",
    "string.max": "O nome deve ter no máximo 100 caracteres.",
    "any.required": "Informe seu nome.",
  }),

  fone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.empty": "Informe seu telefone.",
      "string.pattern.base": "Digite um telefone válido, com DDD.",
      "any.required": "Informe seu telefone.",
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Informe seu e-mail.",
      "string.email": "Digite um e-mail válido.",
      "any.required": "Informe seu e-mail.",
    }),
});

const fields = [
  {
    name: "name",
    label: "Nome:",
    type: "text",
    inputMode: "text",
    autoComplete: "name",
  },
  {
    name: "fone",
    label: "Telefone:",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel",
  },
  {
    name: "email",
    label: "Email:",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
  },
] as const;

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  };

  const validate = (data: RegisterFormData) => {
    const result = schema.validate(data, {
      abortEarly: false,
    });

    if (!result.error) {
      return null;
    }

    const validationErrors: Record<string, string> = {};

    result.error.details.forEach((detail) => {
      const key = detail.path[0] as string;

      if (!validationErrors[key]) {
        validationErrors[key] = detail.message;
      }
    });

    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: RegisterFormData = {
      ...formData,
      name: formData.name.trim(),
      fone: formData.fone.replace(/\D/g, ""),
    };

    const validationErrors = validate(payload);

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await axios.post(`${API_URL}/users`, payload);

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
    <section className="flex min-h-[95vh] items-center bg-orange-500 py-12">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-between">
       
          <div className="flex w-full max-w-[300px] justify-center pt-4 sm:max-w-[320px] lg:pt-0">
            <Image
              src={Logos}
              alt="Ilustração de um celular"
              priority
              className="h-auto w-full"
            />
          </div>

          
          <div className="mx-auto w-full max-w-md lg:mx-0 ">
            <div className="w-full">
              <h2 className="mb-6 text-center font-cooper-bold text-xl tracking-widest text-white sm:text-2xl md:text-left md:text-3xl">
                Cadastre-se
              </h2>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex w-full flex-col gap-5 font-jakarta-regular sm:gap-6"
              >
                {fields.map((field) => {
                  const error = errors[field.name];
                  const value = formData[field.name];

                  return (
                    <div key={field.name} className="relative w-full">
                      <input
                       id={field.name}
                       name={field.name}
                       type={field.type}
                       inputMode={field.inputMode}
                       autoComplete={field.autoComplete}
                       value={value}
                       onChange={handleChange}
                       placeholder=" "
                       aria-invalid={!!error}
                       aria-describedby={error ? `${field.name}-error` : undefined}
                       className={`peer box-border w-full min-w-0 max-w-full rounded-2xl border border-gray-700 bg-gray-900/80 px-5 pb-2 pt-6 text-base text-white backdrop-blur-md transition-all duration-300 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 sm:text-lg ${
                       error
                      ? "border-red-500 focus:border-red-500 focus:ring-red-400/50"
                         : ""
                       }`}
                       />

                      <label
                        htmlFor={field.name}
                        className={`pointer-events-none absolute left-5 top-1.5 text-xs text-gray-300 transition-all duration-300 sm:text-sm
                          peer-placeholder-shown:top-5
                          peer-placeholder-shown:text-sm
                          peer-placeholder-shown:text-gray-300
                          peer-focus:top-1.5
                          peer-focus:text-xs
                          peer-focus:text-orange-400
                          ${value ? "top-1.5 text-xs text-orange-400" : ""}
                        `}
                      >
                        {field.label}
                      </label>

                      {error && (
                        <p
                          id={`${field.name}-error`}
                          role="alert"
                          className="mt-1 animate-fadeIn text-sm text-red-400"
                        >
                          {error}
                        </p>
                      )}
                    </div>
                  );
                })}

                <div className="flex justify-center">
  <button
    type="submit"
    disabled={loading}
    className="w-3/4 rounded-2xl bg-gray-950 py-4 text-lg font-semibold text-orange-500 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {loading ? "Enviando..." : "Enviar"}
  </button>
</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;