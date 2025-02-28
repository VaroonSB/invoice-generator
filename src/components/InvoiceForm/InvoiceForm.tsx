"use client";

import { CustomerSection } from "./CustomerSection";
import { TaxAndTotalSection } from "./TaxAndTotalSection";
import { InvoiceNumberSection } from "./InvoiceNumberSection";
import { ItemSection } from "./ItemSection";
import { OrderMetadataSection } from "./OrderMetadataSection";
import { useInvoice } from "@/context/InvoiceContext";
import { useCustomer } from "@/hooks/useCustomer";
import { INITIAL_INVOICE_VALUES } from "@/context/InvoiceContext/constants";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "@/context/AppContext";

export const InvoiceForm = () => {
  const { setLoader } = useAppContext();
  const { formData, createInvoice, generatePdf, setFormData, operation } =
    useInvoice();
  const { createCustomer } = useCustomer();

  const [print, setPrint] = useState<boolean>(false);

  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_host, _path, year, month, invoiceName] = usePathname().split("/");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoader(true);
    if (operation === "create") {
      const {
        customerName,
        addressLine1,
        addressLine2,
        addressLine3,
        customerGst,
      } = formData.customer;
      await createCustomer({
        customerName,
        addressLine1,
        addressLine2,
        addressLine3,
        customerGst,
      });
    }
    const { status } = await createInvoice();
    if (status === "error") {
      return;
    }
    const { status: generationStatus } = await generatePdf();
    setPrint(true);
    if (generationStatus === "error") {
      setPrint(false);
      toast.warning("PDF not generated. Hence, Print is not available");
    }
    setLoader(false);
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

        {print ? (
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              label="Close"
              classNames="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => {
                setFormData(INITIAL_INVOICE_VALUES);
                router.push("/");
              }}
            />
            <Button
              type="button"
              label="Print"
              classNames="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => {
                setFormData(INITIAL_INVOICE_VALUES);
                router.push(`/invoice/pdf/${year}/${month}/${invoiceName}`);
              }}
            />
          </div>
        ) : (
          <Button
            type="submit"
            label="Submit"
            classNames="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        )}
      </form>
    </div>
  );
};
