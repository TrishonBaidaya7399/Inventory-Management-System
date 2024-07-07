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
} from "lucide-react";
import { useRouter } from "next/navigation";

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
  getItem(
    "Inventory",
    "inventory",
    <ShoppingBag />,
    null,
    "/inventory-dashboard/inventory"
  ),
  getItem("Sales", "sales", <BaggageClaim />, [
    getItem("Sales Overview", "sales-overview", null, null, "/inventory-dashboard/sales"),
    getItem("Bill", "bill", null, null, "/inventory-dashboard/sales/bill"),
    getItem("Alex", "alex", null, null, "/inventory-dashboard/sales/alex"),
  ]),
  getItem(
    "Purchases",
    "purchases",
    <ShoppingBag />,
    [
      getItem("Team 1", "team1", null, null, "/inventory-dashboard/purchases/team1"),
      getItem("Team 2", "team2", null, null, "/inventory-dashboard/purchases/team2")
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
  let link = null
  items.forEach(item =>{
    if(item?.key === val?.key){
      link= item?.link
    }else if(item?.children){
      item.children.forEach((child)=>{
        if(child?.key === val?.key){
          link = child?.key
        }
      })
    }
  })
  if(link){
    router.push(link)
  }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleNavigation}
        />
      </Sider>
      <Layout>
        <main className="main_content w-full bg-slate-100 min-h-screen overflow-y-auto">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* Breadcrumb items here */}
            </Breadcrumb>
            {children}
          </Content>
        </main>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
