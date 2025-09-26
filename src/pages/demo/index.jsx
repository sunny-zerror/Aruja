import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    img: "https://cdn.fame-estate.com/1_02b2655de9.jpg",
    desc: "An office side-shelf styled with plans and frames bringing order and personality into the workspace.",
  },
  {
    img: "https://cdn.fame-estate.com/medium_service2_db4b58f8b4.png",
    desc: "An office side-shelf styled with plans and frames bringing order and personality into the workspace.",
  },
  {
    img: "https://cdn.fame-estate.com/medium_service_01a01267d4.png",
    desc: "An office side-shelf styled with plans and frames bringing order and personality into the workspace.",
  },
  {
    img: "https://cdn.fame-estate.com/medium_damac_2cd1f341f0.png",
    desc: "An office side-shelf styled with plans and frames bringing order and personality into the workspace.",
  },
]

const StickyWork = () => {


useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sticky_elem_0",
      start: "top center",
      end: "+=1300",
      scrub: true,
      // markers: true,
    },
  });

  tl.to(".sticky_txt_box_0", { 
    opacity: 1,
    duration: .5
  })
  .to(".sticky_txt_box_1", { 
    opacity: 1,
    duration: .5
  }, "+=0") 
  .to(".sticky_txt_box_2", { 
    opacity: 1,
    duration: .5
  }, "+=1")
  .to(".sticky_txt_box_3", { 
    opacity: 1,
    duration: .5
  }, "+=0");

}, []);

  


  return (
    <div>
      <div className="w-full px-10 pt-20">
        <div className="w-full relative mb-20  flex flex-col  items-center">
          <div className=" w-[15%] left-0 bottom-5 font-semibold absolute uppercase text-sm">
            <p>our interiors are designed to be functional, timeless, and personal.</p>
            <button>
              <div className=' mt-5 relative w-fit group overflow-hidden uppercase text-sm flex items-center gap-2'>
                <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                <p>
                  View more
                </p>
                <div className="block relative">
                  <img className='  opacity-0  ' src="/icons/black_arrow.png" alt="" />
                  <img className='absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="" />
                  <img className=' absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="" />
                </div>
              </div>
            </button>
          </div>
          <div className=" w-full ml-3 mb-5 h-fit text-sm font-black">
            <p>OUR WORK</p>
          </div>
          <div className=" uppercase text-8xl space-y-5 w-full">
            <div className="flex gap-2">
              <p>From</p>
              <h2>Homes</h2>
            </div>
            <div className=" w-full flex center">
              <p>To WorkPlaces,</p>
            </div>
            <div className="flex justify-end gap-2">
              <h2>designed</h2>
              <p>to flow</p>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          {data.map((item, idx) => {
            if (idx === 0) {
              return (
                <div
                  key={idx}
                  className={`sticky  sticky_elem_${idx}   w-full left-0 grid gap-5 pb-5 grid-cols-4 bottom-0`}
                >
                  <div className={` opacity-0 sticky_txt_box_${idx} w-full aspect-square text-end gap-5 relative z-0`}>
                    <p className="  text-2xl whitespace-nowrap">/ 0{idx + 1}</p>
                  </div>
                  <div className="w-full aspect-square relative z-50">
                    <img
                      src={item.img}
                      alt={`sticky-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={` opacity-0 sticky_txt_box_${idx} w-full aspect-square gap-5 relative z-0`}>
                    <p className="text-lg w-[70%] leading-tight">{item.desc}</p>
                  </div>
                  <div className="w-full aspect-square gap-5 relative z-0"></div>
                </div>
              );
            }

            if (idx === 1) {
              return (
                <div
                  key={idx}
                  className={`sticky  sticky_elem_${idx}   w-full left-0 grid gap-5 pb-5 grid-cols-4 bottom-0`}
                >
                  <div className="w-full aspect-square"></div>
                  <div className="w-full aspect-square"></div>
                  <div className={` opacity-0 sticky_txt_box_${idx} w-full aspect-square flex flex-col text-end items-end justify-between relative z-0`}>
                    <p className="text-2xl whitespace-nowrap">/ 0{idx + 1}</p>
                    <p className="text-lg w-[70%] leading-tight">{item.desc}</p>
                  </div>
                  <div className="w-full aspect-square relative z-50">
                    <img
                      src={item.img}
                      alt={`sticky-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            }

            if (idx === 2) {
              return (
                <div
                  key={idx}
                  className={`sticky  sticky_elem_${idx}   w-full left-0 grid gap-5 pb-5 grid-cols-4 bottom-0`}
                >
                  <div className="w-full aspect-square relative z-50">
                    <img
                      src={item.img}
                      alt={`sticky-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={` opacity-0 sticky_txt_box_${idx} w-full aspect-square flex flex-col justify-between relative z-0`}>
                    <p className="text-2xl whitespace-nowrap">/ 0{idx + 1}</p>
                    <p className="text-lg w-[70%] leading-tight">{item.desc}</p>
                  </div>
                  <div className="w-full aspect-square"></div>
                  <div className="w-full aspect-square"></div>
                </div>
              );
            }

            if (idx === 3) {
              return (
                <div
                  key={idx}
                  className={`sticky  sticky_elem_${idx}   w-full left-0 grid gap-5 pb-5 grid-cols-4 bottom-0`}
                >
                  <div className="w-full aspect-square"></div>
                  <div className={` opacity-0 sticky_txt_box_${idx} w-full aspect-square text-end relative z-0`}>
                    <p className="text-2xl whitespace-nowrap">/ 0{idx + 1}</p>
                  </div>
                  <div className="w-full aspect-square relative z-50">
                    <img
                      src={item.img}
                      alt={`sticky-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={` opacity-0 sticky_txt_box_${idx} w-full aspect-square relative z-0`}>
                    <p className="text-lg w-[70%] leading-tight">{item.desc}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>


















      </div>
    </div>
  )
}

export default StickyWork