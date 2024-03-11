"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa6";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/posts",
    name: "Blog",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  return (
    <div className="w-full py-6 px-32 z-[100] bg-grey text-white font-ubuntu backdrop-blur-md">
      <nav className="flex justify-center w-full z-[100]">
        <Link href="/" className="hidden md:flex justify-between items-center w-1/4">
          <img className="w-10 h-10 rounded-full shadow" src="azizbecha.jpg" alt="" />
        </Link>
        <div className="bg-gray-800 border-2 flex flex-row gap-2 relative justify-center mx-auto p-1.5 z-[100] rounded-3xl shadow">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;
            return (
              <Link
                key={item.path}
                className={`px-3 sm:px-6 py-1 text-center rounded-md lg:text-base relative no-underline duration-300 ease-in`}
                data-active={isActive}
                href={item.path}
              >
                <span className="font-ubuntu font-bold text-sm">{item.name}</span>
                {(pathname === item.path || (pathname.startsWith(item.path) && item.path !== "/")) && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-main rounded-3xl -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      stiffness: 300,
                      damping: 23,
                      duration: 0.5,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex justify-end items-center w-1/4 gap-2">
          <a href="https://github.com/azizbecha" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center">
              <div className="bg-gray-800 text-white text-center rounded-full p-2 w-10 h-10 shadow animated-border border-2 border-transparent">
                <FaGithub size={20} />
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}
