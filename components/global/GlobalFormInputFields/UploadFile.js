import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Controller } from "react-hook-form";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { X } from "lucide-react";

const UploadFile = ({
  control,
  name,
  label,
  multiple = false,
  acceptedFormats = [],
  required = true,
  errors,
}) => {
  const [files, setFiles] = useState([]);

  const handleDelete = (url, onChange) => {
    const updatedFiles = files.filter((file) => file !== url);
    setFiles(updatedFiles);
    onChange(updatedFiles);
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
        render={({ field: { onChange, value } }) => (
          <>
            <UploadDropzone
              endpoint="imageUploader"
              multiple={multiple}
              accept={acceptedFormats.join(",")}
              onClientUploadComplete={(res) => {
                const uploadedFiles = res.map((file) => file.url);
                const updatedFiles = [...files, ...uploadedFiles];
                setFiles(updatedFiles);
                onChange(updatedFiles);
                message.success("Upload Completed");
              }}
              onUploadError={(error) => {
                message.error(`ERROR! ${error.message}`);
              }}
            >
              <div className="ant-upload ant-upload-drag">
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
              </div>
            </UploadDropzone>
            {files.length > 0 && (
              <div className="uploaded-files flex items-center h-[100px] gap-2 flex-wrap py-2">
                {files.map((url, index) => (
                  <div
                    key={index}
                    className="uploaded-file relative h-full w-[130px] border-blue-500 border-[1px] rounded-sm bg-gray-200"
                    style={{ objectFit: "cover" }}
                  >
                    <Image
                      width={1000}
                      height={667}
                      src={url}
                      loading="lazy"
                      alt={`Uploaded file ${index + 1}`}
                      className="uploaded-image h-full w-full"
                    />
                    <X
                      size={20}
                      className="delete-icon absolute top-[-5px] right-[-5px] bg-red-500 text-white rounded-full p-[2px]"
                      onClick={() => handleDelete(url, onChange)}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
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
