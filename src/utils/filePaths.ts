import path from "path";
import { Invoice, SHORT_MONTH } from "./mapper";
import fs from "fs";
import { parseDate } from "./date";

export const STATIC_XLSX_INVOICE_PATH =
  "/Users/varoon.balachandar/Documents/Invoices/XLSX";

export const STATIC_PDF_INVOICE_PATH =
  "/Users/varoon.balachandar/Documents/Invoices/PDF";

export const CUSTOMER_DETAILS_LOCATION =
  "/Users/varoon.balachandar/Documents/Customer/Customer.xlsx";

export const getInvoiceXlsxFilePath = (input: Invoice) => {
  const invoiceDate = parseDate(input.invoiceDate);
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

export const buildXlsxTree = (
  dir: string,
  result: Record<string, Record<string, string[]>>
) => {
  const years = fs.readdirSync(dir);
  years.forEach((year) => {
    if(year.length !== 4) {
      console.log("Not a valid month year: ", year);
      return;
    }
    const months = fs.readdirSync(path.join(dir, year));
    if (months.length) {
      months.forEach((month) => {
        if (!Object.values(SHORT_MONTH).includes(month)) {
          console.log("Not a valid month month: ", month);
          return;
        }
        const invoices = fs.readdirSync(path.join(dir, year, month));
        if (invoices.length) {
          if (!result[year]) {
            result[year] = {};
          }
          if (!result[year][month]) {
            result[year][month] = [];
          }
          result[year][month] = invoices;
        }
      });
    }
  });
  return result;
};
