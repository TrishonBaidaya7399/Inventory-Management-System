import { InputNumber } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function FormNumberInputField({
  control,
  name,
  label,
  rules,
  errors,
  required = true,
  defaultValue,
  maxValue,
  className = "w-full",
  placeholder = `Enter ${label}`,
}) {
  const increment = (onChange, value) => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  const decrement = (onChange, value) => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div className={`globalFormInputField ${className}`}>
      <label className="pb-4 flex items-center gap-2 text-lg font-semibold" htmlFor={name}>
        {label}
        {required && <p className="text-red-600">*</p>}
        <span className="text-sm text-gray-500">{maxValue && `(Max: ${maxValue})`}</span>
      </label>
      <Controller
      className=""
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className="globalFormInputField_controller flex items-center border-2 border-gray-200 rounded-md h-12">
            <button
              type="button"
              className="p-2 border-r-2 border-gray-200"
              onClick={() => decrement(field.onChange, field.value)}
            >
              <MinusOutlined />
            </button>
            <InputNumber
              {...field}
              defaultValue={defaultValue}
              min={1}
              max={maxValue}
              className="h-full border-none focus:border-none w-full text-center"
              id={name}
              placeholder={placeholder}
            />
            <button
              type="button"
              className="p-2 border-l-2 border-gray-200"
              onClick={() => increment(field.onChange, field.value)}
            >
              <PlusOutlined />
            </button>
          </div>
        )}
      />
      {errors[`${name}`] && (
        <p className="error-message text-red-600 font-semibold">
          {label} is required
        </p>
      )}
    </div>
  );
}

export default FormNumberInputField;
