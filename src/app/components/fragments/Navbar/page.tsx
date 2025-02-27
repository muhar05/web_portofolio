"use client";

import Image from "next/image";
import Logo from "../../../../../public/img/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "../../ui/DarkModeToggle";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Achievement", href: "/achievement" },
  ];

  return (
    <div className="w-full h-16 flex justify-between bg-slate-200 dark:bg-black transition-all">
      <div className="flex justify-center items-center pl-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        </Link>
      </div>
      <ul className="w-full h-full flex pl-5 gap-5 items-center dark:text-white">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`cursor-pointer transition-all ${
                pathname === item.href
                  ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
