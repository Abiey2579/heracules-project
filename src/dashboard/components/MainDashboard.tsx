import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import ChartComponent from "./Chart";
import SuccessRateChart from "./SuccessRateChart";
import PaymentIssuesChart from "./PaymentIssuesChart";

const MainDashboard = () => {
  return (
    <div className="flex-1 p-4 space-y-8 overflow-y-auto">
      <div className="space-y-2">
        <h4 className="font-medium text-orange-400 text-base">👋 Hey Anddy!</h4>
        <h1 className="font-semibold text-xl">
          You earned NGN 3 ,000,000 this month.
        </h1>
      </div>

      {/* CHART STATS */}
      <div className="space-y-2">
        <div className="flex gap-4 items-center">
          <h4 className="font-semibold text-gray-500">Last 30 Days</h4>
          <button className="p-3 bg-purple-100 text-purple-600 hover:bg-purple-200 rounded-xl">
            <ChevronUpDownIcon className="w-5" />
          </button>
        </div>
        <div className="border w-full rounded-3xl p-4">
          <ChartComponent />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-3xl p-4">
          <h4 className="font-semibold text-xl">Success rate</h4>

          <SuccessRateChart />
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <div className="w-6 h-6 inline-block bg-green-200 rounded-lg mr-2"></div>
              <span className="font-medium text-3xl">1</span>
              <p className="text-sm text-gray-400">Unsuccessful</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 inline-block bg-green-600 rounded-lg mr-2"></div>
              <span className="font-medium text-3xl">150</span>
              <p className="text-sm text-gray-400">Successful</p>
            </div>
          </div>
        </div>
        <div className="border rounded-3xl p-4">
          <h4 className="font-semibold text-xl">Payment issues</h4>

          <PaymentIssuesChart />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
