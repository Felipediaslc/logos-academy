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
  <div className="relative  mx-auto  lg:mx-0">

    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="
  peer
  w-[85vw]
  box-border
 lg:w-full
  border-0
  border-b-2
  border-orange-500
  bg-transparent
  py-3
  text-base
  text-white
  focus:border-white
  focus:outline-none
"
    />

    <label
      htmlFor={id}
      className={`
        absolute
        left-0

        top-2 sm:top-3
        text-sm sm:text-base

        text-gray-300
        transition-all
        duration-200
        pointer-events-none

        peer-placeholder-shown:top-2
        peer-placeholder-shown:text-sm

        sm:peer-placeholder-shown:top-3
        sm:peer-placeholder-shown:text-base

        peer-focus:-top-4 sm:peer-focus:-top-5
        peer-focus:text-xs
        peer-focus:text-white

        ${value ? "-top-4 sm:-top-5 text-xs text-white" : ""}
      `}
    >
      {label}
    </label>

    {error && (
      <p className="mt-1 text-xs text-red-400 wrap-break-word">
        {error}
      </p>
    )}
  </div>
);;