"use client";
import React, { useState } from "react";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { IoMdAdd } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { IoMdGrid } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
function InventoryHeader({ newHref }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("list");
  const handleNavigate = () => {
    router.push(newHref);
  };
  return (
    <div className="inventory_header_container bg-white shadow-xl">
      <div className="left">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="text-2xl text-slate-950 font-bold">
              All Items
              <ChevronDown />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="right flex items-center gap-4">
        <PrimaryButton
          title="New"
          className="px-4 py-2 text-white"
          icon={<IoMdAdd />}
          onClick={handleNavigate}
        />
        <div className="layout_switch flex flex-row  rounded-md border-2 border-gray-300 bg-gray-200">
          <button
            className={`${
              activeTab === "list" && "bg-gray-300"
            } px-2 py-1  list_icon border-r-1 border-gray-300`}
            onClick={() => setActiveTab("list")}
          >
            <CiCircleList size={30} />
          </button>
          <button
            className={`${
              activeTab === "grid" && "bg-gray-300"
            } px-2 py-1 grid_icon`}
            onClick={() => setActiveTab("grid")}
          >
            <IoMdGrid size={30} />
          </button>
        </div>
        <PrimaryButton
          className="p-[12px] bg-gray-200 "
          icon={<HiDotsHorizontal color="black" />}
        />
      </div>
    </div>
  );
}

export default InventoryHeader;
