import { NextRequest, NextResponse } from "next/server";
import { Workbook } from "exceljs";
import { CUSTOMER_DETAILS_LOCATION } from "@/utils/filePaths";
import Fuse from "fuse.js";

export const POST = async (request: NextRequest) => {
  const { customerName } = await request.json();

  const workbook = new Workbook();

  await workbook.xlsx.readFile(CUSTOMER_DETAILS_LOCATION);
  const customerSheet = workbook.worksheets[0];

  const customerList =
    customerSheet
      .getRows(2, 200)
      ?.map((row) => {
        const customerRow = (row.values as string[]).slice(1);
        return {
          customerName: customerRow[0] ?? "",
          addressLine1: customerRow[1] ?? "",
          addressLine2: customerRow[2] ?? "",
          addressLine3: customerRow[3] ?? "",
          customerGst: customerRow[4] ?? "",
        };
      })
      .filter((customerDetail) => customerDetail.customerName)
      .sort(({ customerName: nameA }, { customerName: nameB }) =>
        nameA.localeCompare(nameB)
      ) ?? [];

  const fuse = new Fuse(customerList, {
    keys: ["customerName"],
    threshold: 0.3,
  });
  const result = fuse.search(customerName).map((result) => result.item);

  return NextResponse.json(
    {
      message: result ? "success" : "not_found",
      result: result?.length ? result : customerList,
    },
    {
      status: 200,
    }
  );
};
