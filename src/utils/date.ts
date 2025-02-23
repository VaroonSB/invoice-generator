export const parseInvoiceDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const parseDate = (date: string) => {
  const [day, month, year] = date.split("-");
  return new Date(`${year}-${month}-${day}`);
};
