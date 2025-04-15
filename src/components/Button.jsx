import React from "react";

export default function Button({ variant = "primary", text }) {
  const baseClasses =
    "px-5 py-2 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer z-10";

  const variants = {
    primary: "bg-white text-black shadow",
    accent: "bg-tertiary text-white shadow",
    long: "bg-white text-black shadow w-full max-w-[200px] text-xl font-semibold",
  };

  return (
    <button
      className={`${baseClasses} ${
        variants[variant] || variants.primary
      } relative`}
    >
      {text}
    </button>
  );
}
