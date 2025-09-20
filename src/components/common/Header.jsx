import React, { useEffect } from 'react'
import gsap from 'gsap'
const Header = () => {

  useEffect(() => {
    gsap.from(".header", { display: "none", delay: 2.28 });
  }, [])

  return (
    <div>
      <div className=" header w-full flex p-5 px-10 z-[999] items-center justify-between fixed top-0 left-0">
        <div className="">
          <img src="/icons/logo_black.svg" alt="" />
        </div>
        <div className="flex items-center gap-10  h-full">
          <a href="" className='uppercase text-sm font-semibold'>
            The studio
          </a>
          <a href="" className='uppercase text-sm font-semibold'>
            Our work
          </a>
          <a href="" className='uppercase text-sm font-semibold'>
            services
          </a>
          <button className='uppercase bg-[#2E2D2B] text-[#FFFDF4] py-2 px-6'>
            <p className='text-sm'>Let's talk</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header