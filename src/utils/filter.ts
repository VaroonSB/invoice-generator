const getAllInvoicesInYear = (
  tree: Record<string, Record<string, string[]>>,
  year: string,
  customer?: string
) =>
  Object.entries(tree[year]).flatMap(([month, invoices]) =>
    invoices
      .filter((customerName) => !customer || customerName.includes(customer))
      .map((name) => ({ name, month, year }))
  );

export const filterXlsxTree = (
  tree: Record<string, Record<string, string[]>>,
  month?: string,
  year?: string,
  customer?: string
): { name: string; month?: string; year?: string }[] => {
  if (year) {
    const yearData = tree[year] ?? {};
    if (month) {
      const monthData = yearData[month] ?? [];
      return monthData
        .filter((customerName) => !customer || customerName.includes(customer))
        .map((name) => ({ name, month, year }));
    }
    return getAllInvoicesInYear(tree, year, customer);
  }

  return Object.entries(tree)
    .map((yearInTree) => getAllInvoicesInYear(tree, yearInTree[0], customer))
    .flat();
};
