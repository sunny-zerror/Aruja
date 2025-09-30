import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import useNavigation from '@/store/useNavigation';
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

  const router = useRouter();
  const { navigate } = useNavigation();

  useEffect(() => {

    gsap.fromTo(".clip_wrk", {
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      y:20,
      opacity: 0
    }, {
      opacity: 1,
      y:0,
      // duration: .5,
      ease:"linear",
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      stagger: {
        each: 0.3,
        duration: 0.2,
      },
      scrollTrigger: {
        trigger: ".clip_wrk",
        start: "top 50%",
        // markers: true,
      },
    })

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
        <div className="w-full relative mb-8 lg:mb-20  flex flex-col  items-center">
          <div className=" w-full lg:ml-3 mb-5 h-fit text-xs lg:text-sm font-black">
            <p>OUR WORK</p>
          </div>
          <div className=" lg:hidden  overflow-hidden leading-none uppercase text-2xl  md:text-[6vw] lg:space-y-5 w-full">
            <div className="flex  flex-wrap w-full leading-none  gap-x-2">
              <p>Seamless  </p>
              <h2>design</h2>
              <p>flows</p>
              <p>from  </p>
              <h2>homes  </h2>
              <p>to </p>
              <h2> every   </h2>
              <p>workplace</p>
            </div>
            <div className="w-full lg:flex justify-center">
              <div className=" mt-5 w-[60%] md:w-[30%] lg:w-[20%] lg:text-center uppercase text-[12px] lg:text-sm">
                <p>our interiors are designed to be functional, timeless, and personal.</p>
                <button onClick={() => navigate(router, "/studio")}>
                  <div className=' mt-3 lg:mt-5 relative w-fit group overflow-hidden uppercase text-sm flex items-center lg:gap-2'>
                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                    <p className=' text-[12px] lg:text-sm '>
                      View more
                    </p>
                    <div className="block relative">
                      <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block move_txt_on_scroll overflow-hidden leading-none uppercase text-2xl  md:text-[6vw] lg:space-y-5 w-full">
            <div className="flex move_txt_child whitespace-nowrap w-[80%] justify-between  gap-2">
              <p>interios   </p>
              <h2>that</h2>
              <p>addapt</p>
            </div>
            <div className=" w-full  flex justify-end ">
              <div className=" move_txt_child whitespace-nowrap w-[50%] flex justify-between">
                <p> to   </p>
                <h2> habits,   </h2>
                <p> not </p>
              </div>
            </div>
            <div className="flex move_txt_child  whitespace-nowrap w-[80%] justify-between">
              <h2> the   </h2>
              <p> other </p>
              <p>  way</p>
              <p>around</p>
            </div>
            <div className="w-full lg:flex justify-center">
              <div className=" mt-5 w-[60%] md:w-[30%] lg:w-[20%] lg:text-center uppercase text-[12px] lg:text-sm">
                <p>our interiors are designed to be functional, timeless, and personal.</p>
                <button onClick={() => navigate(router, "/studio")}>
                  <div className=' mt-3 lg:mt-5 relative w-fit group overflow-hidden uppercase text-sm flex items-center lg:gap-2'>
                    <div className="w-[80%]  group-hover:right-[-82%] transition-all duration-300 h-[1px]  bg-[#2E2D2B] translate-x-[-25%] bottom-0.5 right-0 absolute"></div>
                    <p className=' text-[12px] lg:text-sm '>
                      View more
                    </p>
                    <div className="block relative">
                      <img className='  w-[60%] lg:w-full   opacity-0  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='  w-[60%] lg:w-full absolute  top-0 right-0 origin-top-right group-hover:scale-0 transition-all duration-300  ' src="/icons/black_arrow.png" alt="loading" />
                      <img className='   absolute  top-0 left-0 scale-0 origin-bottom-left group-hover:scale-100 transition-all duration-500 ease-in-out ' src="/icons/black_arrow.png" alt="loading" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 space-y-5 gap-3 md:hidden">
          {data.map((item, idx) => (
            <div key={idx} className=" clip_wrk w-full">
              <div className=" overflow-hidden w-full">
                <img className='w-full aspect-square mb-1' src={item.img} alt="loading" />
              </div>
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
                    <p className=" text-sm lg:text-lg w-[70%] leading-tight">{item.desc}</p>
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
                    <p className=" text-sm lg:text-lg w-[70%] leading-tight">{item.desc}</p>
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
                    <p className=" text-sm lg:text-lg w-[70%] leading-tight">{item.desc}</p>
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
                    <p className=" text-sm lg:text-lg w-[70%] leading-tight">{item.desc}</p>
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