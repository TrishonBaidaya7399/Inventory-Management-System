import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Controller } from "react-hook-form";

function FormTextAreaField({
  control,
  name,
  label,
  rules,
  errors,
  required = true,
  maxLength,
  className = "w-full",
  placeholder = `Type ${label}`,
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
          <TextArea
            {...field}
            showCount
            maxLength={maxLength}
            id={name}
            placeholder={
              maxLength
                ? `${placeholder} (Max: ${maxLength} char)`
                : placeholder
            }
            style={{
              height: 120,
            }}
            className="rounded-md border-2 border-gray-200 focus:border-blue-100 focus:border-[1px]"
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

export default FormTextAreaField;
