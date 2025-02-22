import { SHORT_MONTH } from "./mapper";

export const sortMonths = (
  result: Array<{
    name: string;
    month?: string;
    year?: string;
    count?: number;
  }>
) =>
  result.sort(({ month: monthA }, { month: monthB }) => {
    const indexA = Object.values(SHORT_MONTH).indexOf(monthA as string);
    const indexB = Object.values(SHORT_MONTH).indexOf(monthB as string);

    return indexA - indexB;
  });
