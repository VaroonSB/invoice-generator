import { buildXlsxTree, STATIC_XLSX_INVOICE_PATH } from "@/utils/filePaths";
import { filterXlsxTree } from "@/utils/filter";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sortMonths } from "@/utils/sort";

export const POST = async (request: NextRequest) => {
  try {
    const { monthInput, yearInput, customerInput } = await request.json();

    const xlsxTree = buildXlsxTree(STATIC_XLSX_INVOICE_PATH, {});

    let result: Array<{
      name: string;
      month?: string;
      year?: string;
      count?: number;
    }> = filterXlsxTree(xlsxTree, monthInput, yearInput, customerInput).filter(
      (detail) => detail.name.includes("xlsx")
    );

    result = result.map((invoice) => {
      const invoiceNodes = fs
        .readdirSync(
          path.join(
            STATIC_XLSX_INVOICE_PATH,
            invoice.year as string,
            invoice.month as string
          )
        )
        .filter((invoice) => invoice.includes(".xlsx"));
      return {
        ...invoice,
        count: invoiceNodes.length,
      };
    });

    result = sortMonths(result);
    return NextResponse.json({
      message: result.length ? "success" : "not_found",
      result,
    });
  } catch (error) {
    console.error("Error reading xlsx files:", error);
    return NextResponse.json(
      { error: "Error reading xlsx files" },
      { status: 500 }
    );
  }
};
