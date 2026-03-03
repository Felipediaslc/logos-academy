import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="
        bg-transparent
        text-[#111111]
        font-cooper-bold
        border-2 border-[#111111]
        tracking-wide
        text-base
        px-6 py-2.5
        rounded-xl
        transition-all duration-300 ease-in-out
        hover:bg-[#111111]
        hover:text-orange-600
        hover:shadow-md
      "
    >
      {children}
    </button>
  );
};

export default Button;