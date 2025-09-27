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

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".move_txt_on_scroll",
        start: "top bottom",
        end: "bottom 40%",
        scrub: true,
        // markers: true,
      },
    });
    tl2.to(".move_txt_child", {
      width: "100%",
      duration: 1,
      stagger: 0.1,
    });



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
      <div className="w-full px-3 lg:px-10 pt-10 lg:pt-28">
        <div className="w-full relative mb-10 lg:mb-20  flex flex-col  items-center">
          <div className=" w-full lg:ml-3 mb-5 h-fit text-xs lg:text-sm font-black">
            <p>OUR WORK</p>
          </div>
          <div className=" move_txt_on_scroll overflow-hidden leading-none uppercase text-2xl  md:text-[6vw] lg:space-y-5 w-full">
            <div className="flex move_txt_child w-0 justify-between  gap-2">
              <p>From</p>
              <h2>Homes</h2>
              <p>To</p>
            </div>
            <div className="w-full flex justify-end">
              <div className=" move_txt_child w-[40%] flex justify-between">
                <p>WorkPlaces, </p>
                <p>our </p>
                <h2>designs </h2>
              </div>
            </div>
            <div className=" move_txt_child w-0 flex gap-2 justify-between">
              <h2>create</h2>
              <p> seamless,</p>
              <p> natural</p>
            </div>
            <div className="flex  justify-between gap-2">
              <div className=" w-[35%]  opacity-0  md:w-[15%] uppercase text-[8px] lg:text-sm">
                <p>our interiors are designed to be functional, timeless, and personal.</p>
                <button>
                  <div className=' mt-3 lg:mt-5 relative w-fit group overflow-hidden uppercase text-sm flex items-center lg:gap-2'>
                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                    <p className=' text-[8px] lg:text-sm '>
                      View more
                    </p>
                    <div className="block relative">
                      <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="" />
                      <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="" />
                      <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="" />
                    </div>
                  </div>
                </button>
              </div>
              <div className=" w-[35%] translate-y-8 lg:translate-y-5 absolute  md:w-[15%] uppercase text-[8px] lg:text-sm">
                <p>our interiors are designed to be functional, timeless, and personal.</p>
                <button>
                  <div className=' mt-3 lg:mt-5 relative w-fit group overflow-hidden uppercase text-sm flex items-center lg:gap-2'>
                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                    <p className=' text-[8px] lg:text-sm '>
                      View more
                    </p>
                    <div className="block relative">
                      <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="" />
                      <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="" />
                      <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="" />
                    </div>
                  </div>
                </button>
              </div>
              <div className=" w-[70%]  lg:w-[85%] flex justify-end lg:pl-10 gap-2 lg:gap-5">
                <div className=" move_txt_child w-[50%] flex justify-between">
                  <h2> flow </h2>
                  <p>everywhere.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 space-y-5 gap-3 md:hidden">
          {data.map((item, idx) => (
            <div key={idx} className="w-full">
              <img className='w-full aspect-square mb-1' src={item.img} alt="" />
              <div className="w-full text-xs space-y-2 ">
                <p>/ 0{idx + 1}</p>
                <p className='leading-tight'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>


        <div className=" hidden md:block space-y-10">
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