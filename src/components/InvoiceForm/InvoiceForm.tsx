"use client";

import { useRef } from "react";
import { Input } from "../Input";

export const InvoiceForm = () => {
  const invoiceNumberRef = useRef<HTMLInputElement>(null);

  const customerNameRef = useRef<HTMLInputElement>(null);
  const addressLine1Ref = useRef<HTMLInputElement>(null);
  const addressLine2Ref = useRef<HTMLInputElement>(null);
  const addressLine3Ref = useRef<HTMLInputElement>(null);
  const customerGstRef = useRef<HTMLInputElement>(null);

  const despatchThroughRef = useRef<HTMLInputElement>(null);
  const orderThroughRef = useRef<HTMLInputElement>(null);
  const orderDateRef = useRef<HTMLInputElement>(null);

  const sgstRef = useRef<HTMLInputElement>(null);
  const cgstRef = useRef<HTMLInputElement>(null);
  const igstRef = useRef<HTMLInputElement>(null);
  const roundOffRef = useRef<HTMLInputElement>(null);
  const totalRef = useRef<HTMLInputElement>(null);
  const totalInWordsRef = useRef<HTMLInputElement>(null);

  const hsnCode1Ref = useRef<HTMLInputElement>(null);
  const hsnCode2Ref = useRef<HTMLInputElement>(null);
  const hsnCode3Ref = useRef<HTMLInputElement>(null);
  const hsnCode4Ref = useRef<HTMLInputElement>(null);

  const particular1Ref = useRef<HTMLInputElement>(null);
  const particular2Ref = useRef<HTMLInputElement>(null);
  const particular3Ref = useRef<HTMLInputElement>(null);
  const particular4Ref = useRef<HTMLInputElement>(null);

  const kg1Ref = useRef<HTMLInputElement>(null);
  const kg2Ref = useRef<HTMLInputElement>(null);
  const kg3Ref = useRef<HTMLInputElement>(null);
  const kg4Ref = useRef<HTMLInputElement>(null);

  const rate1Ref = useRef<HTMLInputElement>(null);
  const rate2Ref = useRef<HTMLInputElement>(null);
  const rate3Ref = useRef<HTMLInputElement>(null);
  const rate4Ref = useRef<HTMLInputElement>(null);

  const amount1Ref = useRef<HTMLInputElement>(null);
  const amount2Ref = useRef<HTMLInputElement>(null);
  const amount3Ref = useRef<HTMLInputElement>(null);
  const amount4Ref = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("api/invoice", {
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify({
          invoiceNumber: invoiceNumberRef.current?.value,

          customerName: customerNameRef.current?.value,
          addressLine1: addressLine1Ref.current?.value,
          addressLine2: addressLine2Ref.current?.value,
          addressLine3: addressLine3Ref.current?.value,
          customerGst: customerGstRef.current?.value,

          despatchThrough: despatchThroughRef.current?.value,
          orderThrough: orderThroughRef.current?.value,
          orderDate: orderDateRef.current?.value,

          items: [
            {
              hsnCode: hsnCode1Ref.current?.value,
              particular: particular1Ref.current?.value,
              kg: kg1Ref.current?.value,
              rate: rate1Ref.current?.value,
              amount: amount1Ref.current?.value,
            },
            {
              hsnCode: hsnCode2Ref.current?.value,
              particular: particular2Ref.current?.value,
              kg: kg2Ref.current?.value,
              rate: rate2Ref.current?.value,
              amount: amount2Ref.current?.value,
            },
            {
              hsnCode: hsnCode3Ref.current?.value,
              particular: particular3Ref.current?.value,
              kg: kg3Ref.current?.value,
              rate: rate3Ref.current?.value,
              amount: amount3Ref.current?.value,
            },
            {
              hsnCode: hsnCode4Ref.current?.value,
              particular: particular4Ref.current?.value,
              kg: kg4Ref.current?.value,
              rate: rate4Ref.current?.value,
              amount: amount4Ref.current?.value,
            },
          ],

          sgst: sgstRef.current?.value,
          cgst: cgstRef.current?.value,
          igst: igstRef.current?.value,
          roundOff: roundOffRef.current?.value,
          total: totalRef.current?.value,
          totalInWords: totalInWordsRef.current?.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <Input title="Invoice Number" type="text" ref={invoiceNumberRef} />
      <Input title="Customer Name" type="text" ref={customerNameRef} />
      <Input title="Address Line 1" type="text" ref={addressLine1Ref} />
      <Input title="Address Line 2" type="text" ref={addressLine2Ref} />
      <Input title="Address Line 3" type="text" ref={addressLine3Ref} />
      <Input title="Customer GST" type="text" ref={customerGstRef} />
      <Input title="Despatch Through" type="text" ref={despatchThroughRef} />
      <Input title="Order Through" type="text" ref={orderThroughRef} />
      <Input title="Order Date" type="text" ref={orderDateRef} />

      <Input title="HSN Code 1" type="text" ref={hsnCode1Ref} />
      <Input title="Particular 1" type="text" ref={particular1Ref} />
      <Input title="KG 1" type="text" ref={kg1Ref} />
      <Input title="Rate 1" type="text" ref={rate1Ref} />
      <Input title="Amount 1" type="text" ref={amount1Ref} />

      <Input title="HSN Code 2" type="text" ref={hsnCode2Ref} />
      <Input title="Particular 2" type="text" ref={particular2Ref} />
      <Input title="KG 2" type="text" ref={kg2Ref} />
      <Input title="Rate 2" type="text" ref={rate2Ref} />
      <Input title="Amount 2" type="text" ref={amount2Ref} />

      <Input title="HSN Code 3" type="text" ref={hsnCode3Ref} />
      <Input title="Particular 3" type="text" ref={particular3Ref} />
      <Input title="KG 3" type="text" ref={kg3Ref} />
      <Input title="Rate 3" type="text" ref={rate3Ref} />
      <Input title="Amount 3" type="text" ref={amount3Ref} />

      <Input title="HSN Code 4" type="text" ref={hsnCode4Ref} />
      <Input title="Particular 4" type="text" ref={particular4Ref} />
      <Input title="KG 4" type="text" ref={kg4Ref} />
      <Input title="Rate 4" type="text" ref={rate4Ref} />
      <Input title="Amount 4" type="text" ref={amount4Ref} />

      <Input title="SGST" type="text" ref={sgstRef} />
      <Input title="CGST" type="text" ref={cgstRef} />
      <Input title="IGST" type="text" ref={igstRef} />
      <Input title="Round Off" type="text" ref={roundOffRef} />
      <Input title="Total" type="text" ref={totalRef} />
      <Input title="Total In Words" type="text" ref={totalInWordsRef} />

      <button type="submit">Submit</button>
    </form>
  );
};
