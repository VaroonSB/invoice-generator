"use client";

import Link from "next/link";
import { getCount } from "./helper";

export const InvoiceList = ({
  invoices,
  invoiceList,
}: {
  invoices: Record<string, Record<string, string[]>>;
  invoiceList: Array<{
    year: string;
    month: string;
    name: string;
    count: number;
  }>;
}) => {
  return (
    <div className="flex flex-col gap-6 p-4 mx-4 mb-8 bg-white rounded-3xl shadow-xl">
      {Object.entries(invoices).map(([year, months]) => (
        <div key={year} className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800">{year}</h3>
            <h3 className="text-sm font-bold text-gray-500">{getCount(invoiceList, "year", year)}</h3>
          </div>
          <div className="flex flex-wrap gap-6 px-8 py-4 w-full">
            {Object.entries(months).map(([month, invoices]) => (
              <div
                key={month}
                className="flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl shadow-xl w-[32.1%]"
              >
                <div className="flex justify-between">
                  <h4 className="text-xl font-semibold text-gray-700">
                    {month}
                  </h4>
                  <h6 className="text-sm font-semibold text-gray-500">
                    {getCount(invoiceList, "month", month)}
                  </h6>
                </div>
                <div className="flex flex-wrap gap-3">
                  {invoices.map((invoice) => (
                    <Link
                      key={invoice}
                      className="text-gray-700 text-sm bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-xl shadow-lg list-none transform transition-transform hover:scale-110"
                      href={invoice}
                    >
                      {invoice.replace(".xlsx", "")}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
