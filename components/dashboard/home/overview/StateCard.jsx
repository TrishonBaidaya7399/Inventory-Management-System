"use client"

import { useRouter } from "next/navigation";
import React from "react";

function StateCard({ number, title, status, icon, href }) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(href);
  };
  return (
    <div
      onClick={handleNavigate}
      className="state_card cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-300 bg-white rounded-lg border-[1px] border-gray-200 h-[150px] w-[150px] flex flex-col items-center justify-center gap-2"
    >
      <div
        className={`number text-5xl ${
          status === "To be packed"
            ? "text-blue-700"
            : status === "To be shipped"
            ? "text-red-500"
            : status === "To be delivered"
            ? "text-green-600"
            : "text-yellow-400"
        }  font-semibold`}
      >
        {number}
      </div>
      <div className="title text-sm text-gray-500 font-semibold">{title}</div>
      <div className="status text-md text-gray-500 font-semibold flex items-center flex-row gap-2">
        {icon} {status}
      </div>
    </div>
  );
}

export default StateCard;
