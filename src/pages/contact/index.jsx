import { usePageReady } from '@/components/hooks/usePageReady';
import gsap from 'gsap';
import React from 'react'
import Marquee from 'react-fast-marquee'

const index = () => {

    usePageReady(() => {
        gsap.to(".marq_op", {
            opacity: 1,
            ease: "ease-secondary",
            duration: 4,
        });
        gsap.to(".belo_link", {
            width: "100%",
            ease: "ease-secondary",
            duration: 2,
        });
        gsap.to(".ctct_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 1.5,
        });
        gsap.to(".ctct_clip_div", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "ease-secondary",
            duration: 2,
            stagger: 0.15,
        })
    });

    return (
        <div>
            <div className="w-full relative h-screen flex flex-col-reverse lg:flex-row  ">
                <div
                    style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
                    className=" ctct_clip_div h-[30%]  lg:h-full w-full lg:w-[25%]">
                    <img className='w-full  h-full lg:object-[17%] object-cover' src="/Images/ContactPageImg.webp" alt="loading" />
                </div>
                <div className=" h-[70%] lg:h-full w-full lg:w-[75%] relative flex items-end justify-end pb-12 lg:pb-0">
                    <div className="absolute marq_op opacity-0 text-5xl lg:text-[6vw] uppercase overflow-hidden scroller_none  w-full top-[20%] lg:top-[25%]">
                        <Marquee gradient gradientWidth={50} className='   h-full w-full scroller_none ' >
                            <p className='h-full  ml-[15vw]'>
                                chew on this
                            </p>
                            <p className='h-full  ml-[15vw]'>
                                chew on this
                            </p>
                            <p className='h-full  ml-[15vw]'>
                                chew on this
                            </p>
                        </Marquee>
                    </div>

                    <div className="w-full font-semibold lg:space-y-10 uppercase p-3 py-5 lg:p-28">
                        <div className="flex flex-col gap-y-5 lg:flex-row w-full justify-between">
                            <div className=" w-full leading-none lg:w-1/2">
                                <div className='  block overflow-hidden   text-xs lg:text-sm'>
                                    <p className='ctct_anim_txt translate-y-[105%]'  >
                                        Write US
                                    </p>
                                </div>
                                <div className='  block overflow-hidden  text-lg lg:text-2xl mt-1'>
                                    <p className='ctct_anim_txt translate-y-[105%]'  >
                                        hello@arujak.com
                                    </p>
                                </div>
                            </div>
                            <div className=" w-full leading-none lg:w-1/2">
                                <div className='  block overflow-hidden   text-xs lg:text-sm'>
                                    <p className='ctct_anim_txt translate-y-[105%]'  >
                                        find US
                                    </p>
                                </div>
                                <div className='  block overflow-hidden  text-lg lg:text-2xl mt-1'>
                                    <div className="block overflow-hidden">
                                        <p className='ctct_anim_txt translate-y-[105%]'  >
                                            H.no arujak mumbai,
                                        </p>
                                    </div>
                                    <div className="block overflow-hidden">
                                        <p className='ctct_anim_txt translate-y-[105%]'  >
                                            india
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 mt-5 lg:mt-0 lg:flex-row w-full justify-between">

                            <div className=" w-full leading-none lg:w-1/2">
                                <div className='  block overflow-hidden   text-xs lg:text-sm'>
                                    <p className='ctct_anim_txt translate-y-[105%]'  >
                                        talk to US
                                    </p>
                                </div>
                                <div className='  block overflow-hidden  text-lg lg:text-2xl mt-1'>
                                    <p className='ctct_anim_txt translate-y-[105%]'  >
                                        +91 12345 67890
                                    </p>
                                </div>
                            </div>


                            <div className="  w-full leading-none lg:w-1/2 uppercase flex flex-col gap-y-2">
                                <button>
                                    <div className='  relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                                        <div className=" belo_link  w-0 group-hover:left-[100%]   transition-all duration-300 h-[1px]  bg-[#2E2D2B]  bottom-0 left-0 absolute"></div>
                                        <p className='ctct_anim_txt translate-y-[105%]'  >
                                            instagram
                                        </p>

                                    </div>
                                </button>
                                <button>
                                    <div className=' relative w-fit group overflow-hidden uppercase flex items-center gap-2'>
                                        <div className=" belo_link w-0 group-hover:left-[100%]   transition-all duration-300 h-[1px]  bg-[#2E2D2B]  bottom-0 left-0 absolute"></div>
                                        <p className='ctct_anim_txt translate-y-[105%]'  >
                                            linkedIn
                                        </p>

                                    </div>
                                </button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index