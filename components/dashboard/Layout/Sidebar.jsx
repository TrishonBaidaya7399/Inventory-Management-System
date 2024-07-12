"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  BaggageClaim,
  BarChart4,
  FileText,
  Home,
  HousePlug,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";

function getItem(label, key, icon, children, link) {
  return {
    key,
    icon,
    children,
    label,
    link,
  };
}

const items = [
  getItem("Home", "home", <Home />, null, "/inventory-dashboard/home/overview"),
  getItem(
    "Inventory",
    "inventory",
    <ShoppingBag />,
    null,
    "/inventory-dashboard/inventory"
  ),
  getItem("Sales", "sales", <BaggageClaim />, [
    getItem(
      "Sales Overview",
      "sales-overview",
      null,
      null,
      "/inventory-dashboard/sales"
    ),
    getItem("Bill", "bill", null, null, "/inventory-dashboard/sales/bill"),
    getItem("Alex", "alex", null, null, "/inventory-dashboard/sales/alex"),
  ]),
  getItem(
    "Purchases",
    "purchases",
    <ShoppingBag />,
    [
      getItem(
        "Team 1",
        "team1",
        null,
        null,
        "/inventory-dashboard/purchases/team1"
      ),
      getItem(
        "Team 2",
        "team2",
        null,
        null,
        "/inventory-dashboard/purchases/team2"
      ),
    ],
    "/inventory-dashboard/purchases"
  ),
  getItem(
    "Integration",
    "integration",
    <HousePlug />,
    null,
    "/inventory-dashboard/integration"
  ),
  getItem(
    "Reports",
    "reports",
    <BarChart4 />,
    null,
    "/inventory-dashboard/reports"
  ),
  getItem(
    "Documents",
    "documents",
    <FileText />,
    null,
    "/inventory-dashboard/documents"
  ),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleNavigation = (val) => {
    let link = null;
    items.forEach((item) => {
      if (item?.key === val?.key) {
        link = item?.link;
      } else if (item?.children) {
        item.children.forEach((child) => {
          if (child?.key === val?.key) {
            link = child?.link;
          }
        });
      }
    });
    if (link) {
      router.push(link);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className={collapsed ? "slider_content_collapsed bg-slate-900" : "slider_content bg-slate-900"}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical bg-slate-950 flex items-center justify-center h-[70px]">
        <ShoppingCart />
        <div className={collapsed ? "hidden" : "title"}>Inventory</div>
      </div>
      <Menu
        className="bg-slate-900"
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={handleNavigation}
      />
      <div className={collapsed ? "hidden" : "subscription_card_container bg-slate-900"}>
        <SubscriptionCard />
      </div>
    </Sider>
  );
};

export default Sidebar;
