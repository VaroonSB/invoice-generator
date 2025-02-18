import path from "path";
import { SheetInput, SHORT_MONTH } from "./mapper";
import fs from "fs";

export const STATIC_XLSX_INVOICE_PATH =
  "/Users/varoon.balachandar/Documents/Invoices/XLSX";

export const STATIC_PDF_INVOICE_PATH =
  "/Users/varoon.balachandar/Documents/Invoices/PDF";

export const CUSTOMER_DETAILS_LOCATION =
  "/Users/varoon.balachandar/Documents/Customer/Customer.xlsx";

export const getInvoiceXlsxFilePath = (input: SheetInput) => {
  const invoiceDate = new Date(input.invoiceDate);
  const invoiceDirectory = path.join(
    STATIC_XLSX_INVOICE_PATH,
    invoiceDate.getFullYear().toString(),
    SHORT_MONTH[invoiceDate.getMonth()]
  );

  if (!fs.existsSync(invoiceDirectory)) {
    fs.mkdirSync(invoiceDirectory, { recursive: true });
  }

  return path.join(
    invoiceDirectory,
    `${input.invoiceNumber}-${input.customer.customerName}.xlsx`
  );
};
