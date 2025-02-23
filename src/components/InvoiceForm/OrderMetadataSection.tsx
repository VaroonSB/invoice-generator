"use client";

import { useInvoice } from "@/context/InvoiceContext";
import { Input } from "../Input";
import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export const OrderMetadataSection = () => {
  const { formData, handleChange } = useInvoice();
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  return (
    <section className="mb-6 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-600">Order Metadata</h3>
        <div
          onClick={toggleExpand}
          className="text-gray-600 cursor-pointer transition-transform hover:scale-150"
        >
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ height }}
        className={
          "overflow-hidden transition-height duration-300 ease-in-out"
        }
      >
        <div className="flex flex-col gap-4 mt-4">
          <Input
            title="Despatch Through"
            name="despatchThrough"
            type="text"
            value={formData.despatchThrough}
            onChange={handleChange}
          />
          <Input
            title="Order Through"
            name="orderThrough"
            type="text"
            value={formData.orderThrough}
            onChange={handleChange}
          />
          <Input
            title="Order Date"
            name="orderDate"
            type="text"
            value={formData.orderDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};
