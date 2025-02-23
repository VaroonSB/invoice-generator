import { InvoiceForm } from "@/components/InvoiceForm";
import { InvoiceContextProvider } from "@/context/InvoiceContext";

export default function NewInvoice() {
  return (
    <InvoiceContextProvider page="create">
      <InvoiceForm />
    </InvoiceContextProvider>
  );
}
