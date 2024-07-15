import React from "react";

function PrimaryButton({ title, icon, reverseIcon, className, ...rest }) {
  return (
    <button
      className={`${
        !className
          ? "bg-blue-600 rounded-lg text-white font-semibold text-lg p-2"
          : `bg-blue-600 rounded-lg font-semibold text-lg ${className}`
      }`}
      {...rest}
    >
      <div
        className={`flex items-center justify-center gap-2 ${
          reverseIcon && "flex-row-reverse"
        }`}
      >
        {icon}
        {title}
      </div>
    </button>
  );
}

export default PrimaryButton;
