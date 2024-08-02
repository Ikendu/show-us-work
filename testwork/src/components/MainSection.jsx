import DownIcon from "../assets/icons/DownIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import first from "../assets/image/image-3.jpg";
import second from "../assets/image/image-1.png";
import GoodIcon from "../assets/icons/GoodIcon";

const profiles = [
  {
    Image: <img src={first} width={200} className="round rounded-t-lg" />,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: <img src={second} width={200} className="round rounded-t-lg" />,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
  {
    Image: <img src={first} width={200} className="round rounded-t-lg" />,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: <img src={second} width={200} className="round rounded-t-lg" />,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
];

export default function MainSection() {
  return (
    <div className="p-10 pl-20 pr-20">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center bg-[#E3E2E2] rounded-xl p-3 px-8">
          <p>Categories</p>
          <DownIcon />
        </div>
        <div className="flex gap-3 items-center bg-[#E3E2E2] rounded-full px-8 w-[40%]">
          <SearchIcon />
          <input placeholder="Search" className="bg-[#E3E2E2] " />
        </div>
      </div>
      <div>
        <div className="flex py-10 gap-5 justify-between">
          {profiles.map((profile, idx) => (
            <div key={idx} className="rounded-lg bg-[#E3E2E2] text-sm">
              <div>{profile.Image}</div>
              <div className="p-3">
                <div className="font-bold flex gap-3 justify-between">
                  {profile.name} <GoodIcon />
                </div>
                <div>{profile.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
