import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const StatsAndMessages = () => {
  const active =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active";
  const inActive =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300";

  const [ActiveMenu, setActiveMenu] = useState<number>(2);
  return (
    <div className="lg:block hidden w-80 bg-gray-50 flex-shrink-0 pb-4 px-4 rounded-tl-3xl overflow-y-auto">
      <div className="text-sm sticky top-0 bg-gray-50 pt-6 font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <button
              onClick={() => setActiveMenu(1)}
              className={ActiveMenu === 1 ? active : inActive}
            >
              Stats
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveMenu(2)}
              className={ActiveMenu === 2 ? active : inActive}
              aria-current="page"
            >
              Messages
            </button>
          </li>
        </ul>
      </div>

      {/* 1 */}
      {ActiveMenu === 1 && (
        <div className="py-4 space-y-2">
          <h5 className="text-center font-medium mt-4">No stats yet...</h5>
        </div>
      )}

      {/* 2 */}
      {ActiveMenu === 2 && (
        <>
          {[1, 2, 3, 4, 5].map(() => (
            <div className="py-1 ">
              <div className="bg-white hover:bg-gray-200 cursor-pointer rounded-xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-cyan-400 text-white rounded-xl">
                    J
                  </button>
                  <span className="text-xs font-medium text-gray-600">
                    Jan 2, 12:31pm
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-base">James Robinson</h5>
                    <p className="text-sm text-gray-500">
                      I need some maintenance....
                    </p>
                  </div>
                  <ChevronRightIcon className="w-6 text-black" />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default StatsAndMessages;
