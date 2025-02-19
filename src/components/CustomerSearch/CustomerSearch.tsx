"use client";

import { RefObject, useState } from "react";
import { SearchInput } from "../Input";
import { Button } from "../Button";
import { useCustomer } from "@/hooks/useCustomer";

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
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const { customerList, setCustomerList, searchCustomer } = useCustomer();

  const searchHandler = async () => {
    await searchCustomer(customerQuery);
    setCustomerQuery("");
  };

  return (
    <>
      <div className="flex gap-2">
        <SearchInput
          title="Search Customer"
          value={customerQuery}
          onChange={(event) => {
            setCustomerQuery(event.target.value);
            setCustomerList([]);
          }}
        />
        <Button label="Search" onClick={searchHandler} />
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
