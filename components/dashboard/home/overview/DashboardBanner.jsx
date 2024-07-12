"use client";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function DashboardBanner() {
  const [hidden, setHidden] = useState(false);

  const handleHide = () => {
    setHidden(true);
  };

  return (
    <div
      className={`dashboard_banner_container relative h-[180px] bg-white w-100 flex  items-center justify-between px-6 transition-all duration-300 ${
        hidden && "hidden"
      }`}
    >
      <div className="left flex items-center gap-6 w-[60%]">
        <div className="image">
          <Image
            height={90}
            width={100}
            src={
              "https://res.cloudinary.com/dfogbvvvs/image/upload/v1720780802/payment-gateway-icon_vw4qzv.png"
            }
            alt="Online payment"
          />
        </div>
        <div className="title">
          <h2 className="text-3xl font-bold text-slate-950">
            Start accepting online payment
          </h2>
          <p className="text-lg font-semibold text-gray-800">
            Business are moving towards online payment as they are easy secure
            and faster. Try them for your business today
          </p>
        </div>
      </div>
      <div className="right h-100 flex items-center gap-10 w-[calc(100%-60%)] justify-end">
        <PrimaryButton
          title="ENABLE"
          className="px-6 p-2"
          onClick={() => {
            alert("Enabled Online payment");
          }}
        />
      </div>
      <X
        className="absolute top-6 right-6 cursor-pointer"
        color="red"
        onClick={handleHide}
      />
    </div>
  );
}

export default DashboardBanner;
