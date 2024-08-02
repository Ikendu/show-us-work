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
import aUser from "../assets/icons/user.svg";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [changeIcon, setChangeIcon] = useState(`#494949`);

  const changeBackground = (id) => {
    setSelected(id);
    setChangeIcon(id);
  };

  const sidebarItems = [
    { name: `Home`, Icon: <HomeIcon size={35} changeIcon={changeIcon} /> },
    {
      name: `Explore`,
      Icon: <ExploreIcon size={35} changeIcon={changeIcon} />,
    },
    { name: `Profile`, Icon: <UserIcon size={35} changeIcon={changeIcon} /> },
    {
      name: `Notifications`,
      Icon: <BellIcon size={35} changeIcon={changeIcon} />,
    },
    { name: `Wallet`, Icon: <WalletIcon size={35} changeIcon={changeIcon} /> },
    {
      name: `Your Circle`,
      Icon: <UserPlusIcon size={35} changeIcon={changeIcon} />,
    },
    {
      name: `Get Verified`,
      Icon: <VerifyIcon size={35} changeIcon={changeIcon} />,
    },
    {
      name: `Settings`,
      Icon: <SettingIcon size={35} changeIcon={changeIcon} />,
    },
  ];

  return (
    <div className="bg-[#F2F2F2] h-screen ">
      <div className="flex flex-col pt-10 pb-10 ">
        {sidebarItems.map((item, idx) => (
          <div
            onMouseEnter={() => changeBackground(idx)}
            className={`flex gap-8 items-center p-4 pl-8 w-full  ${
              selected == idx && ` bg-[#E3E2E2] font-bold`
            }`}
          >
            <div className="">{item.Icon}</div>
            <div>{item.name}</div>
            {idx === 3 && ( // only apply to the notification
              <div className="w-3 h-3 bg-[#FE534C] rounded-full "></div>
            )}
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
