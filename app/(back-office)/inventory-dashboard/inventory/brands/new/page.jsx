"use client";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import GlobalForm from "@/components/global/GlobalForm/GlobalForm";
import FormInputField from "@/components/global/GlobalFormInputFields/FormInputField";
import FormSelectField from "@/components/global/GlobalFormInputFields/FormSelectField";
import FormTextAreaField from "@/components/global/GlobalFormInputFields/FormTextAreaField";
import UploadFile from "@/components/global/GlobalFormInputFields/UploadFile";
import { message } from "antd";
import Card from "antd/es/card/Card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function NewBrandFrom({ props }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const handleBack = () => {
    router.back();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setSubmitting(true);
    console.log(data);
    const baseURL = "http://localhost:3000";
    try {
      const response = await fetch(`${baseURL}/api/brands`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        message.success("New Brand Created Successfully!");
        reset();
      }
    } catch (error) {
      setSubmitting(false);
      console.error(error.message);
      message.error(error.message);
    }
  }

  return (
    <div className="add_new_form_container">
      <GlobalForm
        formTitle={"New Brand"}
        handleCancel={handleBack}
        handleSubmit={handleSubmit(onSubmit)}
        submitting={submitting}
        submitButtonTitle="Add New Brand"
      >
        <Card className="w-full max-w-3xl mx-auto my-6 h-fit max-h-70 overflow-auto">
          <div className="">
            <FormInputField
              control={control}
              errors={errors}
              maxLength={50}
              name="name"
              label="Brand Name"
              rules={{ required: true }}
            />
          </div>
          <div className="pt-6">
            <UploadFile
              control={control}
              name="logo"
              label="Upload Brand's Logo"
              multiple={true}
              acceptedFormats={[".png", ".jpg", ".jpeg"]}
              errors={errors}
            />
          </div>
        </Card>
      </GlobalForm>
    </div>
  );
}

export default NewBrandFrom;
