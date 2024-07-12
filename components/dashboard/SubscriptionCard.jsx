"use client"
import React from "react";

export default function SubscriptionCard() {
  const handleChangePLane = () => {
    console.log("change plane");
  };
  const handleUpgrade = () => {
    console.log("Upgrade");
  };
  return (
    <div className="subscription_card bg-slate-900">
      <div className="note">
        <p>Your Premium plan's trial expires in <span className="text-orange-400">13 days</span> </p>
      </div>
      <div className="buttons">
        <button className="change_plan" onClick={handleChangePLane}>
          Change Plan
        </button>
        <button className="upgrade" onClick={handleUpgrade}>
          Upgrade
        </button>
      </div>
    </div>
  );
}
