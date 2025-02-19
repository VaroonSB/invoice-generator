import { buildXlsxTree, STATIC_XLSX_INVOICE_PATH } from "@/utils/filePaths";
import { filterXlsxTree } from "@/utils/filter";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { monthInput, yearInput, customerInput } = await request.json();

    const xlsxTree = buildXlsxTree(STATIC_XLSX_INVOICE_PATH, {});

    const result = filterXlsxTree(
      xlsxTree,
      monthInput,
      yearInput,
      customerInput
    ).filter((detail) => detail.name.includes("xlsx"));

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
