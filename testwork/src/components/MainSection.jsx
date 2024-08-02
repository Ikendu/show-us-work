import DownIcon from "../assets/icons/DownIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import first from "../assets/image/image-3.jpg";
import second from "../assets/image/image-1.png";
import GoodIcon from "../assets/icons/GoodIcon";

// let imageWidth = 100

const profiles = [
  {
    Image: first,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: second,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
  {
    Image: first,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: second,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
  {
    Image: first,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: second,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
  {
    Image: first,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: second,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
  {
    Image: first,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: second,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
  {
    Image: first,
    name: `Emmanuel Chisom Eze`,
    role: `Leadership & Business`,
  },
  {
    Image: second,
    name: `Stella Ogochukwu`,
    role: `Professional/Expert`,
  },
];

export default function MainSection() {
  return (
    <div className="p-10 overflow-scroll flowing h-screen">
      <div className=" md:flex md:flex-row justify-between flex flex-col-reverse">
        <div className="flex gap-3 items-center bg-[#E3E2E2] rounded-xl p-3 px-8 mt-4 w-[40%] md:w-[20%]">
          <p>Categories</p>
          <DownIcon />
        </div>
        <div className="flex gap-3 items-center bg-[#E3E2E2] rounded-full px-8 mt-4 md:w-[40%]">
          <SearchIcon />
          <input
            placeholder="Search"
            className="bg-[#E3E2E2] w-[100%]focus focus:border-none m-3 w-full"
          />
        </div>
      </div>
      <div className=" overflow-hidden">
        <div className="list justify-evenly content-evenly py-10">
          {profiles.map((profile, idx) => (
            <div key={idx} className="rounded-lg bg-[#E3E2E2] text-sm ">
              <img src={profile.Image} className="round rounded-t-lg" />
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
