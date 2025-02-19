"use client";

import { RefObject, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

interface ItemSectionProps {
  refs: {
    hsnCode1Ref: RefObject<HTMLInputElement | null>;
    particular1Ref: RefObject<HTMLInputElement | null>;
    kg1Ref: RefObject<HTMLInputElement | null>;
    rate1Ref: RefObject<HTMLInputElement | null>;
    amount1Ref: RefObject<HTMLInputElement | null>;
    hsnCode2Ref: RefObject<HTMLInputElement | null>;
    particular2Ref: RefObject<HTMLInputElement | null>;
    kg2Ref: RefObject<HTMLInputElement | null>;
    rate2Ref: RefObject<HTMLInputElement | null>;
    amount2Ref: RefObject<HTMLInputElement | null>;
    hsnCode3Ref: RefObject<HTMLInputElement | null>;
    particular3Ref: RefObject<HTMLInputElement | null>;
    kg3Ref: RefObject<HTMLInputElement | null>;
    rate3Ref: RefObject<HTMLInputElement | null>;
    amount3Ref: RefObject<HTMLInputElement | null>;
    hsnCode4Ref: RefObject<HTMLInputElement | null>;
    particular4Ref: RefObject<HTMLInputElement | null>;
    kg4Ref: RefObject<HTMLInputElement | null>;
    rate4Ref: RefObject<HTMLInputElement | null>;
    amount4Ref: RefObject<HTMLInputElement | null>;
  };
}

export const ItemSection = ({ refs }: ItemSectionProps) => {
  const [itemCount, setItemCount] = useState(1);
  const {
    hsnCode1Ref,
    particular1Ref,
    kg1Ref,
    rate1Ref,
    amount1Ref,
    hsnCode2Ref,
    particular2Ref,
    kg2Ref,
    rate2Ref,
    amount2Ref,
    hsnCode3Ref,
    particular3Ref,
    kg3Ref,
    rate3Ref,
    amount3Ref,
    hsnCode4Ref,
    particular4Ref,
    kg4Ref,
    rate4Ref,
    amount4Ref,
  } = refs;
  return (
    <section className="flex flex-col gap-4 mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-600">Items</h3>
      <Input
        title="HSN Code"
        type="text"
        ref={hsnCode1Ref}
        defaultValue="38101090"
        required
      />
      <Input
        title="Particular"
        type="text"
        ref={particular1Ref}
        defaultValue="COVER-ALL POWDER"
        required
      />
      <Input title="KG" type="text" ref={kg1Ref} required />
      <Input title="Rate" type="text" ref={rate1Ref} required />
      <Input title="Amount" type="text" ref={amount1Ref} required />

      {itemCount >= 2 && (
        <div className="flex flex-col bg-white gap-4 p-4 rounded-2xl">
          <Input title="HSN Code 2" type="text" ref={hsnCode2Ref} />
          <Input title="Particular 2" type="text" ref={particular2Ref} />
          <Input title="KG 2" type="text" ref={kg2Ref} />
          <Input title="Rate 2" type="text" ref={rate2Ref} />
          <Input title="Amount 2" type="text" ref={amount2Ref} />
        </div>
      )}

      {itemCount >= 3 && (
        <>
          <Input title="HSN Code 3" type="text" ref={hsnCode3Ref} />
          <Input title="Particular 3" type="text" ref={particular3Ref} />
          <Input title="KG 3" type="text" ref={kg3Ref} />
          <Input title="Rate 3" type="text" ref={rate3Ref} />
          <Input title="Amount 3" type="text" ref={amount3Ref} />
        </>
      )}

      {itemCount >= 4 && (
        <div className="flex flex-col bg-white gap-4 p-4 rounded-2xl">
          <Input title="HSN Code 4" type="text" ref={hsnCode4Ref} />
          <Input title="Particular 4" type="text" ref={particular4Ref} />
          <Input title="KG 4" type="text" ref={kg4Ref} />
          <Input title="Rate 4" type="text" ref={rate4Ref} />
          <Input title="Amount 4" type="text" ref={amount4Ref} />
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <Button
          label="+"
          onClick={() => setItemCount((prev) => prev + 1)}
          classNames="rounded-full px-3 py-1 bg-gradient-to-r from-green-500 to-green-700"
        />
        <Button
          label="-"
          onClick={() => setItemCount((prev) => prev - 1)}
          classNames="rounded-full px-3 py-1 bg-gradient-to-r from-red-500 to-red-700"
        />
      </div>
    </section>
  );
};
