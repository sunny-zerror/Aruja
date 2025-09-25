import Link from "next/link";
import React from "react";

const Footer = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "the studio", path: "/studio" },
    { name: "our work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <div className="w-full p-10 flex items-stretch">
      <div className="aspect-[3/4]">
        <img
          className="w-full h-full object-cover"
          src="/Images/ContactPageImg.webp"
          alt=""
        />
      </div>

      <div className="w-full flex flex-col justify-between pl-10">
        <div className="w-full flex justify-between">
          <div className="text-4xl flex flex-col gap-y-4 uppercase">
            {navLinks.map((link, i) =>
              <a href={link.path} key={i} className="group relative w-fit cursor-pointer">
                <p className=" group-hover:opacity-0 transition-all duration-150">{link.name}</p>
                <h2 className="absolute italic left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-150">{link.name}</h2>
              </a>
            )}
          </div>

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

        <div className="w-full uppercase leading-none">
          <p className="w-full translate-y-3 text-[6.6vw]">hello@arujak.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
