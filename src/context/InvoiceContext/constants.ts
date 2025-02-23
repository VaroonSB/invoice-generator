import { parseInvoiceDate } from "@/utils/date";

export const INITIAL_INVOICE_VALUES = {
  invoiceNumber: "",
  invoiceDate: parseInvoiceDate(new Date()),
  customer: {
    customerName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    customerGst: "",
  },
  items: [
    {
      hsnCode: "38101090",
      particular: "COVER-ALL POWDER",
      kg: "",
      rate: "",
      amount: "",
    },
    {
      hsnCode: "",
      particular: "",
      kg: "",
      rate: "",
      amount: "",
    },
    {
      hsnCode: "",
      particular: "",
      kg: "",
      rate: "",
      amount: "",
    },
    {
      hsnCode: "",
      particular: "",
      kg: "",
      rate: "",
      amount: "",
    },
  ],
  sgst: "",
  cgst: "",
  igst: "",
  roundOff: "",
  total: "",
  totalInWords: "",
  despatchThrough: "",
  orderThrough: "",
  orderDate: "",
};
