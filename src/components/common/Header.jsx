import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    gsap.to(".header", { display: "flex", delay: 2.28 });
  }, [])

  return (
    <div>
      <div className={` header ${currentPath === "/contact" ? " bg-[#FFFDF4] " : "bg-transparent"} w-full hidden p-5 px-10 z-[999] items-center justify-between fixed top-0 left-0`}>
        <div className="">
          <a href="/">
            <img src="/icons/logo_black.svg" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-10  h-full">
          <a href="" className='uppercase text-sm font-semibold'>
            The studio
          </a>
          <Link href="/work" className='uppercase text-sm font-semibold'>
            Our work
          </Link>
          <a href="" className='uppercase text-sm font-semibold'>
            services
          </a>
          <Link href="/contact">
            <button className='uppercase bg-[#2E2D2B] text-[#FFFDF4] py-2 px-6'>
              <p className='text-sm'>Let's talk</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header