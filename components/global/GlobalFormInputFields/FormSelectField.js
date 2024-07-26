import { Checkbox, Select } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const { Option } = Select;

function FormSelectField({
  control,
  mode = "single",
  name,
  label,
  rules,
  errors,
  required = true,
  options,
  className = "w-full",
  placeholder = `Select ${label}`,
  defaultValue = "Select",
}) {
  const [multi, setMulti] = useState(false);

  return (
    <div className={className}>
      <label
        className="pb-4 flex justify-between items-center gap-2 text-lg font-semibold"
        htmlFor={name}
      >
        <p>
          {label} {required && <span className="text-red-600">*</span>}
        </p>
        <div
          className={`flex items-center gap-2 ${mode === "single" && "hidden"}`}
        >
          <p className="text-sm">Multi Select</p>
          <Checkbox onChange={() => setMulti(!multi)} />
        </div>
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            mode={multi ? "multiple" : "single"}
            defaultValue={defaultValue}
            placeholder={placeholder}
            style={{
              flex: 1,
            }}
            className="w-full h-12 rounded-md focus:border-blue-100 focus:border-[1px]"
            {...field}
            id={name}
          >
            {options.map((option, i) => (
              <Option
                key={i}
                value={option?.value}
                className="flex items-center flex-row gap-2"
              >
                <div className="flex flex-row items-center gap-2">
                  <div>
                    {option.logo && (
                      <Image
                        height={20}
                        width={20}
                        alt={option?.label}
                        src={option?.logo}
                        className="rounded-full border-[1px] border-gray-500"
                      />
                    )}
                  </div>
                  <p>{option?.label}</p>
                </div>
              </Option>
            ))}
          </Select>
        )}
      />
      {errors[`${name}`] && (
        <p className="error-message text-red-600 font-semibold">
          This field is required
        </p>
      )}
    </div>
  );
}

export default FormSelectField;
