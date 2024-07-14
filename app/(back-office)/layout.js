"use client";
import Header from "@/components/dashboard/Header";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
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

const { Content } = Layout;

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
  getItem("Inventory", "inventory", <ShoppingBag />, [
    getItem(
      "Items",
      "items",
      null,
      null,
      "/inventory-dashboard/inventory/items"
    ),
    getItem(
      "Item Groups",
      "itemGroups",
      null,
      null,
      "/inventory-dashboard/inventory/itemgroups"
    ),
    getItem(
      "Adjustments",
      "adjustments",
      null,
      null,
      "/inventory-dashboard/inventory/adjustments"
    ),
  ]),
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

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
    <Layout className="backOffice_main_layout h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        className={
          collapsed
            ? "slider_content_collapsed bg-slate-900 fixed"
            : "slider_content bg-slate-900 fixed"
        }
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
        <div
          className={
            collapsed ? "hidden" : "subscription_card_container bg-slate-900"
          }
        >
          <SubscriptionCard />
        </div>
      </Sider>
      <Layout>
        <main className="main_content w-full bg-slate-100 min-h-screen overflow-y-auto">
          <Header className="fixed" />
          <Content className="max-h-[80%] overflow-auto">{children}</Content>
        </main>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
