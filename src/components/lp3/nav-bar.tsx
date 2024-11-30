"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Por que Scanify", href: "#" },
  { label: "Produtos", href: "#" },
  { label: "Casos de uso", href: "#" },
  { label: "Recursos", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Parceiros", href: "#" },
];

export function NavBar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 flex items-center justify-between w-full py-4 px-6"
    >
      <div className="flex items-center gap-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-KIv3GRnN1k69k1NZactfNTSkPjDtta.svg"
          alt="Scanify Logo"
          width={120}
          height={35}
          className="w-auto h-8"
        />
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <Button
        variant="secondary"
        className="bg-gray-800 text-white hover:bg-gray-700"
      >
        Login
      </Button>
    </motion.nav>
  );
}
