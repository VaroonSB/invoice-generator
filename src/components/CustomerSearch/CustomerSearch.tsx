import { Customer } from "@/utils/mapper";
import { RefObject, useState } from "react";

interface CustomerSearchProps {
  refs: {
    customerNameRef: RefObject<HTMLInputElement | null>;
    addressLine1Ref: RefObject<HTMLInputElement | null>;
    addressLine2Ref: RefObject<HTMLInputElement | null>;
    addressLine3Ref: RefObject<HTMLInputElement | null>;
    customerGstRef: RefObject<HTMLInputElement | null>;
  };
}

export const CustomerSearch = ({ refs }: CustomerSearchProps) => {
  const {
    customerNameRef,
    addressLine1Ref,
    addressLine2Ref,
    addressLine3Ref,
    customerGstRef,
  } = refs;
  const [customerList, setCustomerList] = useState<Array<Customer>>([]);
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const searchHandler = async () => {
    try {
      const response = await fetch("api/search/customer", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          customerName: customerQuery,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();
      setCustomerList(data.result);
      setCustomerQuery("");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while searching the customer.");
    }
  };
  return (
    <>
      <div className="flex gap-2">
        <input
          className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="Search Customer"
          value={customerQuery}
          placeholder="Search Customer"
          onChange={(event) => {
            setCustomerQuery(event.target.value);
            setCustomerList([]);
          }}
        />
        <button
          type="button"
          onClick={searchHandler}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
      {customerList.length > 0 && (
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {customerList?.map((customer, index) => (
            <li
              key={index}
              className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => {
                customerNameRef.current!.value = customer.customerName;
                addressLine1Ref.current!.value = customer.addressLine1;
                addressLine2Ref.current!.value = customer.addressLine2;
                addressLine3Ref.current!.value = customer.addressLine3;
                customerGstRef.current!.value = customer.customerGst;
                setCustomerList([]);
              }}
            >
              <div className="font-bold text-lg">{customer.customerName}</div>
              <div className="text-sm text-gray-600">
                {customer.addressLine1} {customer.addressLine2}{" "}
                {customer.addressLine3}
              </div>
              <div className="text-sm text-gray-500">
                {customer.customerGst}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
