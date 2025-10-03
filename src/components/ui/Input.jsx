// src/components/ui/Input.jsx
import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 text-lg transition-all duration-300 ${className}`}
    />
  );
};
