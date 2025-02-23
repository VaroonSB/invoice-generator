import { InvoiceForm } from "@/components/InvoiceForm";
import { InvoiceContextProvider } from "@/context/InvoiceContext";

interface PageProps {
  params: { slug: string[] };
}

export default async function InvoiceDetails({ params }: PageProps) {
  const [year, month, invoiceName] = (await params).slug ?? [];

  return (
    <InvoiceContextProvider
      page="edit"
      year={year}
      month={month}
      invoiceName={invoiceName}
    >
      <InvoiceForm />
    </InvoiceContextProvider>
  );
}
