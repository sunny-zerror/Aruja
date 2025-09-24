import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const ServiceSlider = () => {

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".serv_slider_paren",
                start: "top top",
                end:"+=3000",
                scrub: true,
                pin: true,
                // markers:true,
                // anticipatePin: 1
            }
        });

        tl.fromTo(".serv_slide_bg_img_1", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease:"linear",
        });
        tl.fromTo(".serv_slide_bg_img_2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease:"linear",
        });
        tl.fromTo(".serv_slide_bg_img_3", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease:"linear",
        });


    }, [])


    return (
        <div>
            <div className=" serv_slider_paren w-full center mt-20 text-[#FFFDF6] h-screen relative">
                <img className=' serv_slide_bg_img_1 w-full h-full absolute object-cover top-0 left-0 z-[4] ' src="/images/HomePage/serviceImg1.webp" alt="" />
                <img className=' serv_slide_bg_img_2 w-full h-full absolute object-cover top-0 left-0 z-[3] ' src="/images/HomePage/serviceImg2.webp" alt="" />
                <img className=' serv_slide_bg_img_3 w-full h-full absolute object-cover top-0 left-0 z-[2] ' src="/images/HomePage/serviceImg3.webp" alt="" />
                <img className=' serv_slide_bg_img_4 w-full h-full absolute object-cover top-0 left-0 z-[1] ' src="/images/HomePage/serviceImg4.webp" alt="" />

                <div className=" serv_slide_bg_img_1 absolute w-[90%] h-[85%] bg-[#454738] z-[15] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex  justify-between">
                            <div className="flex gap-2 uppercase text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className='text-7xl'>01/</p>
                                <p className='text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex items-end justify-between">
                            <p className='text-5xl uppercase'>Residential Interior </p>
                            <div className="w-[30%] leading-none">
                                <p className=''>End-to-end spatial design and structural planning that shape how people live and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img className='w-full h-full object-cover ' src="/images/HomePage/serviceImg1.webp" alt="" />
                    </div>
                </div>


                <div className=" serv_slide_bg_img_2 absolute w-[90%] h-[85%] bg-[#454738] z-[14] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex  justify-between">
                            <div className="flex gap-2 uppercase text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className='text-7xl'>02/</p>
                                <p className='text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex items-end justify-between">
                            <p className='text-5xl uppercase'>commercial interiors</p>
                            <div className="w-[30%] leading-none">
                                <p className=''>End-to-end spatial design and structural planning that shape how people live and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img className='w-full h-full object-cover ' src="/images/HomePage/serviceImg2.webp" alt="" />
                    </div>
                </div>


                <div className="serv_slide_bg_img_3 absolute w-[90%] h-[85%] bg-[#454738] z-[13] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex  justify-between">
                            <div className="flex gap-2 uppercase text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className='text-7xl'>03/</p>
                                <p className='text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex items-end justify-between">
                            <p className='text-5xl uppercase'>space planning</p>
                            <div className="w-[30%] leading-none">
                                <p className=''>End-to-end spatial design and structural planning that shape how people live and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img className='w-full h-full object-cover ' src="/images/HomePage/serviceImg3.webp" alt="" />
                    </div>
                </div>


                <div className="serv_slide_bg_img_4 absolute w-[90%] h-[85%] bg-[#454738] z-[12] p-8">
                    <div className=" w-full h-[40%]  pb-5 flex flex-col justify-between">
                        <div className=" flex  justify-between">
                            <div className="flex gap-2 uppercase text-4xl">
                                <p>Our</p>
                                <h2 className='italic'>Services</h2>
                            </div>
                            <div className="flex gap-2 items-end">
                                <p className='text-7xl'>04/</p>
                                <p className='text-5xl opacity-50'>04</p>
                            </div>
                        </div>
                        <div className=" flex items-end justify-between">
                            <p className='text-5xl uppercase'>styling</p>
                            <div className="w-[30%] leading-none">
                                <p className=''>End-to-end spatial design and structural planning that shape how people live and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60%] w-full">
                        <img className='w-full h-full object-cover ' src="/images/HomePage/serviceImg4.webp" alt="" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ServiceSlider