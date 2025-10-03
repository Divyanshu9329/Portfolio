// src/components/ui/Button.jsx
import React from "react";
import { Loader2 } from "lucide-react";

export const Button = ({
  children,
  className = "",
  loading = false,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-lg
        bg-gradient-to-r from-blue-500 to-purple-600
        hover:from-blue-600 hover:to-purple-700
        active:scale-95
        transition-all duration-300
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {!loading && Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
};
