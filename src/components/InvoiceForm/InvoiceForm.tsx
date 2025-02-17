"use client";

import { useRef } from "react";
import { CustomerSection } from "./CustomerSection";
import { TaxAndTotalSection } from "./TaxAndTotalSection";
import { InvoiceNumberSection } from "./InvoiceNumberSection";
import { ItemSection } from "./ItemSection";

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
    <div className="flex flex-col justify-center w-full bg-gray-100 py-10">
      <form
        className="flex flex-col items-center justify-around bg-white p-8 rounded-3xl px-8 mx-4"
        onSubmit={submitHandler}
      >
        <h2 className="text-2xl font-bold w-full mb-4 text-gray-700 px-8">
          Invoice Form
        </h2>
        <div className="flex flex-row w-full gap-6">
          <div className="flex-col w-1/2">
            <CustomerSection
              refs={{
                customerNameRef,
                addressLine1Ref,
                addressLine2Ref,
                addressLine3Ref,
                customerGstRef,
              }}
            />

            <TaxAndTotalSection
              refs={{
                sgstRef,
                cgstRef,
                igstRef,
                roundOffRef,
                totalRef,
                totalInWordsRef,
              }}
            />
          </div>

          <div className="flex-col w-1/2">
            <InvoiceNumberSection refs={{ invoiceNumberRef }} />

            <ItemSection
              refs={{
                hsnCode1Ref,
                hsnCode2Ref,
                hsnCode3Ref,
                hsnCode4Ref,
                particular1Ref,
                particular2Ref,
                particular3Ref,
                particular4Ref,
                kg1Ref,
                kg2Ref,
                kg3Ref,
                kg4Ref,
                rate1Ref,
                rate2Ref,
                rate3Ref,
                rate4Ref,
                amount1Ref,
                amount2Ref,
                amount3Ref,
                amount4Ref,
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
