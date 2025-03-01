"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const links = [
    { name: "Create", href: "/invoice/form" },
    { name: "Invoices", href: "/invoice/list" },
    { name: "Customers", href: "/customer/list" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center px-4 pt-4">
      <div className="relative w-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/Ganesha.png"
            alt="Logo"
            width={350}
            height={350}
            className="opacity-5 w-[350px] h-[350px] object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          className="absolute text-7xl font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent drop-shadow-lg text-center whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          K R Manufacture
        </motion.h1>
      </div>

      <motion.div
        className="w-full flex flex-col items-center justify-center bg-white p-8 rounded-3xl mt-12 shadow-lg h-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-wrap justify-center items-center gap-12">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="w-60 h-[120px]">
              <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4 rounded-3xl shadow-xl cursor-pointer text-gray-700 text-xl font-semibold hover:bg-gray-300 transition-transform hover:scale-110 transition duration-300 ease-in-out">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
