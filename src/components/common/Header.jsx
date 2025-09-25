import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (currentPath === "/studio") return;
    if (currentPath === "/work") return;
    if (currentPath === "/contact") return;
    gsap.to(".header", { display: "flex", delay: 2.28 });
  }, [])

  return (
    <div>
      <div className={` header ${currentPath === "/contact" ? " bg-[#FFFDF4] " : "bg-transparent"} ${(currentPath === "/studio" || currentPath === "/work" || currentPath === "/contact") ? "flex" : "hidden"}  w-full  p-5 px-10 z-[999] items-center justify-between fixed top-0 left-0`}>
        <div className="">
          <a href="/">
            <img src="/icons/logo_black.svg" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-10  h-full">
          <a href="/studio" className='uppercase group relative w-fit block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              The studio
            </p>
          </a>
          <a href="/work" className='uppercase group relative w-fit block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              Our work
            </p>
          </a>
          <a href="/" className='uppercase group relative w-fit block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              services
            </p>
          </a>
          <a href="/contact">
            <button className=' hover:scale-95 hover:rounded-[4px] transition-all duration-300 uppercase bg-[#2E2D2B] text-[#FFFDF4] py-2 px-6'>
              <p className='text-sm'>Let's talk</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header