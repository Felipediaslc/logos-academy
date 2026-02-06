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
  /* Adicionado w-full para garantir que o container respeite o pai */
  <div className="relative w-full"> 

    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="
        peer
        w-full
        border-0
        border-b-2
        border-orange-500
        bg-transparent
        py-2
        text-sm
        text-white
        focus:border-white
        focus:outline-none
        /* Adicionado para evitar que o texto 'empurre' a borda no mobile */
        max-w-full 
      "
    />

    <label
      htmlFor={id}
      className={`
        absolute
        left-0
        top-2
        text-sm
        text-gray-300
        transition-all
        pointer-events-none 
        peer-placeholder-shown:top-2
        peer-placeholder-shown:text-sm
        peer-focus:-top-4
        peer-focus:text-xs
        peer-focus:text-white
        ${value ? "-top-4 text-xs text-white" : ""}`}
    >
      {label}
    </label>
    {error && (
      <p className="mt-1 text-xs text-red-400 whitespace-normal">{error}</p>
    )}
  </div>
);