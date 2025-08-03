"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuItems } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-[100%] z-50 bg-neutral-200 backdrop-blur-sm">
      <div className="mx-auto sm:px-6">
        <div className="flex items-center justify-between px-8">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden gap-3.5 md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-[#0400ff]" : "text-black"
                  } hover:text-[#0400ff] transition-colors relative group`}
                >
                  {item.title}
                  {pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0400ff]"></span>
                  )}

                  {pathname !== item.path && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0400ff] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-[#0400ff] hover:cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 right-10 bg-[#2e9ae2] p-4 rounded-lg text-center shadow-md font-bold"
        >
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`block py-1 ${
                pathname === item.path ? "text-[#0400ff]" : "text-[#1d1b1b]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
