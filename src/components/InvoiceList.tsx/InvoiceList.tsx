import Link from "next/link";

export const InvoiceList = ({
  invoices,
}: {
  invoices: Record<string, Record<string, string[]>>;
}) => {
  return (
    <div className="flex flex-col gap-6 w-full p-4 m-4 bg-white rounded-2xl">
      {Object.entries(invoices).map(([year, months]) => (
        <div key={year} className="flex flex-col gap-4 w-full">
          <div className="flex items-center p-4 bg-gray-100 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800">{year}</h3>
          </div>
          <div className="flex flex-wrap gap-6 px-8 py-4 w-full">
            {Object.entries(months).map(([month, invoices]) => (
              <div
                key={month}
                className="flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl shadow-xl w-[32%]"
              >
                <h4 className="text-xl font-semibold text-gray-700">{month}</h4>
                <div className="flex flex-wrap gap-4">
                  {invoices.map((invoice) => (
                    <Link
                      key={invoice}
                      className="text-gray-700 bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded-xl shadow-lg list-none transform transition-transform hover:scale-105"
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
