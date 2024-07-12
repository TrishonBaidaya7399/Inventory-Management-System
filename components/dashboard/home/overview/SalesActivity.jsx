import React from "react";
import StateCard from "./StateCard";
import { CircleArrowOutUpRight, CircleCheckBig, FileText } from "lucide-react";

function SalesActivity() {
  return (
    <div className="sales_activity_container flex flex-row bg-slate-100 border-t-[1px] border-b-[1px] border-gray-200">
      <div className="sales_activity border-r-[1px] border-gray-200 p-8 w-2/3">
        <div className="title text-xl font-semibold text-gray-800">
          Sales Activity
        </div>
        <div className="stats_container flex flex-row flex-wrap gap-6 mt-6">
          <StateCard
            number="0"
            status="To be packed"
            title="Qty"
            icon={<CircleCheckBig size={14} />}
            href="#"
          />
          <StateCard
            number="0"
            status="To be shipped"
            title="Pkgs"
            icon={<CircleArrowOutUpRight size={14} />}
            href="#"
          />
          <StateCard
            number="0"
            status="To be delivered"
            title="Pkgs"
            icon={<CircleArrowOutUpRight size={14} />}
            href="#"
          />
          <StateCard
            number="0"
            status="To be invoices"
            title="Qty"
            icon={<FileText size={14} />}
            href="#"
          />
        </div>
      </div>
      <div className="inventory_summary p-8 w-1/3">
        <div className="title text-xl font-semibold text-gray-800 mb-6">
          Inventory Summary
        </div>
        <div className="data flex gap-6 flex-col">
          <div className="in_hand bg-white rounded-lg h-12 flex flex-row items-center justify-between py-2 px-4 border-2 border-gray-200 text-gray-400 font-normal text-xl">
            <div className="label">QUANTITY IN HAND</div>
            <div className="value text-3xl font-semibold text-slate-700">0</div>
          </div>
          <div className="to_be_received bg-white rounded-lg h-12 flex flex-row items-center justify-between py-2 px-4 border-2 border-gray-200 text-gray-400 font-normal text-xl">
            <div className="label">QUANTITY TO BE RECEIVED</div>
            <div className="value text-3xl font-semibold text-slate-700">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesActivity;
