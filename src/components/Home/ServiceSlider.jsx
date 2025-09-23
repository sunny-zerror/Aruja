import React, { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, CustomEase);

const slides = [
    {
        id: 1,
        title: "Residential Interior",
        desc: "End-to-end spatial design and structural planning that shape how people live and work.",
        img: "/images/HomePage/service slider/img1.jpg",
    },
    {
        id: 2,
        title: "Commercial Interiors",
        desc: "End-to-end spatial design and structural planning that shape how people live and work.",
        img: "/images/HomePage/service slider/img2.jpg",
    },
    {
        id: 3,
        title: "Space Planning",
        desc: "End-to-end spatial design and structural planning that shape how people live and work.",
        img: "/images/HomePage/service slider/img3.jpg",
    },
    {
        id: 4,
        title: "Styling",
        desc: "End-to-end spatial design and structural planning that shape how people live and work.",
        img: "/images/HomePage/service slider/img4.jpg",
    },
];

const ServiceSlider = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".serv_slider_paren",
                start: "top top",
                end: "+=3000",
                scrub: true,
                pin: true,
                markers: true,
            },
        });

        slides.slice(0, slides.length - 1).forEach((_, index) => {
            const className = `.serv_slide_${index + 1}`;
            tl.fromTo(
                className,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    ease: "linear",
                }
            );
        });
    }, []);

    return (
        <div className="w-full mt-20 text-[#FFFDF6]">
            <div className="serv_slider_paren w-full h-screen center relative">

                {slides.map((slide, idx) => (
                    <img key={slide.id} className={`serv_slide_${idx + 1} w-full h-full absolute object-cover top-0 left-0 z-[${5 - idx}]`} src={slide.img} alt="" />
                ))}

                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        className={`serv_slide_${idx + 1} absolute w-[90%] h-[85%] bg-[#454738] p-8 z-[${15 - idx}]`}
                    >
                        {/* Top Content */}
                        <div className="w-full h-[40%] pb-5 flex flex-col justify-between">
                            <div className="flex justify-between">
                                <div className="flex gap-2 uppercase text-4xl">
                                    <p>Our</p>
                                    <h2 className="italic">Services</h2>
                                </div>
                                <div className="flex gap-2 items-end">
                                    <p className="text-7xl">
                                        {String(slide.id).padStart(2, "0")}/
                                    </p>
                                    <p className="text-5xl opacity-50">
                                        {String(slides.length).padStart(2, "0")}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-5xl uppercase">{slide.title}</p>
                                <div className="w-[30%] leading-none">
                                    <p>{slide.desc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="h-[60%] w-full">
                            <img
                                className="w-full h-full object-cover"
                                src={slide.img}
                                alt={slide.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSlider;
