"use client";
import AddNewStock from "@/components/dashboard/Inventory/addNewStock/AddNewStock";
import TransferStock from "@/components/dashboard/Inventory/adjustments/TransferStock";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CirclePlus } from "lucide-react";

const tabsData = [
  {
    key: "TransferStock",
    label: "Transfer Stock",
    icon: (
      <svg
        className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    ),
  },
  {
    key: "AddNewStock",
    label: "Add New Stock",
    icon: (
      <CirclePlus />
    ),
  },
];

function NewAdjustmentsForm({ props }) {
  const [activeTab, setActiveTab] = useState(tabsData[0].key);
  const router = useRouter();

  const handleTabChange = (key) => {
    setActiveTab(key);
    
    router.push(
      {
        pathname: router.pathname,
        query: { tab: key.toLowerCase() },
      },
      undefined,
      { shallow: true }
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "TransferStock":
        return <TransferStock />;
      case "AddNewStock":
        return <AddNewStock />;
      default:
        return null;
    }
  };

  return (
    <div className="add_new_form_container">
      <div className="globalTabs border-b border-gray-200 dark:border-gray-700 max-w-3xl mx-auto mt-6 rounded-md">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabsData.map((tab) => (
            <li key={tab.key} className="me-2">
              <div
                onClick={() => handleTabChange(tab.key)}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  activeTab === tab.key
                    ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                } rounded-t-lg group`}
                aria-current={activeTab === tab.key ? "page" : undefined}
              >
                {tab.icon}
                {tab.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default NewAdjustmentsForm;
