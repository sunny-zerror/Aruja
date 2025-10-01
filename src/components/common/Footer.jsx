import useNavigation from "@/store/useNavigation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const { navigate } = useNavigation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "the studio", path: "/studio" },
    { name: "our work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <div className="w-full  border-t border-black/20 p-3 lg:p-10  items-stretch">
      <div className="flex items-stretch">
        <div className=" flex items-end aspect-[3/4]">
        <img className="w-[70%]" src="/footerLogo.png" alt="" />
        </div>

        <div className="w-full flex flex-col justify-between pl-3 lg:pl-10">
          <div className="w-full flex justify-between">
            <div className=" text-sm md:text-4xl flex flex-col lg:gap-y-4 uppercase">
              {navLinks.map((link, i) =>
                <div
                  onClick={() => navigate(router, link.path)}
                  key={i} className="group relative w-fit cursor-pointer">
                  <p className=" group-hover:opacity-0 transition-all duration-150">{link.name}</p>
                  <h2 className="absolute italic left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-150">{link.name}</h2>
                </div>
              )}
            </div>

            <div className="uppercase flex flex-col items-end lg:items-start gap-y-1 lg:gap-y-2">
              <a href="https://www.instagram.com/arujak?igsh=djZua2NuaGo1YTE5&utm_source=qr"  target="_blank" rel="noopener noreferrer" >
              <button>
                <div className='  text-xs lg:text-base relative w-fit group overflow-hidden uppercase flex items-center lg:gap-2'>
                  <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                  <p>
                    instagram
                  </p>
                  <div className="block relative">
                    <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                    <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                    <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                  </div>
                </div>
              </button>
              </a>
              <a href="https://www.linkedin.com/company/studio-arujak" target="_blank" rel="noopener noreferrer">
              <button>
                <div className=' text-xs lg:text-base relative w-fit group overflow-hidden uppercase flex items-center lg:gap-2'>
                  <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                  <p>
                    linkedIn
                  </p>
                  <div className="block relative">
                    <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                    <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                    <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                  </div>
                </div>
              </button>
              </a>

            </div>
          </div>

          <div className="w-full opacity-0 lg:opacity-100 uppercase leading-none">
            <p className="w-full lg:translate-y-3 text-[5vw] md:text-[6.6vw]">hello@arujak.com</p>
          </div>
        </div>
      </div>
      <div className="w-full center mt-2  lg:hidden uppercase leading-none">
        <p className=" lg:hidden lg:translate-y-3 text-[9.2vw]">hello@arujak.com</p>
      </div>
    </div>
  );
};

export default Footer;
