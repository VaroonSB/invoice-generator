import { NextRequest, NextResponse } from "next/server";
import { Workbook } from "exceljs";
import { CUSTOMER_DETAILS_LOCATION } from "@/utils/filePaths";
import { Customer } from "@/utils/mapper";

export const POST = async (request: NextRequest) => {
  const {
    customerName,
    addressLine1,
    addressLine2,
    addressLine3,
    customerGst,
  } = await request.json();

  const workbook = new Workbook();

  await workbook.xlsx.readFile(CUSTOMER_DETAILS_LOCATION);
  const customerSheet = workbook.worksheets[0];
  if (!customerName) {
    return NextResponse.json(
      {
        message: "invalid_input",
      },
      {
        status: 400,
      }
    );
  }

  let customerList: Customer[] = [];
  customerSheet.eachRow((row) => {
    const customerRow = (row.values as string[]).slice(1);
    customerList.push({
      customerName: customerRow[0] ?? "",
      addressLine1: customerRow[1] ?? "",
      addressLine2: customerRow[2] ?? "",
      addressLine3: customerRow[3] ?? "",
      customerGst: customerRow[4] ?? "",
    });
  });

  customerList = customerList.filter(
    (customerDetail) => customerDetail.customerName
  );
  const doesExist = customerList?.some(
    (customer) =>
      customer.customerName.toLowerCase() === customerName.toLowerCase()
  );
  if (doesExist) {
    return NextResponse.json(
      {
        message: "already_available",
      },
      {
        status: 409,
      }
    );
  }

  customerSheet.addRow([
    customerName,
    addressLine1,
    addressLine2,
    addressLine3,
    customerGst,
  ]);

  await workbook.xlsx.writeFile(
    "/Users/varoon.balachandar/Documents/Customer/Customer.xlsx"
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
