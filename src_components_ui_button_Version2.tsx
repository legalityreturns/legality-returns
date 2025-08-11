import React from "react";
export function Button({ children, className = "", ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded transition font-semibold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}