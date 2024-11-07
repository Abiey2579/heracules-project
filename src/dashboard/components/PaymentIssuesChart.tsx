// PaymentIssuesChart.tsx
import React from "react";

const PaymentIssuesChart: React.FC = () => {
  return (
    <div className="max-w-xs mx-auto text-center">
      <div className="flex justify-around items-end h-32 mb-4">
        <div>
          <span>1</span>
          <div className="rounded-tl-lg rounded-tr-lg bg-orange-300 h-2 w-12 block" />
          <span className="text-gray-500">a</span>
        </div>
        <div>
          <span>5</span>
          <div className="rounded-tl-lg rounded-tr-lg bg-yellow-300 h-10 w-12 block" />
          <span className="text-gray-500">x</span>
        </div>
        <div>
          <span>3</span>
          <div className="rounded-tl-lg rounded-tr-lg bg-red-300 h-6 w-12 block" />
          <span className="text-gray-500">o</span>
        </div>
        <div>
          <span>10</span>
          <div className="rounded-tl-lg rounded-tr-lg bg-cyan-300 h-20 w-12 block" />
          <span className="text-gray-500">n</span>
        </div>
      </div>
      <p className="text-orange-500 font-medium text-lg mb-4">
        Total number of errors: <span className="font-bold">19</span>
      </p>
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-orange-300 text-white flex justify-center items-center font-bold">
            a
          </span>
          <p>Customer erros</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-yellow-300 text-white flex justify-center items-center font-bold">
            x
          </span>
          <p>Fraud blocks</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-red-300 text-white flex justify-center items-center font-bold">
            o
          </span>
          <p>Bank errors</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-cyan-300 text-white flex justify-center items-center font-bold">
            n
          </span>
          <p>System errors</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentIssuesChart;
