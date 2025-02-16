"use client";

import { useRef, useState } from "react";
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

  const [itemCount, setItemCount] = useState(1);

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
            <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Customer Details
              </h3>
              <Input
                title="Customer Name"
                type="text"
                ref={customerNameRef}
                required
              />
              <Input title="Address Line 1" type="text" ref={addressLine1Ref} />
              <Input title="Address Line 2" type="text" ref={addressLine2Ref} />
              <Input title="Address Line 3" type="text" ref={addressLine3Ref} />
              <Input title="Customer GST" type="text" ref={customerGstRef} />
            </section>

            <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Tax and Total
              </h3>
              <Input title="SGST" type="text" ref={sgstRef} />
              <Input title="CGST" type="text" ref={cgstRef} />
              <Input title="IGST" type="text" ref={igstRef} />
              <Input title="Round Off" type="text" ref={roundOffRef} />
              <Input title="Total" type="text" ref={totalRef} required />
              <Input
                title="Total In Words"
                type="text"
                ref={totalInWordsRef}
                required
              />
            </section>
          </div>

          <div className="flex-col w-1/2">
            <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Invoice Number
              </h3>
              <Input
                title="Invoice Number"
                type="text"
                ref={invoiceNumberRef}
                required
              />
            </section>

            <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Items
              </h3>
              <Input
                title="HSN Code 1"
                type="text"
                ref={hsnCode1Ref}
                defaultValue="38101090"
                required
              />
              <Input
                title="Particular 1"
                type="text"
                ref={particular1Ref}
                defaultValue="COVER-ALL POWDER"
                required
              />
              <Input title="KG 1" type="text" ref={kg1Ref} required />
              <Input title="Rate 1" type="text" ref={rate1Ref} required />
              <Input title="Amount 1" type="text" ref={amount1Ref} required />

              {itemCount >= 2 && (
                <>
                  <Input title="HSN Code 2" type="text" ref={hsnCode2Ref} />
                  <Input
                    title="Particular 2"
                    type="text"
                    ref={particular2Ref}
                  />
                  <Input title="KG 2" type="text" ref={kg2Ref} />
                  <Input title="Rate 2" type="text" ref={rate2Ref} />
                  <Input title="Amount 2" type="text" ref={amount2Ref} />
                </>
              )}

              {itemCount >= 3 && (
                <>
                  <Input title="HSN Code 3" type="text" ref={hsnCode3Ref} />
                  <Input
                    title="Particular 3"
                    type="text"
                    ref={particular3Ref}
                  />
                  <Input title="KG 3" type="text" ref={kg3Ref} />
                  <Input title="Rate 3" type="text" ref={rate3Ref} />
                  <Input title="Amount 3" type="text" ref={amount3Ref} />
                </>
              )}

              {itemCount >= 4 && (
                <>
                  <Input title="HSN Code 4" type="text" ref={hsnCode4Ref} />
                  <Input
                    title="Particular 4"
                    type="text"
                    ref={particular4Ref}
                  />
                  <Input title="KG 4" type="text" ref={kg4Ref} />
                  <Input title="Rate 4" type="text" ref={rate4Ref} />
                  <Input title="Amount 4" type="text" ref={amount4Ref} />
                </>
              )}

              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setItemCount((prev) => prev + 1)}
                  className="flex items-center justify-center w-8 h-8 border rounded-full bg-green-500 text-white hover:bg-green-600"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setItemCount((prev) => prev - 1)}
                  className="flex items-center justify-center w-8 h-8 border rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  -
                </button>
              </div>
            </section>
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
