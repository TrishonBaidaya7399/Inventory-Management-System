import { Input, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

function FormSelectField({
  control,
  name,
  label,
  rules,
  errors,
  mode = "single",
  required = true,
  options,
  className = "w-full",
  placeholder = `Select ${label}`,
  defaultValue = "Select",
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
          <Select
            mode={mode}
            defaultValue={defaultValue}
            placeholder={placeholder}
            style={{
              flex: 1,
            }}
            className="w-full h-12 rounded-md focus:border-blue-100 focus:border-[1px]"
            {...field}
            id={name}
            options={options}
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

export default FormSelectField;
