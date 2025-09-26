import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

const processData = [
    {
        number: "01",
        title: "design",
        img: "/Images/ContactPageImg.webp"
    },
    {
        number: "02",
        title: "Planning",
        img: "/Images/HomePage/cdcs.webp"
    },
    {
        number: "03",
        title: "Visualisation",
        img: "/Images/HomePage/erec.webp"
    },
    {
        number: "04",
        title: "execution",
        img: "/Images/HomePage/okdv.webp"
    },
    {
        number: "05",
        title: "setup",
        img: "/Images/HomePage/wmdsc.webp"
    },
]

const solutionData = [
    {
        title: "Transparent Scope of Work Documents",
        desc: "Every project begins with a clearly outlined scope, defining deliverables, inclusions, and phases.",
        icon: "/icons/solutionIcons/ring.svg"
    },
    {
        title: "Project Management System PMS",
        desc: "From tracking orders and budgets to real-time project timelines, we use an internal PMS tailored to design execution.",
        icon: "/icons/solutionIcons/steps.svg"
    },
    {
        title: "Checklists for Drawing Sets",
        desc: "Creating meticulous checklists to ensure everyone working on the project has a clear, accurate, and unified understanding of the design intent, finishes, and spatial arrangements.",
        icon: "/icons/solutionIcons/checklist.svg"
    },
    {
        title: "Checklists for Site Supervision",
        desc: "We standardize communication with vendors and site teams using structured checklists for everything from electricals to furniture placement.",
        icon: "/icons/solutionIcons/readingMan.svg"
    },
    {
        title: "Full -Kitting",
        desc: "We don’t just design — we create a comprehensive kit of deliverables for each step in the project to ensure we don’t miss a step.",
        icon: "/icons/solutionIcons/box.svg"
    },
    {
        title: "Quality Checks",
        desc: "Final quality checks after the project completion to be conducted by our team",
        icon: "/icons/solutionIcons/ring.svg"
    },

]


const index = () => {

    const [hovered, setHovered] = useState(null);

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    }
    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }

    const mouseMove = (e) => {
        gsap.to(".cursor-box", { opacity: 1, duration: .3 })
        const { clientX, clientY } = e;
        const el = document.querySelector(".cursor-box");
        if (el) {
            const { width, height } = el.getBoundingClientRect();
            mousePosition.x.set(clientX - width / 2);
            mousePosition.y.set(clientY - height / 2);
        }
    };
    const mouseLeave = () => {
        gsap.to(".cursor-box", { opacity: 0, duration: .3 })
    }


    useEffect(() => {

        gsap.fromTo(".paex_img_cdc", {
            y: -200,
        }, {
            y: 200,
            duration: 4,
            ease: "linear",
            scrollTrigger: {
                trigger: ".stic_image_pent_c",
                start: "top 50%",
                scrub: true,
                // markers: true,
            }
        })
        gsap.to(".text-clip-img", {
            backgroundPosition: "21% -30%", // move vertically to 100%
            duration: 3,
            scrollTrigger: {
                trigger: ".stic_image_pent_c",
                start: "top 50%",
                scrub: true,
                // markers: true,
            }
        });


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".studio_desc",
                start: "top 70%",
                end: "top 10%",
                scrub: true,
                // markers: true,
            }

        })
        tl.to(".opa_slide_1", {
            left: "100%",
            duration: .8,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_2", {
            left: "100%",
            duration: .8,
            delay: .8,
            ease: "linear",
        }, "parr");

        tl.to(".opa_slide_3", {
            left: "100%",
            duration: .8,
            delay: 1.6,
            ease: "linear",
        }, "parr");

    }, [])


    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".solution_paren",
                start: "top top",
                end: "+=1500",
                scrub: true,
                pin: true,
                // markers: true,
                pinSpacing: true,
            }
        })
        tl.to(".scroll_solut", {
            xPercent: -132,
            ease: "linear",
        }, "parallel")

        tl.set(".icon_1, .content_box_1", {
            opacity: 1,
            delay: 0.01,
            ease: "linear",
        }, "parallel")
        tl.set(".dot_border_1", {
            borderColor: "#FFFDF6",
            delay: 0.01,
            ease: "linear",
        }, "parallel")
        tl.set(".inside_dot_1", {
            height:"20px",
            width:"20px",
            backgroundColor: "#FFFDF6",
            delay: 0.01,
            ease: "linear",
        }, "parallel")
        tl.to(".scroll_line_0", {
            width: "100%",
            duration: 0.01,
            ease: "linear",
        }, "parallel")


        tl.set(".icon_2, .content_box_2", {
            opacity: 1,
            delay: 0.105,
            ease: "linear",
        }, "parallel")
        tl.set(".dot_border_2", {
            borderColor: "#FFFDF6",
            delay: 0.105,
            ease: "linear",
        }, "parallel")
        tl.set(".inside_dot_2", {
            height:"20px",
            width:"20px",
            backgroundColor: "#FFFDF6",
            delay: 0.105,
            ease: "linear",
        }, "parallel")
        tl.to(".scroll_line_1", {
            width: "100%",
            duration: 0.1,
            delay: 0.005,
            ease: "linear",
        }, "parallel")

        tl.set(".icon_3, .content_box_3", {
            opacity: 1,
            delay: 0.2,
            ease: "linear",
        }, "parallel")
        tl.set(".dot_border_3", {
            borderColor: "#FFFDF6",
            delay: 0.2,
            ease: "linear",
        }, "parallel")
        tl.set(".inside_dot_3", {
            height:"20px",
            width:"20px",
            backgroundColor: "#FFFDF6",
            delay: 0.2,
            ease: "linear",
        }, "parallel")
        tl.to(".scroll_line_2", {
            width: "100%",
            duration: 0.1,
            delay: 0.1,
            ease: "linear",
        }, "parallel")

        tl.set(".icon_4, .content_box_4", {
            opacity: 1,
            delay: 0.295,
            ease: "linear",
        }, "parallel")
        tl.set(".dot_border_4", {
            borderColor: "#FFFDF6",
            delay: 0.295,
            ease: "linear",
        }, "parallel")
        tl.set(".inside_dot_4", {
            height:"20px",
            width:"20px",
            backgroundColor: "#FFFDF6",
            delay: 0.295,
            ease: "linear",
        }, "parallel")
        tl.to(".scroll_line_3", {
            width: "100%",
            duration: 0.1,
            delay: 0.195,
            ease: "linear",
        }, "parallel")

        tl.set(".icon_5, .content_box_5", {
            opacity: 1,
            delay: 0.39,
            ease: "linear",
        }, "parallel")
        tl.set(".dot_border_5", {
            borderColor: "#FFFDF6",
            delay: 0.39,
            ease: "linear",
        }, "parallel")
        tl.set(".inside_dot_5", {
            height:"20px",
            width:"20px",
            backgroundColor: "#FFFDF6",
            delay: 0.39,
            ease: "linear",
        }, "parallel")
        tl.to(".scroll_line_4", {
            width: "100%",
            duration: 0.1,
            delay: 0.29,
            ease: "linear",
        }, "parallel")


        tl.set(".last_dot_border_5", {
            borderColor: "#FFFDF6",
            delay: 0.482,
            ease: "linear",
        }, "parallel")
        tl.set(".last_inside_dot_5", {
            height:"20px",
            width:"20px",
            backgroundColor: "#FFFDF6",
            delay: 0.482,
            ease: "linear",
        }, "parallel")
        tl.to(".scroll_line_5", {
            width: "100%",
            duration: 0.1,
            delay: 0.39,
            ease: "linear",
        }, "parallel")





    }, [])

    return (
        <div className="w-full pt-12 flex-col center">
            <div className="leading-none flex gap-6 -translate-x-5 uppercase text-[16.2vw]">
                <p className="text-clip-img">The</p>
                <h2 className="italic">studio</h2>
            </div>

            <div className=" mt-10 stic_image_pent_c w-full h-[140vh] overflow-hidden center">
                <img className=' paex_img_cdc brightness-90 w-full h-full object-cover'
                    src="/Images/HomePage/FooterImg.webp"
                    alt="loading" />
            </div>
            <div className="w-full py-44 center studio_desc">
                <div className="text-5xl flex flex-col  items-center   capitalize">
                    <div className='block relative overflow-hidden pb-2'>
                        <div className=" opa_slide_1 absolute top-1 left-[25%] w-full h-full bg-[#fffdf6c0]"></div>
                        <p>
                            design is more than decoration
                        </p>
                    </div>
                    <div className="flex  relative overflow-hidden pb-2 pr-2 gap-2">
                        <div className=" opa_slide_2 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                        <p>it’s about </p>
                        <h2> <i>creating spaces</i> </h2>
                        <p>that flow with</p>
                    </div>
                    <div className='block relative overflow-hidden pb-2 '>
                        <div className=" opa_slide_3 absolute top-1 left-0 w-full h-full bg-[#fffdf6c0]"></div>
                        <p >purpose, proportion, and precision.</p>
                    </div>
                </div>
            </div>

            <div className="w-full px-10  justify-between flex">
                <div className="w-[60%] h-full">
                    <div className="w-full aspect-[16/10] ">
                        <img className='w-full h-full object-cover' src="/Images/HomePage/erec.webp" alt="" />
                    </div>
                    <p className='uppercase text-sm font-black mt-10'>About us</p>
                    <p className='text-3xl mt-5'>Form follows function. Flow shapes design. Based in India, we are a multidisciplinary interior design studio rooted in the principle that form follows function. Our spaces are built on flow — spatial, emotional, and practical. Every project is a study in proportion, purpose, and precision.</p>
                </div>
                <div className="w-[23.5%] h-full ">
                    <div className="w-full flex items-end aspect-[10/16] ">
                        <img className=' w-full aspect-[4/5] object-cover' src="/Images/ContactPageImg.webp" alt="" />
                    </div>
                    <p className='text-lg mt-10 leading-tight'>At arujaK, we combine creativity with operations. We believe great interiors must inspire while staying on track. With 15+ projects across India and 45,000+ sq. ft. designed, we bring structure and imagination together.</p>
                </div>
            </div>

            <div className="w-full py-44 px-10 gap-20 flex justify-between items-stretch">
                <div className="w-[70vw] flex flex-col justify-between">
                    <div>
                        <p className="text-sm uppercase font-black">the studio</p>
                        <div className="mt-5 uppercase text-8xl">
                            <div className="flex gap-4">
                                <p>behind</p>
                                <h2>the</h2>
                            </div>
                            <div className="flex justify-end gap-4 w-full">
                                <p>Design</p>
                                <h2>Studio</h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="leading-tight text-lg w-[40%] capitalize font-semibold">
                            <p className="text-end">
                                “ Personal vision, professional execution.
                            </p>
                            <p>
                                Founded with the intent to balance aesthetics with function, arujaK
                                reflects the eye and passion of its founder. Each project carries
                                personal attention — not just a template.”
                            </p>
                            <p className="text-lg uppercase font-semibold mt-5">
                                - Aruja Kothari tantia
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[30vw] aspect-[6/7] h-fit overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/Images/studioPage/behind_studio.webp"
                        alt=""
                    />
                </div>
            </div>

            <div className="w-full pb-44 px-10">
                <p className='uppercase text-sm font-black'>THe Process</p>
                <div onMouseMove={mouseMove} onMouseEnter={mouseMove} onMouseLeave={mouseLeave} className="w-full ">

                    {processData.map((item, idx) => (
                        <motion.div
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                            }}
                            key={idx}
                            animate={{
                                borderColor: hovered === idx ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.2)",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`w-full  ${idx === 4 ? "border-none" : "border-b-[1px]"
                                } h-[20vh] group text-8xl uppercase flex items-center justify-between`}
                        >
                            <motion.div className=" cursor-box pointer-events-none z-[-1] opacity-0 aspect-square w-[20vw]  overflow-hidden fixed top-0 left-0"
                                style={{ x: mousePosition.x, y: mousePosition.y }}>
                                <img className='w-full h-full object-cover' src={item.img} alt="" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: hovered === idx ? 1 : 0.4 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <p>{item.number}</p>
                            </motion.div>

                            <motion.div
                                className="text-end"
                                initial={{ opacity: 0.4 }}
                                animate={{ opacity: hovered === idx ? 1 : 0.4 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <p>{item.title}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className=" solution_paren w-full h-screen bg-[#454738] text-[#FFFDF6] ">
                <div className="flex uppercase h-[25%]  px-10 py-16 text-8xl gap-4">
                    <p>Our</p>
                    <h2 className='italic '>solution</h2>
                </div>

                <div className="h-[75%] w-full  flex items-center">
                    <div className=" scroll_solut w-full flex px-10 scroller_none ">
                        {solutionData.map((item, idx) => (
                            <div key={idx} className="w-[30vw] shrink-0 space-y-10 ">
                                <div className="size-24">
                                    <img className={` transition-all duration-300 icon_${idx} ${idx === 0 ? "opacity-100" : "opacity-30"} `} src={item.icon} alt="" />
                                </div>
                                <div className="w-full h-[3px] bg-[#fffdf646] relative ">
                                    <div className="w-full h-full relative overflow-hidden">
                                        <div className={` scroll_line_${idx} absolute bg-[#FFFDF6] h-full left-0 ${idx === 0 ? 'w-[70%]' : 'w-0'}`}></div>
                                    </div>

                                    {idx === 5 && (
                                        <div className={` ${idx === 5 ? " border-[#fffdf646] " : ""} last_dot_border_${idx} size-9  absolute overflow-hidden border-[2px]  bg-[#454738] top-1/2 right-0 -translate-y-1/2 center rounded-full`}>
                                            <div className={`  ${idx === 5 ? " bg-[#fffdf646] " : "bg-[#FFFDF6]"} transition-all duration-300 last_inside_dot_${idx} h-[0px] w-[0px]  rounded-full  `}></div>
                                        </div>
                                    )}

                                    <div className={` ${idx === 0 ? "border-[#FFFDF6]  " : "border-[#fffdf646]"} dot_border_${idx} absolute size-9 border-[2px]  bg-[#454738] top-1/2 left-0 -translate-y-1/2 center rounded-full`}>
                                        <div className={`  ${idx === 0 ? "  bg-[#FFFDF6] h-[20px] w-[20px] " : "bg-[#fffdf646] h-[0px] w-[0px]"} transition-all duration-300 inside_dot_${idx}  rounded-full  `}></div>
                                    </div>
                                </div>
                                <div className={` transition-all duration-300 content_box_${idx}  w-[70%] ${idx === 0 ? "opacity-100" : "opacity-30"} `}  >
                                    <p className='text-2xl leading-tight font-semibold'>0{idx + 1}/</p>
                                    <p className='uppercase leading-tight font-semibold text-2xl'>{item.title}</p>
                                    <p className=' font-semibold mt-5 leading-tight'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="w-[15vw] pb-24  ml-20 flex flex-col justify-center uppercase shrink-0 text-sm  ">
                            <p>our interiors are designed to be functional, timeless, and personal.</p>
                            <a href="/contact">
                                <button className=' uppercase border  mt-5 border-[#FFFDF6] text-[#FFFDF6] w-fit px-6 py-2'>let's talk</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default index