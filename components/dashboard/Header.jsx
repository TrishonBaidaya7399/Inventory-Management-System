import { History } from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="bg-gray-500 flex justify-between items-center">
      <div className="left flex">
        <button>
          <History />
        </button>
       <SearchInput/>
      </div>
      <div className="right flex"></div>
    </div>
  );
}

export default Header;
