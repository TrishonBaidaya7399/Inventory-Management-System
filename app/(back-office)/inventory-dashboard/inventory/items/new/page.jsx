"use client";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import GlobalForm from "@/components/global/GlobalForm/GlobalForm";
import InputField from "@/components/global/InputField/InputField";
import Card from "antd/es/card/Card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function NewItemForm({ props }) {
  const router = useRouter();
  const handleBack = () => {
    console.log("Back clicked");
    router.back();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="add_new_item_form_container">
      <GlobalForm
        formTitle={"New Item"}
        handleCancel={handleBack}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <Card className="w-full max-w-3xl mx-auto my-6 h-fit max-h-70 overflow-auto">
          <div className="">
            <InputField
              register={register}
              errors={errors}
              maxLength={50}
              name="title"
              label="Category Title"
            />
          </div>
        </Card>
      </GlobalForm>
    </div>
  );
}

export default NewItemForm;
