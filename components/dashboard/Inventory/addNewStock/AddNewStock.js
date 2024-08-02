"use client";
import GlobalForm from "@/components/global/GlobalForm/GlobalForm";
import FormNumberInputField from "@/components/global/GlobalFormInputFields/FormNumberInputField";
import FormSelectField from "@/components/global/GlobalFormInputFields/FormSelectField";
import FormTextAreaField from "@/components/global/GlobalFormInputFields/FormTextAreaField";
import { message, Tooltip } from "antd";
import Card from "antd/es/card/Card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddNewStock({ props }) {
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
      const response = await fetch(`${baseURL}/api/adjustments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        message.success("New Adjustments Created Successfully!");
        reset();
      }
    } catch (error) {
      setSubmitting(false);
      console.error(error.message);
      message.error(error.message);
    }
  }

  return (
      <GlobalForm
        formTitle={"New Adjustments"}
        handleCancel={handleBack}
        handleSubmit={handleSubmit(onSubmit)}
        submitting={submitting}
        submitButtonTitle="Create New Adjustments"
      >
        <Card className="w-full max-w-3xl mx-auto my-6 h-fit max-h-70 overflow-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            <FormNumberInputField
              control={control}
              errors={errors}
              name="stockAmount"
              label="Amount of Stock"
              rules={{ required: true }}
            />
            <Tooltip title="Select a branch where you want to transfer the stock">
              <FormSelectField
                required={true}
                options={[
                  {
                    value: "HaMeemGroup",
                    label: "Ha-Meem Group",
                    location:
                      "Phoenix Tower (4th Floor), 407, Tejgaon Industrial Area, Dhaka-1215, Bangladesh.",
                  },
                  {
                    value: "AnantaGroup",
                    label: "Ananta Group",
                    location:
                      "House 20, Rd No 99, Gulshan-2 Dhaka 1212, Bangladesh",
                  },
                  {
                    value: "PlummyFashionsLimited",
                    label: "Plummy Fashions Limited",
                    location:
                      "Unit -502, Concord Tower, 113 Kazi Nazrul Islam Avenue, Dhaka – 1000",
                  },
                  {
                    value: "StandardGroup",
                    label: "Standard Group",
                    location:
                      "Civil Engineers Bhaban-69, Mohakhali C/A, Dhaka 1212, Bangladesh.",
                  },
                  {
                    value: "DBLGroup",
                    label: "DBL Group",
                    location:
                      "23/1 Panthapath Link Road, GMEA Complex, Kawran Bazar, Dhaka – 1215, Bangladesh.",
                  },
                ]}
                control={control}
                errors={errors}
                name="branch"
                label="Branch"
                mode="multiple"
                rules={{ required: true }}
              />
            </Tooltip>
          </div>

          <div className="pt-6">
            <FormTextAreaField
              control={control}
              errors={errors}
              maxLength={250}
              name="note"
              label="Adjustment Note"
              required={false}
            />
          </div>
        </Card>
      </GlobalForm>
  );
}

export default AddNewStock;
