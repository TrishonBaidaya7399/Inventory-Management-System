"use client";
import React from "react";
import { Tabs } from "antd";
import { CopyIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Overview from "../../../app/(back-office)/inventory-dashboard/home/overview/page.jsx";
import GetStarted from "../../../app/(back-office)/inventory-dashboard/home/get-started/page.jsx";
import Announcements from "../../../app/(back-office)/inventory-dashboard/home/announcements/page";
import RecentUpdates from "../../../app/(back-office)/inventory-dashboard/home/recent-updates/page";

function HomeNavbar() {
  const router = useRouter();
  const items = [
    {
      key: "1",
      label: "Dashboard",
      route: "/inventory-dashboard/home/overview",
      children: <Overview />,
    },
    {
      key: "2",
      label: "Get Started",
      route: "/inventory-dashboard/home/get-started",
      children: <GetStarted />,
    },
    {
      key: "3",
      label: "Announcement",
      route: "/inventory-dashboard/home/announcements",
      children: <Announcements />,
    },
    {
      key: "4",
      label: "Recent Updates",
      route: "/inventory-dashboard/home/recent-updates",
      children: <RecentUpdates />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
    const selectedItem = items.find((item) => item.key === key);
    if (selectedItem) {
      router.push(selectedItem?.route);
    }
  };
  return (
    <div className="home_navbar_container ">
      <div className="home_header">
      <div className="header_part px-6">
        <div className="logo">
          <CopyIcon />
        </div>
        <div className="text">
          <div className="name">Hello, Trishon Baidaya</div>
          <div className="message">Great</div>
        </div>
      </div>
      <div className="tabs">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
