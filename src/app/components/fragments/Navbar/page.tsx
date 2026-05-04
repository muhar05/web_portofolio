"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../../../../../public/img/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "../../ui/DarkModeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Achievement", href: "/achievement" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full py-4 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3 relative">
        <div className="flex items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10"
            >
              <Image
                src={Logo}
                alt="logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-indigo-500 dark:text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <Link href="/link" className="hidden sm:block">
            <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all">
              Contact
            </button>
          </Link>
          
          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* MOBILE NAV OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[110%] left-0 w-full glass rounded-3xl p-6 border border-white/10 md:hidden shadow-2xl flex flex-col gap-4 z-40"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-semibold p-2 transition-colors ${
                    pathname === item.href ? "text-indigo-500" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link href="/link">
                <button className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold">
                  Get In Touch
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

