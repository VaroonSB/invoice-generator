"use client";

import { Customer } from "@/utils/mapper";
import { useState } from "react";
import { toast } from "react-toastify";

export function useCustomer() {
  const [customerList, setCustomerList] = useState<Array<Customer>>([]);

  const searchCustomer = async (customerQuery: string) => {
    try {
      const response = await fetch("/api/customer/search", {
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
    } catch (error) {
      console.error("Error:", error);
      // alert("An error occurred while searching the customer.");
    }
  };

  const createCustomer = async (
    {
      customerName,
      addressLine1,
      addressLine2,
      addressLine3,
      customerGst,
    }: Customer,
    isEdit: boolean
  ) => {
    try {
      const searchParams = new URLSearchParams({
        edit: isEdit ? "true" : "false",
      });
      const response = await fetch(`/api/customer/create?${searchParams}`, {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          customerName,
          addressLine1,
          addressLine2,
          addressLine3,
          customerGst,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("HTTP error!");
      }
      toast.success("Customer added successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      toast.warning(`Customer addition failed: ${error.message}`);
    }
  };

  return {
    customerList,
    setCustomerList,
    searchCustomer,
    createCustomer,
  };
}
