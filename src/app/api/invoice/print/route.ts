import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { STATIC_PDF_INVOICE_PATH } from "@/utils/filePaths";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const year = searchParams.get("year")!;
  const month = searchParams.get("month")!;
  const invoiceName = searchParams.get("invoiceName")!;

  const filePath = path.join(
    STATIC_PDF_INVOICE_PATH,
    year,
    month,
    invoiceName.concat(".pdf")
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: `File not found: ${filePath}` },
      { status: 404 }
    );
  }

  const fileBuffer = fs.readFileSync(filePath);
  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${invoiceName.concat(".pdf")}"`,
    },
  });
}
