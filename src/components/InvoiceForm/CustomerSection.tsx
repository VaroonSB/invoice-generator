"use client";

import { Customer } from "@/utils/mapper";
import { Input } from "../Input";
import { RefObject, useState } from "react";

interface CustomerSectionProps {
  refs: {
    customerNameRef: RefObject<HTMLInputElement | null>;
    addressLine1Ref: RefObject<HTMLInputElement | null>;
    addressLine2Ref: RefObject<HTMLInputElement | null>;
    addressLine3Ref: RefObject<HTMLInputElement | null>;
    customerGstRef: RefObject<HTMLInputElement | null>;
  };
}

export const CustomerSection = ({ refs }: CustomerSectionProps) => {
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
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Customer Details
      </h3>
      <div className="flex gap-2">
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {customerList.length > 0 && (
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {customerList?.map((customer, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                customerNameRef.current!.value = customer.customerName;
                addressLine1Ref.current!.value = customer.addressLine1;
                addressLine2Ref.current!.value = customer.addressLine2;
                addressLine3Ref.current!.value = customer.addressLine3;
                customerGstRef.current!.value = customer.customerGst;
                setCustomerList([]);
              }}
            >
              {customer.customerName}
              <br />
              {customer.addressLine1} {customer.addressLine2}{" "}
              {customer.addressLine3}
              <br />
              {customer.customerGst}
            </li>
          ))}
        </ul>
      )}
      <Input title="Customer Name" type="text" ref={customerNameRef} required />
      <Input title="Address Line 1" type="text" ref={addressLine1Ref} />
      <Input title="Address Line 2" type="text" ref={addressLine2Ref} />
      <Input title="Address Line 3" type="text" ref={addressLine3Ref} />
      <Input title="Customer GST" type="text" ref={customerGstRef} />
    </section>
  );
};
