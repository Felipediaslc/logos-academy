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
  <div className="relative">

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
      "
    />

    <label
      htmlFor={id}
      className="
        absolute
        left-0
        top-2
        text-sm
        text-gray-300
        transition-all
        peer-placeholder-shown:top-2
        peer-placeholder-shown:text-sm
        peer-focus:-top-4
        peer-focus:text-xs
        peer-focus:text-white
      "
    >
      {label}
    </label>

    {error && (
      <p className="mt-1 text-xs text-red-400">
        {error}
      </p>
    )}
  </div>
);