import {
  Bell,
  ChevronDown,
  History,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function Header() {
  return (
    <div className="top_header_part">
      <div className="left ">
        <button>
          <History className="hover:text-blue-600"/>
        </button>
        <SearchInput className="searchInput transition-all ease-in-out hover:w-[400px] duration-50 hover:border-blue-600" />
      </div>
      <div className="right flex items-center">
        <div className="right_1 ">
          <button className="plus_icon">
            <Plus />
          </button>
        </div>
        <div className="right_2 ">
          <button>
            <Users />
          </button>
          <button>
            <Bell />
          </button>
          <button>
            <Settings />
          </button>
        </div>
        <div className="right_3 flex gap-2 items-center">
          <Popover className="userDropdown">
            <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
              <div className="userName flex gap-2 items-center">
                Trishon
                <ChevronDown />
              </div>
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="dropdown_box mt-4 pl-4 divide-y bg-slate-900 divide-white/5 rounded-xl  text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="p-3 w-[250px] mr-4">
                <a
                  className="block rounded-lg py-2 px-3 transition text-white"
                  href="#"
                >
                  <p className="font-semibold">Insights</p>
                  <p className="text-gray-300">
                    Measure actions your users take
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition text-white"
                  href="#"
                >
                  <p className="font-semibold ">Automations</p>
                  <p className="text-gray-300">
                    Create your own targeted content
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition text-white"
                  href="#"
                >
                  <p className="font-semibold ">Reports</p>
                  <p className="text-gray-300">Keep track of your growth</p>
                </a>

                <a
                  className="block rounded-lg py-2 px-3 transition text-white"
                  href="#"
                >
                  <p className="font-semibold ">Documentation</p>
                  <p className="text-gray-300">
                    Start integrating products and tools
                  </p>
                </a>
              </div>
            </PopoverPanel>
          </Popover>

          <button className="userImage flex gap-2 items-center">
            <Image
              src="/default_user.jpg"
              alt="user"
              width={30}
              height={30}
              className="border-1 border-slate-900 rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
