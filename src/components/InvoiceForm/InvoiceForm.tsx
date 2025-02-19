"use client";

import { CustomerSection } from "./CustomerSection";
import { TaxAndTotalSection } from "./TaxAndTotalSection";
import { InvoiceNumberSection } from "./InvoiceNumberSection";
import { ItemSection } from "./ItemSection";
import { OrderMetadataSection } from "./OrderMetadataSection";
import { useInvoice } from "@/context/InvoiceContext";

export const InvoiceForm = () => {
  const { createInvoice } = useInvoice();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    await createInvoice();
  };

  return (
    <div className="flex flex-col justify-center w-full bg-gray-100 py-4">
      <form
        className="flex flex-col items-center justify-around bg-white p-8 rounded-3xl px-8 mx-4"
        onSubmit={submitHandler}
      >
        <h2 className="flex text-2xl font-bold w-full mb-4 text-gray-700 justify-center">
          Invoice Form
        </h2>
        <div className="flex flex-row w-full gap-6">
          <div className="flex-col w-1/2">
            <CustomerSection />

            <TaxAndTotalSection />
          </div>

          <div className="flex-col w-1/2">
            <InvoiceNumberSection />

            <OrderMetadataSection />

            <ItemSection />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-transform duration-300 ease-in-out w-2/3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
