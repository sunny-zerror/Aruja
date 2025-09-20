import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const Hero = () => {
    CustomEase.create("in-out-quint", "0.83,0,0.17,1");

    useEffect(() => {
        gsap.from(".anim_txt", { y: 100, duration: 1, stagger: 0.1, delay: 2.2, ease: "in-out-quint" })


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero_paren",
                start: "top top",
                end: "+=3500",
                scrub: .4,
                pin: true,
                // markers: true,
            }
        })
        tl.to(".hero_bg_img", { scale: 1.2, duration: 3, }, "0")
        tl.fromTo(".slide_paren", {
            scaleX: 0.005555555555555556, scaleY: 0
        }, {
            keyframes: [
                { scaleX: 0.005555555555555556, scaleY: 1, duration: 0.375 },
                { scaleX: 1, scaleY: 1, duration: 0.625 }
            ]
        }, "0")

        tl.to(".hero_slide_1_img", {
            scale: 1,
            transformOrigin: "center center",
            willChange: "transform",
            delay: .7,
            duration: 1,
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_1", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "0");
        tl.to(".hero_slide_2_img", {
            scale: 1,
            duration: .8,
            transformOrigin: "center center",
            willChange: "transform",
            delay: 1.1,
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_2", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "0");
        tl.to(".hero_slide_3_img", {
            scale: 1,
            transformOrigin: "center center",
            willChange: "transform",
            delay: 1.5,
            onUpdate: function () {
                const progress = this.progress();
                const half = 50 * progress;
                const clip = `polygon(${50 - half}% ${50 - half}%, ${50 + half}% ${50 - half}%, ${50 + half}% ${50 + half}%, ${50 - half}% ${50 + half}% )`;
                gsap.set(".hero_slide_3", {
                    clipPath: clip,
                    transformOrigin: "center center",
                    willChange: "clip-path"
                });
            }
        }, "0");

        tl.to(".hero_slide_4", {
            scale: 1,
            duration: .9,
            delay: 1.7,
        }, "0");

        tl.to(".sq_img_1", {
            top: "-15vw",
            duration: 1,
            delay: 1.5,
        }, "1");
        tl.to(".sq_img_2", {
            top: "-15vw",
            duration: 1,
            delay: 2,
        }, "1");
        tl.to(".sq_img_3", {
            top: "-15vw",
            duration: 1,
            delay: 2.5,
        }, "1");
        tl.to(".sq_img_4", {
            top: "-15vw",
            duration: 1,
            delay: 3
        }, "1");
        tl.to(".sq_img_5", {
            top: "-15vw",
            duration: 1,
            delay: 3.5,
        }, "1");
        tl.to(".about_div", {
            y: -150,
            duration: 1,
            delay: 3.8,
        }, "1");
        tl.to(".number_div", {
           bottom:" 10vh",
            duration: 1,
            delay: 3.8,
        }, "1");




    }, [])

    return (
        <div>
            <div className=" hero_paren  w-full center h-screen relative overflow-hidden">

                <img className='hero_bg_img top-0 left-0 h-full brightness-[.6] w-full object-cover' src="https://cdn.fame-estate.com/home_6ed8befea2.png" alt="" />
                <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase text-center text-white text-5xl font-semibold">
                    <div className="block overflow-hidden">
                        <p className='anim_txt font-bold'>Where Spaces Flows,</p>
                    </div>
                    <div className="block overflow-hidden">
                        <p className='anim_txt font-bold'>& thinks Design</p>
                    </div>
                    <p></p>
                </div>

                <div className=" slide_paren  w-[100%] h-[100%] center overflow-hidden absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#FFFDF6]"></div>

                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                    }} className="hero_slide_1 w-full h-full origin-center  absolute z-[2] ">
                    <img className=' hero_slide_1_img h-full origin-center w-full object-cover scale-[0.3] ' src="https://cdn.fame-estate.com/1_787ee4dae3_54280191fd.webp" alt="" />
                </div>
                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                    }} className="hero_slide_2 w-full h-full origin-center  absolute z-[3] ">
                    <img className=' hero_slide_1_img h-full origin-center w-full object-cover scale-[0.3] ' src="https://cdn.fame-estate.com/4_e4dd79658e_e0dc0c7570.webp" alt="" />
                </div>
                <div
                    style={{
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                    }} className="hero_slide_3 w-full h-full origin-center  absolute z-[4] ">
                    <img className=' hero_slide_1_img h-full origin-center w-full object-cover scale-[0.3] ' src="https://cdn.fame-estate.com/3_58be3bd3a5_5a7aefd99a.webp" alt="" />
                </div>

                <div className=" hero_slide_4 overflow-hidden scale-[0] bg-[#FFFDF6] w-full h-full absolute z-[5]">
                    <div className="w-full h-screen relative flex-col gap-10 center text-center ">
                        <div className=" about_div flex-col w-full h-full gap-10 center text-center">
                            <p className='font-black'>ABOUT US</p>
                            <div className="text-5xl  space-y-2 capitalize">
                                <p >At arujaK, design is more than decoration </p>
                                <div className="flex gap-2">
                                    <p>decoration it’s about</p>
                                    <h2> <i>creating spaces</i> </h2>
                                </div>
                                <p >that flow with purpose, proportion, </p>
                                <h2> <i>and precision.</i> </h2>
                            </div>
                        </div>

                        <div className=" sq_img_1 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] right-10 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/six_70549f943a.png" alt="" />
                        </div>
                        <div className=" sq_img_2 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] left-10 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/1_02b2655de9.jpg" alt="" />
                        </div>
                        <div className=" sq_img_3 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] left-1/2 -translate-x-1/2 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_service2_db4b58f8b4.png" alt="" /></div>
                        <div className=" sq_img_4 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] right-32 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_service_01a01267d4.png" alt="" />
                        </div>
                        <div className=" sq_img_5 aspect-square overflow-hidden absolute z-[-1] bottom-[-15vw] left-32 w-[15vw] ">
                            <img className='w-full h-full object-cover' src="https://cdn.fame-estate.com/medium_damac_2cd1f341f0.png" alt="" />
                        </div>


                        <div className=" number_div w-full absolute bottom-[-20vh] left-0 h-[20vh]   flex items-center justify-between px-24">
                            <div className=" text-start block">
                                <h2 className='text-8xl'>15+</h2>
                                <p className='uppercase text-sm font-extrabold'>projects</p>
                            </div>
                            <div className=" text-start block">
                                <div className='text-8xl flex items-center'> <h2> 45K+</h2> <p className='text-3xl lowercase -translate-y-[3px]'>SQ. ft.</p> </div>
                                <p className='uppercase text-sm font-extrabold'>Space Designed</p>
                            </div>
                            <div className=" text-start block">
                                <div className='text-8xl flex items-center'> <h2> 5+</h2> <p className='text-3xl capitalize  -translate-y-[2px]'>Yrs</p> </div>

                                <p className='uppercase text-sm font-extrabold'>Experience</p>
                            </div>
                            <div className=" text-start block">
                                <h2 className='text-8xl'>100%</h2>
                                <p className='uppercase text-sm font-extrabold'>Transparency</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero