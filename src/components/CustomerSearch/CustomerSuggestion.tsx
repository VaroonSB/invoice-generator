import { Customer } from "@/utils/mapper";

export const CustomerSuggestion = ({
  customerList,
  onSelectCustomer,
}: {
  customerList: Customer[];
  onSelectCustomer: (customer: Customer) => void;
}) => {
  return (
    <ul className="bg-white p-4 rounded-lg shadow-md">
      {customerList?.map((customer, index) => (
        <li
          key={index}
          className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
          onClick={() => {
            onSelectCustomer(customer);
          }}
        >
          <div className="font-bold text-lg">{customer.customerName}</div>
          <div className="text-sm text-gray-600">
            {customer.addressLine1} {customer.addressLine2}{" "}
            {customer.addressLine3}
          </div>
          <div className="text-sm text-gray-500">{customer.customerGst}</div>
        </li>
      ))}
    </ul>
  );
};
