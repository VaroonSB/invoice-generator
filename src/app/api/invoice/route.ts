import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { invoiceNumber, productName } = await request.json();
  console.log(invoiceNumber, productName);
};
