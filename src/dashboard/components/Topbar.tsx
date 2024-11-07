import {
  BellAlertIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import UserImage from "../../assets/user.png";

const Topbar = () => {
  return (
    <div className="px-4 py-1 border-b flex items-center justify-between gap-4">
      <form className="flex gap-2 bg-gray-50 border rounded-full px-4">
        <MagnifyingGlassIcon className="w-5" />{" "}
        <input
          type="text"
          className="bg-transparent outline-none border-none px-4 py-2.5"
        />
      </form>

      <div className="flex items-center gap-4">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          <span className="ms-3 text-sm font-semibold text-gray-900 dark:text-gray-300">
            Live
          </span>
        </label>

        <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-100">
          <span className="font-medium">English</span>
          <ChevronDownIcon className="w-5" />
        </button>
        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded">
          <BellAlertIcon className="w-5" />
        </button>
        <div className="flex border rounded cursor-pointer select-none space-x-2 hover:bg-gray-100">
          <img src={UserImage} alt="" />
          <div className="flex items-center gap-4 p-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Anddy's Makeover</span>
              <span className="text-xs font-medium">ID: 1234567</span>
            </div>
            <ChevronDownIcon className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
