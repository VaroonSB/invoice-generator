import { PDFViewer } from "@/components/PDFViewer";

interface PageProps {
  params: { slug: string[] };
}

export default function GeneratePdf({ params }: PageProps) {
  const [year, month, invoiceName] = params.slug;
  return <PDFViewer year={year} month={month} invoiceName={invoiceName} />;
}
