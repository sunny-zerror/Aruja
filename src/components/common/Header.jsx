import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
import CustomEase from 'gsap/dist/CustomEase'
import { useRouter } from "next/router";
import { RiCloseLine, RiMenu3Line, RiMenuLine } from '@remixicon/react';
gsap.registerPlugin(CustomEase);


const Header = () => {
  CustomEase.create("in-out-quint", "0.83,0,0.17,1");
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (currentPath === "/studio") return;
    if (currentPath === "/work") return;
    if (currentPath === "/contact") return;
    gsap.to(".header", { display: "flex", delay: 2.28 });
  }, [])



  const openMenu = () => {
    if(window.lenis) lenis.stop();
    gsap.to(".open_menu", {
      right: 0,
      duration: 1,
      ease: "in-out-quint",
      onComplete: () => {
        gsap.set(".header", { pointerEvents: "none" });
      }
    });
    gsap.fromTo(".anii", {
      y: 50,
    }, {
      y: 0,
      delay: 0.8,
      stagger: 0.05
    })
  }
  const closeMenu = () => {
    if(window.lenis) lenis.stop();
    gsap.to(".anii", {
      y: -50,
      stagger: 0.05
    })
    gsap.to(".open_menu", {
      right: "-100%",
      delay: 0.4,
      duration: .8,
      ease: "in-out-quint",
      onComplete: () => {
        gsap.set(".header", { pointerEvents: "auto" });
      }
    });
  }


  return (
    <div>

      <div
        className=" open_menu right-[-100%] w-full h-[100dvh] bg-[#FFFDF6] text-[#2E2D2B] p-5 fixed z-[99999]">
        <div className=" absolute  right-5 w-full flex justify-end">
          <RiCloseLine size={30} onClick={closeMenu} />
        </div>
        <div className="w-full h-full center flex-col gap-5">
          <a href="/studio" className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='anii'>
              The studio
            </p>
          </a>
          <a href="/work" className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='anii'>
              Our work
            </p>
          </a>
          <a href="/" className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='anii'>
              services
            </p>
          </a>
          <a href="/contact" className='uppercase  group relative w-fit block overflow-hidden text-2xl '>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
              <p className='text-2xl anii uppercase'>contact</p>
          </a>
        </div>
      </div>




      <div className={` header  ${(currentPath === "/studio" || currentPath === "/work" || currentPath === "/contact") ? "flex" : "hidden"}  w-full  p-3 lg:p-5 lg:px-10 z-[999] items-center justify-between fixed top-0 left-0`}>
        <div className="">
          <a href="/">
            <img src="/icons/logo_black.svg" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-10  h-full">
          <a href="/studio" className='uppercase hidden group relative w-fit lg:block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              The studio
            </p>
          </a>
          <a href="/work" className='uppercase hidden group relative w-fit lg:block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              Our work
            </p>
          </a>
          <a href="/" className='uppercase hidden group relative w-fit lg:block text-sm font-semibold'>
            <div className="absolute bg-[#2E2D2B] rounded-full bottom-0.5 w-0 group-hover:w-full transition-all duration-300 h-[1px] left-0"></div>
            <p className='font-semibold'>
              services
            </p>
          </a>
          <a href="/contact">
            <button className=' hidden lg:block hover:scale-95 hover:rounded-[4px] transition-all duration-300 uppercase bg-[#2E2D2B] text-[#FFFDF4] py-2 px-4 lg:px-6'>
              <p className=' text-xs lg:text-sm'>Let's talk</p>
            </button>
          </a>
          <RiMenu3Line size={28} className='lg:hidden' onClick={openMenu} />
        </div>
      </div>
    </div>
  )
}

export default Header