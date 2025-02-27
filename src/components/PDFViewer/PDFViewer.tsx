"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button";

interface PDFViewerProps {
  year: string;
  month: string;
  invoiceName: string;
}

export const PDFViewer = ({ year, month, invoiceName }: PDFViewerProps) => {
  const fileUrl = `/api/invoice/print?year=${year}&month=${month}&invoiceName=${invoiceName}`; // API route to fetch the file

  const router = useRouter();

  const handlePrint = () => {
    const iframe = document.getElementById("pdf-viewer") as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.title = invoiceName;
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <iframe
        id="pdf-viewer"
        title="pdf-viewer"
        src={fileUrl}
        className="w-full h-[900px] border"
      />

      <div className="grid grid-cols-2 gap-4">
        <Button
          label="Home"
          onClick={() => {
            router.push("/");
          }}
        />
        <Button
          label="Print"
          onClick={() => {
            handlePrint();
          }}
        />
      </div>
    </div>
  );
};
