import { Input } from "antd";
import React from "react";

function InputField({
  register,
  errors,
  required = true,
  type = "text",
  maxLength,
  name,
  label,
  className = "w-full",
}) {
  return (
    <div className={className}>
      <label className="pb-4 flex gap-2 text-lg font-semibold" htmlFor={name}>
        {label} {required && <p className="text-red-600">*</p>}
      </label>
      <Input
        type={type}
        name={name}
        id={name}
        maxLength={maxLength}
        {...register(`${name}`, { required: true })}
      />
      {errors[name] && (
        <p className="error-message text-red-600 font-semibold">
          {label} is required
        </p>
      )}
    </div>
  );
}

export default InputField;
