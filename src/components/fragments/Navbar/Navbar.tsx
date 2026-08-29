"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "about", href: "/about" },
    { name: "works", href: "/works" },
    { name: "achievements", href: "/achievement" },
  ];

  return (
    <nav className="w-full border-b border-[rgba(255,255,255,0.06)] bg-[#0c0d0e]/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* LOGO & TITLE */}
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-mono text-sm font-semibold tracking-tight text-[#fafafa] hover:text-[#8e9196] transition-colors">
              muhar.f
            </span>
          </Link>
          <div className="hidden sm:block h-3 w-px bg-white/10" />
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">
            Fullstack Developer
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-mono text-xs tracking-wider transition-colors duration-200 lowercase ${
                      isActive
                        ? "text-[#fafafa] font-medium"
                        : "text-[#8e9196] hover:text-[#fafafa]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-white/10" />

          <Link
            href="/link"
            className="font-mono text-xs tracking-wider text-[#fafafa] hover:text-[#8e9196] border border-[rgba(255,255,255,0.15)] hover:border-[#fafafa] px-3.5 py-1.5 rounded transition-all duration-300"
          >
            connect
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/link"
            className="font-mono text-[11px] tracking-wider text-[#fafafa] border border-[rgba(255,255,255,0.15)] px-3 py-1 rounded"
          >
            connect
          </Link>
          <button
            className="p-1 text-[#8e9196] hover:text-[#fafafa] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full bg-[#0c0d0e] border-b border-[rgba(255,255,255,0.06)] p-6 md:hidden shadow-2xl flex flex-col gap-4 z-40"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-sm tracking-wider py-2 transition-colors lowercase ${
                    pathname === item.href ? "text-[#fafafa] font-medium" : "text-[#8e9196]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
