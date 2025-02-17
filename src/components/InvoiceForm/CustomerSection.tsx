"use client";

import { Input } from "../Input";
import { RefObject } from "react";

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
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Customer Details
      </h3>
      <Input title="Customer Name" type="text" ref={customerNameRef} required />
      <Input title="Address Line 1" type="text" ref={addressLine1Ref} />
      <Input title="Address Line 2" type="text" ref={addressLine2Ref} />
      <Input title="Address Line 3" type="text" ref={addressLine3Ref} />
      <Input title="Customer GST" type="text" ref={customerGstRef} />
    </section>
  );
};
