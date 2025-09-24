import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'


const worksData = [
    {
        title: "Beyond the Frame",
        HeroImg: "/Images/HomePage/HeroImg.png",
        images: [
            { span: 6, height: "50vw", img: "/Images/HomePage/cdcs.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/HeroImg.png" },
            { span: 12, height: "100vh", img: "/Images/HomePage/FooterImg.webp" },
            { span: 12, height: "100vh", img: "/Images/HomePage/erec.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/wmdsc.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "Urban Calm",
        HeroImg: "/Images/HomePage/cdcs.webp",
        images: [
            { span: 6, height: "50vw", img: "/Images/HomePage/cdcs.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/HeroImg.png" },
            { span: 12, height: "100vh", img: "/Images/HomePage/FooterImg.webp" },
            { span: 12, height: "100vh", img: "/Images/HomePage/erec.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/wmdsc.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "The Flexible Studio",
        HeroImg: "/Images/HomePage/erec.webp",
        images: [
            { span: 6, height: "50vw", img: "/Images/HomePage/cdcs.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/HeroImg.png" },
            { span: 12, height: "100vh", img: "/Images/HomePage/FooterImg.webp" },
            { span: 12, height: "100vh", img: "/Images/HomePage/erec.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/wmdsc.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "Sleek Sanctuary",
        HeroImg: "/Images/HomePage/FooterImg.webp",
        images: [
            { span: 6, height: "50vw", img: "/Images/HomePage/cdcs.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/HeroImg.png" },
            { span: 12, height: "100vh", img: "/Images/HomePage/FooterImg.webp" },
            { span: 12, height: "100vh", img: "/Images/HomePage/erec.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/wmdsc.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "Heritage Reimagined",
        HeroImg: "/Images/HomePage/wmdsc.webp",
        images: [
            { span: 6, height: "50vw", img: "/Images/HomePage/cdcs.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/HeroImg.png" },
            { span: 12, height: "100vh", img: "/Images/HomePage/FooterImg.webp" },
            { span: 12, height: "100vh", img: "/Images/HomePage/erec.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/wmdsc.webp" },
            { span: 6, height: "50vw", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },

]

const index = () => {
    const [view, setView] = useState("vertical");

    const verticalRef = useRef(null);
    const horizontalRef = useRef(null);

    useEffect(() => {
        if (view === "vertical") {
            gsap.to(verticalRef.current, {
                autoAlpha: 1,
                duration: 0.6,
                ease: "power2.out",
                display: "grid",
            });
            gsap.to(horizontalRef.current, {
                autoAlpha: 0,
                duration: 0.6,
                ease: "power2.out",
                display: "none",
            });
        } else {
            gsap.to(horizontalRef.current, {
                autoAlpha: 1,
                duration: 0.6,
                ease: "power2.out",
                display: "flex",
            });
            gsap.to(verticalRef.current, {
                autoAlpha: 0,
                duration: 0.6,
                ease: "power2.out",
                display: "none",
            });
        }
    }, [view]);

    return (
        <div className="w-full pt-20 flex-col center">
            {/* Title */}
            <div className="leading-none flex gap-3 -translate-x-5 uppercase text-[17.5vw]">
                <p>Our</p>
                <h2 className="italic">work</h2>
            </div>

            {/* Toggle buttons */}
            <div className="w-full center mt-5">
                <div className="w-[18%]">
                    <p className="leading-none font-semibold">
                        Every project at arujaK is crafted with flow, proportion, and
                        precision. Explore some of our featured spaces:
                    </p>
                    <div className="flex mt-5 font-semibold gap-5">
                        <button
                            onClick={() => setView("vertical")}
                            className={`uppercase text-sm transition-opacity duration-300 ${view === "vertical" ? "underline opacity-100" : "opacity-50"
                                }`}
                        >
                            Vertical
                        </button>

                        <button
                            onClick={() => setView("horizontal")}
                            className={`uppercase text-sm transition-opacity duration-300 ${view === "horizontal" ? "underline opacity-100" : "opacity-50"
                                }`}
                        >
                            Horizontal
                        </button>

                    </div>
                </div>
            </div>

            {/* Vertical grid */}
            <div
                ref={verticalRef}
                className="w-full my-20 px-10 grid gap-y-14 gap-x-5 grid-cols-2"
            >
                {worksData.map((item, idx) => (
                    <Link key={idx} href={`/work/${item.title}`} >
                        <div key={idx} className="shrink-0 w-full aspect-video">
                            <p className=" font-semibold mb-2 uppercase">{item.title}</p>
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.HeroImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Horizontal scroll */}
            <div
                ref={horizontalRef}
                className="w-full overflow-x-scroll scroller_none gap-5 my-20 px-10 flex h-[280px]"
                style={{ opacity: 0, display: "none" }}
            >
                {worksData.map((item, idx) => (
                    <Link key={idx} href={`/work/${item.title}`} >
                    <div key={idx} className="shrink-0 w-[420px] h-full">
                        <p className="text-sm font-semibold mb-2 uppercase">{item.title}</p>
                        <div className="w-full h-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={item.HeroImg}
                                alt=""
                            />
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default index