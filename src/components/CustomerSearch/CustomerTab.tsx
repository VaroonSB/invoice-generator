import { Customer } from "@/utils/mapper";

export const CustomerTab = ({
  customerList,
}: {
  customerList: Array<Customer>;
}) => {
  return (
    <section className="flex flex-wrap gap-6 bg-white p-4 rounded-3xl shadow-md">
      {customerList?.map((customer, index) => (
        <section
          key={index}
          className="flex flex-col gap-2 bg-gray-100 p-4 cursor-pointer hover:scale-105 rounded-3xl w-[32%] shadow-lg"
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
  );
};
