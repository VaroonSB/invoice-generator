import { Customer } from "@/utils/mapper";

export const CustomerTab = ({
  customerList,
}: {
  customerList: Array<Customer>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-4 text-lg font-semibold">Total: {customerList.length}</div>
      <section className="flex flex-wrap gap-5 bg-white p-4 rounded-3xl shadow-md">
        {customerList?.map((customer, index) => (
          <section
            key={index}
            className="flex flex-col gap-2 bg-gray-100 p-4 cursor-pointer transition-transform hover:scale-105 rounded-3xl w-[32.36%] shadow-xl"
            onClick={() => {
              // TODO: do some
            }}
          >
            <div className="font-bold text-lg">{customer.customerName}</div>
            <div className="text-sm text-gray-600">
              {customer.addressLine1} {customer.addressLine2}{" "}
              {customer.addressLine3}
            </div>
            <div className="text-sm text-gray-500">{customer.customerGst}</div>
          </section>
        ))}
      </section>
    </div>
  );
};
