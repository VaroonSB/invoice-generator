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
      className="w-full flex gap-12 p-14 bg-white rounded-3xl shadow-lg"
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    >
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="w-1/3 h-full">
          <div className="flex items-center justify-center w-full h-full bg-gray-100 p-4 rounded-3xl shadow-xl cursor-pointer text-gray-700 text-2xl font-mono tracking-widest uppercase font-semibold hover:bg-gray-300 transition-transform hover:scale-110 duration-300 ease-in-out">
            {link.name}
          </div>
        </Link>
      ))}
    </Motion>
  );
};
