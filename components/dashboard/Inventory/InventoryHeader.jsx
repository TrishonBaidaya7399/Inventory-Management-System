"use client";
import React from "react";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { IoMdAdd } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { IoMdGrid } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
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
function InventoryHeader() {
  return (
    <div className="inventory_header_container">
      <div className="left">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              All Items
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="right flex items-center gap-6">
        <PrimaryButton title="New" icon={<IoMdAdd />} />
        <div className="layout_switch">
          <div className="list_icon">
            <CiCircleList />
          </div>
          <div className="grid_icon">
            <IoMdGrid />
          </div>
        </div>
        <PrimaryButton icon={<HiDotsHorizontal />} />
      </div>
    </div>
  );
}

export default InventoryHeader;
