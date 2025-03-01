"use client";

import { Motion } from "@/components/Motion/Motion";
import Link from "next/link";

export const HomePageDetails = () => {
  const links = [
    { name: "Create", href: "/invoice/form" },
    { name: "Invoices", href: "/invoice/list" },
    { name: "Customers", href: "/customer/list" },
  ];

  return (
    <Motion
    className="w-full flex flex-col items-center justify-center bg-white p-8 rounded-3xl mt-12 shadow-lg h-48"
    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-wrap justify-center items-center gap-12">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="w-60 h-24">
            <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4 rounded-3xl shadow-xl cursor-pointer text-gray-700 text-xl font-semibold hover:bg-gray-300 transition-transform hover:scale-110 transition duration-300 ease-in-out">
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </Motion>
  );
};