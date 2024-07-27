import React, { useEffect, useRef, useState } from "react";
import { useBarcode } from "next-barcode";
import { Controller } from "react-hook-form";
import { Input } from "antd";

const BarcodeGenerator = ({
  control,
  name,
  label = "",
  rules,
  errors,
  required = rules.required,
  type = "text",
  maxLength,
  className = "w-full",
  backgroundColor = "transparent",
  placeholder,
}) => {
  const [barcodeValue, setBarcodeValue] = useState("");
  const inputRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const { value, background, options } = useBarcode({
        value: barcodeValue,
        options: { background: backgroundColor },
      });
      svgRef.current.innerHTML = value;
    }
  }, [barcodeValue, backgroundColor]);

  return (
    <div className={`barcodeGenerator ${className}`}>
      <label className="pb-4 flex gap-2 text-lg font-semibold" htmlFor={name}>
        {label} {required && <p className="text-red-600">*</p>}
      </label>
      <div className="grid grid-cols-1 gap-6">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <Input
              className="rounded-md h-12 border-2 border-gray-200 focus:border-blue-100 focus:border-[1px]"
              {...field}
              type={type}
              maxLength={maxLength}
              id={name}
              placeholder={
                maxLength
                  ? `${placeholder} (Max: ${maxLength} char)`
                  : placeholder
              }
              onChange={(e) => {
                field.onChange(e);
                setBarcodeValue(e.target.value);
              }}
            />
          )}
        />
        <div ref={svgRef} />
      </div>
      {errors[`${name}`] && (
        <p className="error-message text-red-600 font-semibold">
          {label} is required
        </p>
      )}
    </div>
  );
};

export default BarcodeGenerator;
