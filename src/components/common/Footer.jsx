"use client"; // only if using Next.js App Router

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // for Pages Router
// 👉 if you're on App Router: import { usePathname } from "next/navigation";

const Footer = () => {
  const router = useRouter(); // Pages Router
  const currentPath = router.pathname;

  // For App Router (Next 13+), replace with:
  // const currentPath = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "the studio", path: "/studio" },
    { name: "our work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <div className="w-full p-10 flex bg-[#BBB86D] items-stretch">
      <div className="aspect-[3/4]">
        <img
          className="w-full h-full object-cover"
          src="/Images/HomePage/FooterImg.png"
          alt=""
        />
      </div>

      <div className="w-full flex flex-col justify-between pl-10">
        <div className="w-full flex justify-between">
          {/* Navigation links */}
          <div className="text-4xl flex flex-col gap-y-4 uppercase">
            {navLinks.map((link) =>
              currentPath === link.path ? (
                <Link key={link.path} href={link.path} className="block group w-fit pr-2 overflow-hidden relative ">
                  <h2 className="italic group-hover:translate-y-[-100%] transition-all duration-300">{link.name}</h2>
                  <h2 className=" absolute bottom-[-100%] group-hover:bottom-0 left-0 italic transition-all duration-300">{link.name}</h2>
                </Link>
              ) : (
                <Link key={link.path} href={link.path} className="block group w-fit pr-2 overflow-hidden relative ">
                  <p className=" group-hover:translate-y-[-100%] transition-all duration-300">{link.name}</p>
                  <p className=" absolute bottom-[-100%] group-hover:bottom-0 left-0  transition-all duration-300">{link.name}</p>
                </Link>
              )
            )}
          </div>

          {/* Social links */}
          <div className="uppercase flex flex-col gap-y-2">
            <button>
              <div className='  relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                <p>
                  instagram
                </p>
                <div className="block relative">
                  <img className='  opacity-0  ' src="/icons/black_arrow.png" alt="" />
                  <img className='absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="" />
                  <img className=' absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="" />
                </div>
              </div>
            </button>
            <button>
              <div className=' relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                <p>
                  linkedIn
                </p>
                <div className="block relative">
                  <img className='  opacity-0  ' src="/icons/black_arrow.png" alt="" />
                  <img className='absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="" />
                  <img className=' absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="" />
                </div>
              </div>
            </button>

          </div>
        </div>

        {/* Email */}
        <div className="w-full uppercase leading-none">
          <p className="w-full translate-y-3 text-[6.6vw]">hello@arujak.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
