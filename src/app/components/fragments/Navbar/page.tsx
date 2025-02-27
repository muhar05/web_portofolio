"use client";

import Image from "next/image";
import Logo from "../../../../../public/img/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Achievement", href: "/achievement" },
    { name: "Get In Touch", href: "/link" },
  ];

  return (
    <div className="w-full h-16 flex justify-between bg-slate-200">
      <div className="flex justify-center items-center pl-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="w-10 h-10 shadow-md border-r-2"
          />
        </Link>
      </div>
      <ul className="w-full h-full flex pl-5 gap-5 items-center">
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
      <div className="flex justify-center items-center pr-5">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
