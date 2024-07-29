import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { X } from "lucide-react";
import { Card, Spin } from "antd";

function GlobalForm({
  handleCancel,
  handleSubmit,
  formTitle,
  children,
  submitButtonTitle = "Save",
  submitting = false,
  ...rest
}) {
  return (
    <div className="global_form_container" {...rest}>
      <Card className="w-full max-w-3xl mx-auto my-4 h-fit overflow-auto">
        <div className="header_part bg-white flex items-center justify-between">
          <h4 className="text-3xl font-bold text-slate-900">{formTitle}</h4>
          <button onClick={handleCancel}>
            <X color="red" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form_content flex flex-col justify-between pb-16">
          <div className="form_body flex-grow py-4">{children}</div>
        <div className="footer_part flex items-center justify-start gap-6">
          <PrimaryButton
            title={submitting ? "Saving..." : submitButtonTitle}
            icon={submitting && <Spin className="white_spin" />}
            type="submit"
            className="px-6 py-2 rounded-md text-xl font-semibold text-white border-2 border-blue-500"
          />
          <PrimaryButton
            title="Cancel"
            onClick={handleCancel}
            className="bg-gray-200 border-gray-300 border-2 px-6 py-2 rounded-md text-xl font-semibold text-gray-800"
          />
        </div>
        </form>
      </Card>
    </div>
  );
}

export default GlobalForm;
