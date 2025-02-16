import { NextRequest, NextResponse } from "next/server";
import { Workbook } from "exceljs";
import path from "path";
import { SheetInput, sheetMapper } from "@/utils/mapper";

export const POST = async (request: NextRequest) => {
  const input: SheetInput = await request.json();

  const workbook = new Workbook();

  await workbook.xlsx.readFile(
    path.join(process.cwd(), "public", "Bill Template.xlsx")
  );
  const invoiceSheet = workbook.worksheets[0];
  sheetMapper(input, invoiceSheet);

  await workbook.xlsx.writeFile(
    path.join(
      "/Users/varoon.balachandar/Documents/Bills",
      `${input.invoiceNumber}-Bill.xlsx`
    )
  );

  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
};
