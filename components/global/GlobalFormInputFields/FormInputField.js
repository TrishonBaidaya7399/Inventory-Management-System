import { Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

function FormInputField({
  control,
  name,
  label,
  rules,
  errors,
  required = true,
  type = "text",
  maxLength,
  className = "w-full",
  placeholder = `Type your ${label}`,
}) {
  return (
    <div className={className}>
      <label className="pb-4 flex gap-2 text-lg font-semibold" htmlFor={name}>
        {label} {required && <p className="text-red-600">*</p>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Input
            className="rounded-md border-2 border-gray-200 focus:border-blue-100 focus:border-[1px]"
            {...field}
            type={type}
            maxLength={maxLength}
            id={name}
            placeholder={
              maxLength
                ? `${placeholder} (Max: ${maxLength} char)`
                : placeholder
            }
          />
        )}
      />
      {errors[name] && (
        <p className="error-message text-red-600 font-semibold">
          {label} is required
        </p>
      )}
    </div>
  );
}

export default FormInputField;
