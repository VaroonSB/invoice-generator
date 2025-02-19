import { InvoiceSearch } from "@/components/InvoiceSearch";
import { InvoiceContextProvider } from "@/context/InvoiceContext";

export default function InvoiceList() {
  return (
    <InvoiceContextProvider>
      <InvoiceSearch />
    </InvoiceContextProvider>
  );
}
