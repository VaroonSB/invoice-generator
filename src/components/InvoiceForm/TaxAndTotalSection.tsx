"use client";

import { Input } from "../Input";
import { RefObject } from "react";

interface TaxAndTotalSectionProps {
  refs: {
    sgstRef: RefObject<HTMLInputElement | null>;
    cgstRef: RefObject<HTMLInputElement | null>;
    igstRef: RefObject<HTMLInputElement | null>;
    roundOffRef: RefObject<HTMLInputElement | null>;
    totalRef: RefObject<HTMLInputElement | null>;
    totalInWordsRef: RefObject<HTMLInputElement | null>;
  };
}

export const TaxAndTotalSection = ({ refs }: TaxAndTotalSectionProps) => {
  const { sgstRef, cgstRef, igstRef, roundOffRef, totalRef, totalInWordsRef } =
    refs;
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">
        Tax and Total
      </h3>
      <Input title="SGST" type="text" ref={sgstRef} />
      <Input title="CGST" type="text" ref={cgstRef} />
      <Input title="IGST" type="text" ref={igstRef} />
      <Input title="Round Off" type="text" ref={roundOffRef} />
      <Input title="Total" type="text" ref={totalRef} required />
      <Input
        title="Total In Words"
        type="text"
        ref={totalInWordsRef}
        required
      />
    </section>
  );
};
