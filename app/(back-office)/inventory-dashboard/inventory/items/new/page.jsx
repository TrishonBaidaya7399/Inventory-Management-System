"use client";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import GlobalForm from "@/components/global/GlobalForm/GlobalForm";
import FormInputField from "@/components/global/GlobalFormInputFields/FormInputField";
import FormNumberInputField from "@/components/global/GlobalFormInputFields/FormNumberInputField";
import FormPriceInputField from "@/components/global/GlobalFormInputFields/FormPriceInputField";
import FormSelectField from "@/components/global/GlobalFormInputFields/FormSelectField";
import FormTextAreaField from "@/components/global/GlobalFormInputFields/FormTextAreaField";
import { message } from "antd";
import Card from "antd/es/card/Card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function NewItemForm({ props }) {
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
      const response = await fetch(`${baseURL}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        message.success("New Item Created Successfully!");
        reset();
      }
    } catch (error) {
      setSubmitting(false);
      console.error(error.message);
      message.error(error.message);
    }
  }
  const currencyOptions = [
    { value: "BDT", label: "৳" },
    { value: "INR", label: "₹" },
    { value: "USD", label: "$" },
    { value: "EUR", label: "€" },
    { value: "GBP", label: "£" },
    { value: "CNY", label: "¥" },
  ];
  return (
    <div className="add_new_form_container">
      <GlobalForm
        formTitle={"New Item"}
        handleCancel={handleBack}
        handleSubmit={handleSubmit(onSubmit)}
        submitting={submitting}
        submitButtonTitle="Add New Item"
      >
        <Card className="w-full max-w-3xl mx-auto my-6 h-fit max-h-70 overflow-auto">
          <div className="flex items-center gap-6 flex-col lg:flex-row">
            <FormInputField
              control={control}
              errors={errors}
              maxLength={50}
              name="name"
              label="Item Name"
              rules={{ required: true }}
            />
            <FormSelectField
              required={true}
              options={[
                {
                  value: "electronic",
                  label: "Electronic",
                },
                {
                  value: "clothing",
                  label: "Clothing",
                },
                {
                  value: "groceries",
                  label: "Groceries",
                },
              ]}
              control={control}
              errors={errors}
              name="category"
              label="Item category"
              mode="multiple"
              rules={{ required: true }}
            />
          </div>
          <div className="flex items-center gap-6 flex-col lg:flex-row pt-6">
            <FormInputField
              control={control}
              errors={errors}
              maxLength={50}
              name="sku"
              label="SKU"
              rules={{ required: false }}
            />
            <FormNumberInputField
              control={control}
              errors={errors}
              maxLength={50}
              name="quantity"
              label="Quantity"
              maxValue={"50"}
              rules={{ required: true }}
            />
          </div>
          <div className="flex items-center gap-6 flex-col lg:flex-row pt-6">
            <FormNumberInputField
              control={control}
              errors={errors}
              maxLength={50}
              name="unit"
              label="Unit"
              maxValue={50}
              rules={{ required: true }}
            />
            <FormSelectField
              required={true}
              options={[
                {
                  value: "puma",
                  label: "Puma",
                  logo: "/images/dashboard/inventory/item.png",
                },
                {
                  value: "adidus",
                  label: "Adidus",
                  logo: "/images/dashboard/inventory/item.png",
                },
                {
                  value: "nike",
                  label: "Nike",
                  logo: "/images/dashboard/inventory/item.png",
                },
              ]}
              control={control}
              errors={errors}
              name="brand"
              label="Brand"
              mode="single"
              rules={{ required: false }}
            />
          </div>
          <div className="flex items-center gap-6 flex-col lg:flex-row pt-6">
            <FormPriceInputField
              control={control}
              errors={errors}
              defaultValue={100}
              maxValue={1000}
              currencyOptions={currencyOptions}
              name="unitPrice"
              label="Unit Price"
              rules={{ required: true }}
            />
            <FormPriceInputField
              control={control}
              errors={errors}
              defaultValue={100}
              maxValue={1000}
              currencyOptions={currencyOptions}
              name="costPrice"
              label="Cost Price"
              rules={{ required: true }}
            />
          </div>
          <div className="pt-6">
            <FormTextAreaField
              control={control}
              errors={errors}
              maxLength={300}
              name="description"
              label="Description"
              rules={{ required: true }}
            />
          </div>
        </Card>
      </GlobalForm>
    </div>
  );
}

export default NewItemForm;
