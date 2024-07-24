"use client";

import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function NewCategoryForm({ props }) {
  const router = useRouter();
  const handleBack = () => {
    console.log("Back clicked");
    router.back();
  };
  return (
    <div className="create_new_inventory_form">
      <div className="header_part h-[70px] px-8 bg-white flex items-center justify-between">
        <h4 className="text-3xl font-bold text-slate-900">New Item</h4>
        <button onClick={handleBack}>
          <X color="red" />
        </button>
      </div>
      <div className="inventory_form_container"></div>
      <div className="footer_part h-[70px] px-8 bg-white flex items-center justify-start gap-6">
        <PrimaryButton
          title="Save"
          className="px-6 py-2 rounded-md text-xl font-semibold text-white border-2 border-blue-500"
        />
        <PrimaryButton
          title="Cancel"
          onClick={handleBack}
          className="bg-gray-200 border-gray-300 border-2 px-6 py-2 rounded-md text-xl font-semibold text-gray-500"
        />
      </div>
    </div>
  );
}

export default NewCategoryForm;
