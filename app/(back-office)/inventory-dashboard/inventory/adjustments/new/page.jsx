"use client";
import AddNewStock from "@/components/dashboard/Inventory/addNewStock/AddNewStock";
import TransferStock from "@/components/dashboard/Inventory/adjustments/TransferStock";
import GlobalTabComponent from "@/components/global/GlobalTabComponent/GlobalTabComponent";
import { useState } from "react";
const tabsData = [
  {
    key: 'TransferStock',
    label: 'Transfer Stock',
  },
  {
    key: 'AddNewStock',
    label: 'AddNew Stock',
  },
];
function NewAdjustmentsForm({ props }) {
  const [activeTab, setActiveTab] = useState(tabsData[0].key);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'TransferStock':
        return <TransferStock/>;
      case 'AddNewStock':
        return <AddNewStock/>;
      default:
        return null;
    }
  };

  return (
    <div className="add_new_form_container">
       <GlobalTabComponent tabsData={tabsData} onTabChange={handleTabChange} />
       <div>{renderContent()}</div>
    </div>
  );
}

export default NewAdjustmentsForm;
