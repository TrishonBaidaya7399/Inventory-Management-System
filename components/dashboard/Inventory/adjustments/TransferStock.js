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

function TransferStock({ props }) {
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
      const response = await fetch(`${baseURL}/api/adjustments/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitting(false);
        message.success("Stock Transferred Successfully!");
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
      formTitle={"Transfer Stock"}
      handleCancel={handleBack}
      handleSubmit={handleSubmit(onSubmit)}
      submitting={submitting}
      submitButtonTitle="Transfer Stock"
    >
      <Card className="w-full max-w-3xl mx-auto my-6 h-fit max-h-70 overflow-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
          
          <Tooltip title="Sender Warehouse">
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
              name="senderWarehouse"
              label="Sender Warehouse"
              // mode="multiple"
              rules={{ required: true }}
            />
          </Tooltip>
          <Tooltip title="Receiver Warehouse">
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
              name="receiverWarehouse"
              label="Receiver Warehouse"
              // mode="multiple"
              rules={{ required: true }}
            />
          </Tooltip>
        </div>

        <div className="pt-6">
        <FormNumberInputField
            control={control}
            errors={errors}
            name="stockAmount"
            label="Amount to Transfer"
            rules={{ required: true }}
          />
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

export default TransferStock;
