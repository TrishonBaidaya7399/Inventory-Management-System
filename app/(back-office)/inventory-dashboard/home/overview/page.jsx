import DashboardBanner from "@/components/dashboard/home/overview/DashboardBanner";
import SalesActivity from "@/components/dashboard/home/overview/SalesActivity";
import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen ">
      <DashboardBanner />
      <SalesActivity/>
    </div>
  );
}

export default Dashboard;
