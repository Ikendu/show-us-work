import DownIcon from "../assets/icons/DownIcon";
import SearchIcon from "../assets/icons/SearchIcon";

export default function MainSection() {
  return (
    <div className="p-10 pl-20 pr-20">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center bg-[#E3E2E2] rounded-md p-3 px-6">
          <p>Categories</p>
          <DownIcon />
        </div>
        <div className="flex gap-3 items-center">
          <SearchIcon />
          <p>Search</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
