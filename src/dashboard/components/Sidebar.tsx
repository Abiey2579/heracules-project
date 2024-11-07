import { Cog6ToothIcon, EyeIcon, LinkIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathRoundedSquareIcon,
  ArrowsRightLeftIcon,
  ChevronDownIcon,
  CreditCardIcon,
  RectangleStackIcon,
  ScaleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Sidebar = () => {
  const [TogglePaymentItems, setTogglePaymentItems] = useState<boolean>(true);
  const [ToggleCommerceItems, setToggleCommerceItems] =
    useState<boolean>(false);
  return (
    <div className="w-80 bg-gray-50 h-screen py-6 px-8 overflow-hidden">
      <h1 className="font-bold text-3xl mb-9">Payd</h1>

      <div className="py-2">
        <button
          onClick={() => setTogglePaymentItems(!TogglePaymentItems)}
          className="flex justify-between items-center w-full p-2 rounded hover:bg-gray-200"
        >
          <h4 className="font-semibold">Payments</h4>
          <ChevronDownIcon className="w-5" />
        </button>
        {TogglePaymentItems && (
          <div>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <ArrowsRightLeftIcon className="w-5" />
              <span>Transactions</span>
            </button>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <UsersIcon className="w-5" />
              <span>Customers</span>
            </button>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <CreditCardIcon className="w-5" />
              <span>Payouts</span>
            </button>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <ScaleIcon className="w-5" />
              <span>Balances</span>
            </button>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <ArrowPathRoundedSquareIcon className="w-5" />
              <span>Subscriptions</span>
            </button>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <RectangleStackIcon className="w-5" />
              <span>Payment plans</span>
            </button>
          </div>
        )}
      </div>
      <hr />
      <div className="py-2">
        <button
          onClick={() => setToggleCommerceItems(!ToggleCommerceItems)}
          className="flex justify-between items-center w-full p-2 rounded hover:bg-gray-200"
        >
          <h4 className="font-semibold">Commerce</h4>
          <ChevronDownIcon className="w-5" />
        </button>
        {ToggleCommerceItems && (
          <div>
            <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
              <ArrowsRightLeftIcon className="w-5" />
              <span>Commerce Item</span>
            </button>
          </div>
        )}
      </div>
      <hr />
      <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
        <LinkIcon className="w-5" />
        <span>Referrals</span>
      </button>
      <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
        <EyeIcon className="w-5" />
        <span>Audit Logs</span>
      </button>
      <button className="flex gap-4 items-center w-full p-2  hover:bg-gray-200">
        <Cog6ToothIcon className="w-5" />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default Sidebar;
