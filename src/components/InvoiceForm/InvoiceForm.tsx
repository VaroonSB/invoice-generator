export const InvoiceForm = () => {
  return (
    <form>
      <label htmlFor="invoiceNumber">Invoice Number</label>
      <input type="number" id="invoiceNumber" />
      <label htmlFor="productName">Product Name</label>
      <input type="text" id="productName" />
    </form>
  );
};
