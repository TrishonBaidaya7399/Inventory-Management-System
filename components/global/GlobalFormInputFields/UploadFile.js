import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Controller } from "react-hook-form";

const { Dragger } = Upload;

const UploadFile = ({
  control,
  name,
  label,
  multiple = false,
  acceptedFormats = [],
  required = true,
  errors,
}) => {
  const props = {
    name,
    multiple,
    accept: acceptedFormats.join(","),
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        console.log(info?.file);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="upload_file_container">
      <label className="pb-4 flex gap-2 text-lg font-semibold" htmlFor={name}>
        {label} {required && <p className="text-red-600">*</p>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Dragger
            {...props}
            fileList={field.value || []}
            onChange={(info) => {
              field.onChange(info.fileList);
              props.onChange(info);
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
            {acceptedFormats.length > 0 && (
              <p className="ant-upload-hint">
                Accepted formats: {acceptedFormats.join(", ")}
              </p>
            )}
          </Dragger>
        )}
      />
      {errors[name] && (
        <p className="error-message text-red-600 font-semibold">
          {label} is required
        </p>
      )}
    </div>
  );
};

export default UploadFile;
