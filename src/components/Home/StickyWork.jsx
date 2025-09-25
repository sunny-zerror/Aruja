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
        gsap.set(".anim_title_1", { y: 20, opacity: 0 })
        gsap.set(".anim_para_1", { y: 20, opacity: 0 })
        gsap.set(".anim_title_3", { y: 20, opacity: 0 })
        gsap.set(".anim_para_3", { y: 20, opacity: 0 })
        gsap.set(".anim_title_2", { y: 20, opacity: 0 })
        gsap.set(".anim_para_2", { y: 20, opacity: 0 })
        gsap.set(".anim_title_0", { y: 20, opacity: 0 })
        gsap.set(".anim_para_0", { y: 20, opacity: 0 })


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky_img_3",
                start: "bottom bottom",
                scrub: true,
                // markers: true,
            }
        });

        tl.to(".sticky_img_1", {
            y: "-23vw", ease: "linear",
            onStart: () => {
                gsap.to(".anim_title_1", { y: 0, opacity: 1, duration: 0.5, delay: .5 })
                gsap.to(".anim_para_1", { y: 0, opacity: 1, duration: 0.5, delay: .5 })
            },
            onReverseComplete: () => {
                gsap.to(".anim_title_1", { y: 20, opacity: 0, duration: 0 })
                gsap.to(".anim_para_1", { y: 20, opacity: 0, duration: 0 })
            }
        })

        tl.to(".sticky_img_1", { y: "-46vw", ease: "linear" }, "p")
        tl.to(".sticky_img_3", {
            y: "-23vw", ease: "linear",
            onStart: () => {
                gsap.to(".anim_title_3", { y: 0, opacity: 1, duration: 0.5, delay: .5 })
                gsap.to(".anim_para_3", { y: 0, opacity: 1, duration: 0.5, delay: .5 })
            },
            onReverseComplete: () => {
                gsap.to(".anim_title_3", { y: 20, opacity: 0, duration: 0 })
                gsap.to(".anim_para_3", { y: 20, opacity: 0, duration: 0 })
            }
        }, "p")

        tl.to(".sticky_img_1", { y: "-69vw", ease: "linear" }, "p2")
        tl.to(".sticky_img_3", { y: "-46vw", ease: "linear" }, "p2")
        tl.to(".sticky_img_0", {
            y: "-23vw", ease: "linear",
            onStart: () => {
                gsap.to(".anim_title_0", { y: 0, opacity: 1, duration: 0.5, delay: .5 })
                gsap.to(".anim_para_0", { y: 0, opacity: 1, duration: 0.5, delay: .5 })
                gsap.to(".anim_title_2", { y: 0, opacity: 1, duration: 0.5, delay: .7 })
                gsap.to(".anim_para_2", { y: 0, opacity: 1, duration: 0.5, delay: .7 })
            },
            onReverseComplete: () => {
                gsap.to(".anim_title_0", { y: 20, opacity: 0, duration: 0 })
                gsap.to(".anim_para_0", { y: 20, opacity: 0, duration: 0 })
                gsap.to(".anim_title_2", { y: 20, opacity: 0, duration: 0 })
                gsap.to(".anim_para_2", { y: 20, opacity: 0, duration: 0 })
            }
        }, "p2")


    }, [])


    return (
        <div>
            <div className="w-full px-10 pt-20">
                <div className="w-full relative mb-20 h-[50vh] flex flex-col  items-center">
                    <div className="sticky_img_1 w-[15%] left-0 bottom-5 font-semibold absolute uppercase text-sm">
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
                    <div className=" sticky_img_1 w-full ml-3 mb-5 h-fit text-sm font-black">
                        <p>OUR WORK</p>
                    </div>
                    <div className=" sticky_img_1 uppercase text-8xl space-y-5 w-full">
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

                <div className="w-full sticky_img_parent relative h-[70vw] items-start  grid  grid-cols-4 gap-5">
                    {data.map((item, i) => (
                        <div key={i} className={` sticky_img_${i} flex aspect-square sticky top-[50%] w-full `}>
                            <div className={` ${i === 0 ? "translate-x-[24vw]" : ""} -translate-x-[3.7vw] -translate-y-1`}>
                                <p className={`text-2xl anim_title_${i} whitespace-nowrap`}>/ 0{i + 1}</p>
                            </div>
                            <img className='w-full  absolute h-full object-cover' src={item.img} alt="" />
                            <div className="h-full relative aspect-square w-full ">
                                <div className={`  absolute  ${i === 3 ? " translate-x-[-19.8vw] text-end" : "translate-x-[21vw]"}  ${i === 0 || i === 3 ? "translate-y-1 bottom-0" : " top-0 -translate-y-1"}  `}>
                                    <p className={` anim_para_${i} text-lg w-[70%] leading-6`}>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StickyWork