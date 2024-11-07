import {
  XMarkIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import StatsAndMessages from "./StatsAndMessages";

type SidebarProps = {
  handleTopbarMobile: Function;
};

const TopbarMobile = (props: SidebarProps) => {
  return (
    <div
      className={`xl:hidden hidden xl:relative fixed xl:z-0 z-30 right-0 top-0 min-w-80 bg-gray-50 h-screen py-6 px-6 MobileSidebarComponent  overflow-y-auto`}
    >
      <div className="flex items-center gap-4 justify-between mb-9">
        <button
          onClick={() => props.handleTopbarMobile()}
          className="p-2 rounded bg-black text-white xl:hidden block"
        >
          <XMarkIcon className="w-5" />
        </button>
      </div>
      <form className="flex gap-2 bg-gray-50 border rounded-full px-4 mt-4">
        <MagnifyingGlassIcon className="w-5" />{" "}
        <input
          type="text"
          className="bg-transparent outline-none border-none px-4 py-2.5"
          placeholder="Search..."
        />
      </form>
      <div className="flex items-center gap-4 justify-between my-4">
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
        <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded">
          <BellAlertIcon className="w-5" />
        </button>
      </div>

      <hr />

      <StatsAndMessages />
    </div>
  );
};

export default TopbarMobile;
