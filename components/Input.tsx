type InputProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  id,
  label,
  value,
  error,
  type = "text",
  onChange,
}: InputProps) => (
  <div className="flex justify-center w-full mx-auto "> {/* centraliza */}
    <div className="relative w-full "> {/* mantém tamanho original do input */}

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`
          peer
    min-w-[88%]      /* para celulares muito pequenos, 2% menor que 88% */
    sm:min-w-[90%]   /* celular padrão */
    md:min-w-[88%]   /* tablet */
    lg:w-[91%]      /* desktop */
          bg-gray-900/50 backdrop-blur-md
          border border-gray-700
          rounded-2xl
          px-5 pt-7 pb-3
          text-base sm:text-lg
          text-white
          transition-all duration-300
          focus:outline-none
          focus:ring-2 focus:ring-orange-400/50
          focus:border-orange-400
          ${error ? "border-red-500 focus:ring-red-400/50" : ""}
        `}
      />

      <label
        htmlFor={id}
        className={`
          absolute left-5
          text-gray-400
          transition-all duration-300
          pointer-events-none
          top-2 text-xs sm:text-sm
          peer-placeholder-shown:top-5
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-orange-400
          ${value ? "top-2 text-xs text-orange-400" : ""}
        `}
      >
        {label}
      </label>

      {error && (
        <p className="mt-1 text-sm text-red-400 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  </div>
);