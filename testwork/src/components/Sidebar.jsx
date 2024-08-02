import { useState } from "react";
import BellIcon from "../assets/icons/BellIcon";
import ExploreIcon from "../assets/icons/ExploreIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import SettingIcon from "../assets/icons/SettingIcon";
import UserIcon from "../assets/icons/UserIcon";
import UserPlusIcon from "../assets/icons/UserPlusIcon";
import VerifyIcon from "../assets/icons/VerifyIcon";
import WalletIcon from "../assets/icons/WalletIcon";

const sidebarItems = [
  { name: `Home`, Icon: <HomeIcon /> },
  { name: `Explore`, Icon: <ExploreIcon /> },
  { name: `Profile`, Icon: <UserIcon /> },
  { name: `Notifications`, Icon: <BellIcon /> },
  { name: `Wallet`, Icon: <WalletIcon /> },
  { name: `Your Circle`, Icon: <UserPlusIcon /> },
  { name: `Get Verified`, Icon: <VerifyIcon /> },
  { name: `Settings`, Icon: <SettingIcon /> },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  const changeBackground = (id) => {
    setSelected(id);
  };
  return (
    <div className="bg-[#F2F2F2] h-screen ">
      <div className="flex flex-col pt-10 pb-10 ">
        {sidebarItems.map((item, idx) => (
          <div
            onMouseEnter={() => changeBackground(idx)}
            className={`flex gap-4 items-center p-4 pl-8 w-full ${
              selected == idx && ` bg-[#E3E2E2]`
            }`}
          >
            <p>{item.Icon}</p>
            <div>{item.name}</div>
          </div>
        ))}
        <div className="p-8">
          <button className=" bg-[#FA6C6C] flex gap-2 rounded-lg px-7 py-3 text-white text-lg ">
            <LogoutIcon />
            <p className="pr-1">Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
}
