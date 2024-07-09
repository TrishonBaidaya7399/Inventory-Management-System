import React from "react";
import HomeNavbar from "@/components/dashboard/home/HomeNavbar.js";
function Layout({ children }) {
 
  return (
    <div className="homepage_layout">
     <HomeNavbar/>
      {/* <div className="content">{children}</div> */}
    </div>
  );
}

export default Layout;
