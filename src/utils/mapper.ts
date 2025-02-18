import { Worksheet } from "exceljs";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  AMOUNT_1,
  AMOUNT_2,
  AMOUNT_3,
  AMOUNT_4,
  CGST,
  CUSTOMER_GST,
  CUSTOMER_NAME,
  DESPATCH_THROUGH,
  HSN_CODE_1,
  HSN_CODE_2,
  HSN_CODE_3,
  HSN_CODE_4,
  IGST,
  INVOICE_DATE,
  INVOICE_NUMBER,
  KG_1,
  KG_2,
  KG_3,
  KG_4,
  ORDER_DATE,
  ORDER_THROUGH,
  PARTICULAR_1,
  PARTICULAR_2,
  PARTICULAR_3,
  PARTICULAR_4,
  RATE_1,
  RATE_2,
  RATE_3,
  RATE_4,
  ROUND_OFF,
  SGST,
  TOTAL,
  TOTAL_IN_WORDS,
} from "./cellNumbers";
import { parseInvoiceDate } from "./date";

export interface SheetInput {
  invoiceNumber: number;
  invoiceDate: string;
  customerName: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  customerGst: string;
  despatchThrough: string;
  orderThrough: string;
  orderDate: string;
  items: Array<{
    hsnCode?: string;
    particular: string;
    kg?: number;
    rate?: number;
    amount: number;
  }>;
  sgst: number;
  cgst: number;
  igst: number;
  roundOff: number;
  total: number;
  totalInWords: string;
}

export const sheetMapper = (
  {
    invoiceNumber,
    invoiceDate,
    customerName,
    addressLine1,
    addressLine2,
    addressLine3,
    customerGst,
    despatchThrough,
    orderThrough,
    orderDate,
    items,
    sgst,
    cgst,
    igst,
    roundOff,
    total,
    totalInWords,
  }: SheetInput,
  worksheet: Worksheet
) => {
  console.log(
    invoiceDate,
    parseInvoiceDate(new Date(invoiceDate)),
    orderDate,
    parseInvoiceDate(new Date(orderDate))
  );

  worksheet.getCell(INVOICE_NUMBER).value = invoiceNumber ?? "";
  worksheet.getCell(INVOICE_DATE).value =
    parseInvoiceDate(new Date(invoiceDate)) ?? "";
  worksheet.getCell(CUSTOMER_NAME).value = customerName ?? "";
  worksheet.getCell(ADDRESS_LINE_1).value = addressLine1 ?? "";
  worksheet.getCell(ADDRESS_LINE_2).value = addressLine2 ?? "";
  worksheet.getCell(ADDRESS_LINE_3).value = addressLine3 ?? "";
  worksheet.getCell(CUSTOMER_GST).value = customerGst ?? "";
  worksheet.getCell(DESPATCH_THROUGH).value = despatchThrough ?? "";
  worksheet.getCell(ORDER_THROUGH).value = orderThrough ?? "";
  worksheet.getCell(ORDER_DATE).value =
    parseInvoiceDate(new Date(orderDate)) ?? "";
  items.forEach((item, index) => {
    if (index === 0) {
      worksheet.getCell(HSN_CODE_1).value = item.hsnCode ?? "";
      worksheet.getCell(PARTICULAR_1).value = item.particular ?? "";
      worksheet.getCell(KG_1).value = item.kg ?? "";
      worksheet.getCell(RATE_1).value = item.rate ?? "";
      worksheet.getCell(AMOUNT_1).value = item.amount ?? "";
    } else if (index === 1) {
      worksheet.getCell(HSN_CODE_2).value = item.hsnCode ?? "";
      worksheet.getCell(PARTICULAR_2).value = item.particular ?? "";
      worksheet.getCell(KG_2).value = item.kg ?? "";
      worksheet.getCell(RATE_2).value = item.rate ?? "";
      worksheet.getCell(AMOUNT_2).value = item.amount ?? "";
    } else if (index === 2) {
      worksheet.getCell(HSN_CODE_3).value = item.hsnCode ?? "";
      worksheet.getCell(PARTICULAR_3).value = item.particular ?? "";
      worksheet.getCell(KG_3).value = item.kg ?? "";
      worksheet.getCell(RATE_3).value = item.rate ?? "";
      worksheet.getCell(AMOUNT_3).value = item.amount ?? "";
    } else if (index === 3) {
      worksheet.getCell(HSN_CODE_4).value = item.hsnCode ?? "";
      worksheet.getCell(PARTICULAR_4).value = item.particular ?? "";
      worksheet.getCell(KG_4).value = item.kg ?? "";
      worksheet.getCell(RATE_4).value = item.rate ?? "";
      worksheet.getCell(AMOUNT_4).value = item.amount ?? "";
    }
  });
  worksheet.getCell(SGST).value = sgst ?? "";
  worksheet.getCell(CGST).value = cgst ?? "";
  worksheet.getCell(IGST).value = igst ?? "";
  worksheet.getCell(ROUND_OFF).value = roundOff ?? "";
  worksheet.getCell(TOTAL).value = total ?? "";
  worksheet.getCell(TOTAL_IN_WORDS).value = totalInWords ?? "";
};

export const SHORT_MONTH: Record<number, string> = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
