export const getCount = (
  invoiceList: Array<{
    year: string;
    month: string;
    name: string;
    count: number;
  }>,
  key: "month" | "year",
  value: string
) => {
  if (key === "month") {
    return invoiceList.find((invoice) => invoice.month === value)?.count;
  } else if (key === "year") {
    let yearCount = 0;
    invoiceList.forEach((invoice) => {
      if (invoice.year === value) {
        yearCount = yearCount + 1;
      }
    });
    return yearCount;
  }
};
