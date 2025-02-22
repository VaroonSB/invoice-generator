import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import {
  STATIC_PDF_INVOICE_PATH,
  STATIC_XLSX_INVOICE_PATH,
} from "@/utils/filePaths";

const execAsync = promisify(exec);

export const POST = async (request: Request) => {
  try {
    const { year, month, invoiceName } = await request.json();

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

    const pdfDir = path.join(STATIC_PDF_INVOICE_PATH, year, month);
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }

    // Run LibreOffice conversion inside the container
    const { stderr, stdout } = await execAsync(
      `exec libreoffice soffice --headless --convert-to pdf --outdir ${pdfDir} ${xlsxFilePath}`
    );

    if (stderr) {
      throw new Error(stderr);
    }

    console.log(stdout);

    // Return the converted PDF as a response
    return NextResponse.json(
      {
        message: stdout,
        operation: "success",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Something went wrong while generating pdf", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
