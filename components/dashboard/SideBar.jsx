import {
  BaggageClaim,
  BarChart4,
  ChevronRight,
  FileText,
  Home,
  HousePlug,
  LogOut,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function SideBar({ className, ...rest }) {
  return (
    <div
      className={` ${className} dashboard_side_bar`}
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className="header flex gap-2 items-center px-3 bg-slate-900 mb-4 h-[50px]">
        <div className="icon">
          <ShoppingCart />
        </div>
        <p className="title text-white text-2xl">Inventory</p>
      </div>
      <div className="content_footer flex flex-col justify-between h-full">
        <div className="nav_list px-3 flex flex-col gap-3">
          <Link
            href="/inventory-dashboard/home/overview"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl"
          >
            <div className="icon">
              <Home />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Home</p>
              <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            href="/inventory-dashboard/inventory"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl"
          >
            <div className="icon">
              <ShoppingBag />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Inventory</p>
              <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            href="/inventory-dashboard/sales"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl"
          >
            <div className="icon">
              <BaggageClaim />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Sales</p>
              <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            href="/inventory-dashboard/purchases"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl"
          >
            <div className="icon">
              <ShoppingBag />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Purchases</p>
              <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            href="/inventory-dashboard/integration"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl "
          >
            <div className="icon">
              <HousePlug />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Integration</p>
              <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            href="/inventory-dashboard/reports"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl"
          >
            <div className="icon">
              <BarChart4 />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Reports</p>
              <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            href="/inventory-dashboard/documents"
            className="w-full flex items-center gap-2 hover:bg-blue-500 transition-all ease-in-out delay-100 p-2 rounded-xl"
          >
            <div className="icon">
              <FileText />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <p className="title text-white font-xl">Documents</p>
              <ChevronRight size={16} />
            </div>
          </Link>
        </div>
        <div className="footer flex gap-2 items-center px-3 py-2 bg-slate-900 mb-4 h-12">
          <div className="icon">
            <LogOut />
          </div>
          <p className="title text-white text-[20px]">Sign out</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
