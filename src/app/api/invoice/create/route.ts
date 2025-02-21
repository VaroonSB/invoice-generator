import { NextRequest, NextResponse } from "next/server";
import { Workbook } from "exceljs";
import path from "path";
import { Invoice, sheetMapper } from "@/utils/mapper";
import { getInvoiceXlsxFilePath } from "@/utils/filePaths";

export const POST = async (request: NextRequest) => {
  const input: Invoice = await request.json();

  const workbook = new Workbook();

  await workbook.xlsx.readFile(
    path.join(process.cwd(), "public", "Bill Template.xlsx")
  );
  const invoiceSheet = workbook.worksheets[0];
  sheetMapper(input, invoiceSheet);

  await workbook.xlsx.writeFile(getInvoiceXlsxFilePath(input));

  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
};
