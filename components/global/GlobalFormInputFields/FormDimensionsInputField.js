import { InputNumber, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function FormDimensionsInputField({
  control,
  name,
  label,
  rules,
  errors,
  required = true,
  defaultValue = { height: 1, width: 1 },
  maxValue = 1000,
  className = "w-full",
  placeholder = `Enter ${label}`,
  unitOptions,
  defaultUnit,
  
}) {
  const increment = (onChange, value, dimension) => {
    if (value[dimension] < maxValue) {
      onChange({ ...value, [dimension]: value[dimension] + 1 });
    }
  };

  const decrement = (onChange, value, dimension) => {
    if (value[dimension] > 0) {
      // Assuming 0 is the minimum value for dimensions
      onChange({ ...value, [dimension]: value[dimension] - 1 });
    }
  };

  return (
    <div className={`globalDimensionsInputField ${className}`}>
      <label
        className="pb-4 flex items-center gap-2 text-lg font-semibold"
        htmlFor={name}
      >
        {label}
        {required && <p className="text-red-600">*</p>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div className="globalDimensionsInputField_controller flex items-center border-2 border-gray-200 rounded-md h-12">
            <div className="dimension_input flex items-center border-r-2 border-gray-200 pr-2">
              <button
                type="button"
                className="p-2"
                onClick={() => decrement(field.onChange, field.value, "height")}
              >
                <MinusOutlined />
              </button>
              <InputNumber
                value={field.value.height}
                min={1}
                max={maxValue}
                className="h-full border-none focus:border-none w-full text-center"
                id={`${name}_height`}
                placeholder={`${placeholder} Height`}
                onChange={(value) =>
                  field.onChange({ ...field.value, height: value })
                }
              />
              <button
                type="button"
                className="p-2"
                onClick={() => increment(field.onChange, field.value, "height")}
              >
                <PlusOutlined />
              </button>
            </div>
            <div className="dimension_input flex items-center pl-2">
              <button
                type="button"
                className="p-2"
                onClick={() => decrement(field.onChange, field.value, "width")}
              >
                <MinusOutlined />
              </button>
              <InputNumber
                value={field.value.width}
                min={1}
                max={maxValue}
                className="h-full border-none focus:border-none w-full text-center"
                id={`${name}_width`}
                placeholder={`${placeholder} Width`}
                onChange={(value) =>
                  field.onChange({ ...field.value, width: value })
                }
              />
              <button
                type="button"
                className="p-2"
                onClick={() => increment(field.onChange, field.value, "width")}
              >
                <PlusOutlined />
              </button>
              <Select
              className="currency_select"
              defaultValue={defaultUnit}
              style={{
                width: 80,
                border: "none",
                marginRight: "10px",
              }}
              onChange={(value) =>
                field.onChange({ ...field.value, unit: value })
              }
            >
              {unitOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            </div>
          </div>
        )}
      />
      {errors[`${name}`] && (
        <p className="error-message text-red-600 font-semibold">
          {label ? label : "This"} is required
        </p>
      )}
    </div>
  );
}

export default FormDimensionsInputField;
