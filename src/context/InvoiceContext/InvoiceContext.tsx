"use client";

import { Customer, Invoice, SHORT_MONTH } from "@/utils/mapper";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { INITIAL_INVOICE_VALUES } from "./constants";
import { parseDate } from "@/utils/date";
import { toast } from "react-toastify";

interface CustomResponse {
  status: "success" | "error";
  message?: string;
  error?: Error;
}

interface InvoiceContextType {
  invoiceList: Array<{
    year: string;
    month: string;
    name: string;
    count: number;
  }>;
  searchInvoice: (
    yearQuery: string,
    monthQuery: string,
    customerQuery: string
  ) => Promise<void>;
  createInvoice: () => Promise<CustomResponse>;
  generatePdf: () => Promise<CustomResponse>;
  formData: Invoice;
  setFormData: (value: Invoice) => void;
  setCustomerForm: (value: Customer) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Invoice["items"][0]
  ) => void;
  handleNestedChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    section: keyof Invoice["customer"]
  ) => void;
  operation: "create" | "edit";
}

// @ts-expect-error: ignore initial context creation
const InvoiceContext = createContext<InvoiceContextType>(null);

export const useInvoice = () => useContext(InvoiceContext);

interface InvoiceContextProviderProps {
  page?: "create" | "edit";
  children: ReactNode;
  year?: string;
  month?: string;
  invoiceName?: string;
}

export const InvoiceContextProvider = ({
  page = "create",
  children,
  year,
  month,
  invoiceName,
}: InvoiceContextProviderProps) => {
  const [invoiceList, setInvoiceList] = useState<
    Array<{ year: string; month: string; name: string; count: number }>
  >([]);

  const [operation] = useState<"create" | "edit">(page);

  const [formData, setFormData] = useState<Invoice>(INITIAL_INVOICE_VALUES);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: keyof Invoice["customer"]
  ) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      customer: {
        ...prev.customer,
        [section]: value,
      },
    }));
  };

  const handleItemChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Invoice["items"][0]
  ) => {
    const { value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const setCustomerForm = (customer: Customer) => {
    setFormData((prev: Invoice) => ({
      ...prev,
      customer,
    }));
  };

  const searchInvoice = async (
    yearQuery: string,
    monthQuery: string,
    customerQuery: string
  ) => {
    try {
      const response = await fetch("/api/invoice/search", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          yearInput: yearQuery,
          monthInput: monthQuery,
          customerInput: customerQuery,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();
      setInvoiceList(data.result);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while searching the invoices.");
    }
  };

  const createInvoice = async () => {
    try {
      const queryParams = new URLSearchParams({
        edit: "true",
      });
      const response = await fetch(`/api/invoice/create?${queryParams}`, {
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      toast.success("Invoice created successfully");
      return {
        status: "success",
        message: "Invoice created successfully",
      } as CustomResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(`Invoice creation error: ${error.message}`);
      return { status: "error", error } as CustomResponse;
    }
  };

  const fetchInvoice = async () => {
    try {
      const queryParams = new URLSearchParams({
        year: year || "",
        month: month || "",
        invoiceName: invoiceName || "",
      }).toString();

      const response = await fetch(`/api/invoice?${queryParams}`, {
        cache: "no-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();
      setFormData(data.result);
      toast.success("Invoice fetched");
      return { status: "success", message: "Invoice fetched" };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(`Invoice fetch error: ${error.message}`);
      return { status: "error", error };
    }
  };

  useEffect(() => {
    if (operation === "edit") {
      void fetchInvoice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation]);

  const generatePdf = async () => {
    try {
      const invoiceDate = parseDate(formData.invoiceDate);
      const response = await fetch("/api/invoice/pdf", {
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify({
          year: invoiceDate.getFullYear().toString(),
          month: SHORT_MONTH[invoiceDate.getMonth()],
          invoiceName: `${formData.invoiceNumber}-${formData.customer.customerName}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      toast.success("Invoice PDF generated");
      return {
        status: "success",
        message: "Invoice PDF generated",
      } as CustomResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(`Invoice PDF Error: ${error.message}`);
      return { status: "error", error } as CustomResponse;
    }
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoiceList,
        searchInvoice,
        createInvoice,
        generatePdf,
        formData,
        setFormData,
        setCustomerForm,
        handleChange,
        handleItemChange,
        handleNestedChange,
        operation,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
