"use client";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import GlobalForm from "@/components/global/GlobalForm/GlobalForm";
import FormInputField from "@/components/global/GlobalFormInputFields/FormInputField";
import FormSelectField from "@/components/global/GlobalFormInputFields/FormSelectField";
import FormTextAreaField from "@/components/global/GlobalFormInputFields/FormTextAreaField";
import { message } from "antd";
import Card from "antd/es/card/Card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function NewWarehouseFrom({ props }) {
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
      const response = await fetch(`${baseURL}/api/warehouse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        message.success("New Warehouse Created Successfully!");
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
        formTitle={"New Warehouse"}
        handleCancel={handleBack}
        handleSubmit={handleSubmit(onSubmit)}
        submitting={submitting}
        submitButtonTitle="Add New Warehouse"
      >
        <Card className="w-full max-w-3xl mx-auto my-6 h-fit max-h-70 overflow-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            <FormInputField
              control={control}
              errors={errors}
              maxLength={50}
              name="title"
              label="Warehouse Name"
              rules={{ required: true }}
            />
            <FormInputField
              control={control}
              errors={errors}
              maxLength={250}
              name="location"
              label="Warehouse Location"
              rules={{ required: true }}
            />
          </div>

          <div className="pt-6">
            <FormTextAreaField
              control={control}
              errors={errors}
              maxLength={250}
              name="description"
              label="Warehouse Description"
              rules={{ required: true }}
            />
          </div>
          <div className="pt-6">
            <FormSelectField
              mode="multiple"
              required={true}
              options={[
                {
                  value: "main",
                  label: "Main Warehouse",
                },
                {
                  value: "branch",
                  label: "Branch Warehouse",
                },
              ]}
              defaultValue={[]}
              control={control}
              errors={errors}
              name="type"
              label="Warehouse Type"
              rules={{ required: true }}
            />
          </div>
        </Card>
      </GlobalForm>
    </div>
  );
}

export default NewWarehouseFrom;
