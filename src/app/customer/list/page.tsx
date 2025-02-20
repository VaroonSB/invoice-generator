import {
  CustomerSearch,
  CustomerSearchWrapper,
} from "@/components/CustomerSearch";
import { InvoiceContextProvider } from "@/context/InvoiceContext";

export default function CustomerPage() {
  return (
    <InvoiceContextProvider>
      <CustomerSearchWrapper>
        <CustomerSearch page="customer-page" />
      </CustomerSearchWrapper>
    </InvoiceContextProvider>
  );
}
