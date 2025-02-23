import { STATIC_XLSX_INVOICE_PATH } from "@/utils/filePaths";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Workbook } from "exceljs";
import { invoiceMapper } from "@/utils/mapper";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const year = searchParams.get("year");
  const month = searchParams.get("month");
  const invoiceName = decodeURIComponent(searchParams.get("invoiceName") ?? "");
  console.log(year, month, invoiceName);

  if (!year || !month || !invoiceName) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }

  const xlsxFilePath = path.join(
    STATIC_XLSX_INVOICE_PATH,
    year,
    month,
    invoiceName.concat(".xlsx")
  );
  if (!fs.existsSync(xlsxFilePath)) {
    throw NextResponse.json(
      { error: "File not found on server", xlsxFilePath },
      { status: 404 }
    );
  }

  const workbook = new Workbook();

  await workbook.xlsx.readFile(xlsxFilePath);

  const invoiceSheet = workbook.worksheets[0];

  const invoice = invoiceMapper(invoiceSheet);

  return NextResponse.json(
    {
      operation: "success",
      result: invoice,
    },
    { status: 200 }
  );
};
