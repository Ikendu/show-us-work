import { useState } from "react";
// for slider components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// all the needed asserts
import BellIcon from "../assets/icons/BellIcon";
import ExploreIcon from "../assets/icons/ExploreIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import SettingIcon from "../assets/icons/SettingIcon";
import UserIcon from "../assets/icons/UserIcon";
import UserPlusIcon from "../assets/icons/UserPlusIcon";
import VerifyIcon from "../assets/icons/VerifyIcon";
import WalletIcon from "../assets/icons/WalletIcon";

export default function SliderMobile() {
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
    {
      name: `Logout`,
      Icon: (
        <button className="text-center p-[5px]  cursor-pointer  bg-[#FA6C6C] rounded-lg text-white ">
          <p className="">Log Out</p>
        </button>
      ),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className={``}>
      <div className="items-center m-5">
        <Slider {...settings}>
          {sidebarItems.map((item, idx) => (
            <div key={idx}>
              <div className="cursor-pointer ">{item.Icon}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
