"use client";

import { Motion } from "@/components/Motion/Motion";
import Image from "next/image";

export const Hero = () => {
  return (
      <div className="relative w-full flex justify-center items-center">
        <Motion
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
        </Motion>

        <Motion
          tag="h1"
          className="absolute text-7xl font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent drop-shadow-lg text-center whitespace-nowrap"
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          K R Manufacture
        </Motion>
      </div>
  );
};