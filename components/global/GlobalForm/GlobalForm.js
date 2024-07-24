import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { X } from "lucide-react";

function GlobalForm({
  handleCancel,
  handleSubmit,
  onSubmit,
  formTitle,
  children,
  ...rest
}) {
  return (
    <div className="global_form_container" {...rest}>
      <div className="header_part h-[70px] px-8 bg-white flex items-center justify-between">
        <h4 className="text-3xl font-bold text-slate-900">{formTitle}</h4>
        <button onClick={handleCancel}>
          <X color="red" />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full justify-between"
      >
        {children}
        <div className="footer_part h-[70px] px-8 bg-white flex items-center justify-start gap-6">
          <PrimaryButton
            title="Save"
            type="submit"
            className="px-6 py-2 rounded-md text-xl font-semibold text-white border-2 border-blue-500"
          />
          <PrimaryButton
            title="Cancel"
            onClick={handleCancel}
            className="bg-gray-200 border-gray-300 border-2 px-6 py-2 rounded-md text-xl font-semibold text-gray-500"
          />
        </div>
      </form>
    </div>
  );
}

export default GlobalForm;
