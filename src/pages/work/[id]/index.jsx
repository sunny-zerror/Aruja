import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Footer from '@/components/common/Footer';
import { usePageReady } from '@/components/hooks/usePageReady';
gsap.registerPlugin(ScrollTrigger);

const worksData = [
    {
        title: "Beyond the Frame",
        HeroImg: "/Images/HomePage/HeroImg.png",
        images: [
            { type: "landscape", img: "/Images/HomePage/cdcs.webp" },
            { type: "landscape", img: "/Images/HomePage/HeroImg.png" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "Urban Calm",
        HeroImg: "/Images/HomePage/cdcs.webp",
        images: [
            { type: "landscape", img: "/Images/HomePage/cdcs.webp" },
            { type: "landscape", img: "/Images/HomePage/HeroImg.png" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "The Flexible Studio",
        HeroImg: "/Images/HomePage/erec.webp",
        images: [
            { type: "landscape", img: "/Images/HomePage/cdcs.webp" },
            { type: "landscape", img: "/Images/HomePage/HeroImg.png" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "Sleek Sanctuary",
        HeroImg: "/Images/HomePage/FooterImg.webp",
        images: [
            { type: "landscape", img: "/Images/HomePage/cdcs.webp" },
            { type: "landscape", img: "/Images/HomePage/HeroImg.png" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
    {
        title: "Heritage Reimagined",
        HeroImg: "/Images/HomePage/wmdsc.webp",
        images: [
            { type: "landscape", img: "/Images/HomePage/cdcs.webp" },
            { type: "landscape", img: "/Images/HomePage/HeroImg.png" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/FooterImg.webp" },
            { type: "portrait", img: "/Images/HomePage/erec.webp" },
            { type: "landscape", img: "/Images/HomePage/wmdsc.webp" },
            { type: "landscape", img: "/Images/HomePage/FooterImg.webp" },
        ],
    },
];


const index = () => {

    const router = useRouter();
    const title = router.query.id;

    const decodedTitle = decodeURIComponent(title || "");
    const work = worksData.find((item) => item.title === decodedTitle);



    useEffect(() => {

        gsap.to(".paex_img", {
            y: 500,
            duration: 4,
            ease: "linear",
            scrollTrigger: {
                trigger: ".stic_image_pent",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        })

    }, [work])

    usePageReady(() => {
        gsap.to(".id_anim_txt", {
            transform: "translateY(0%)",
            stagger: 0.05,
            ease: "ease-secondary",
            duration: 2,
        });
    });

    return (
        <div>
            <div className="  w-full h-[100vh] lg:h-[170vh] relative text-[#FFFDF4] ">
                <div className=" stic_image_pent w-full h-full overflow-hidden center">
                    <img className=' paex_img brightness-90 w-full h-full object-cover'
                        src={work?.HeroImg}
                        alt={work?.title} />
                </div>
                <div className="absolute w-full bottom-20 lg:top-[30vw] px-3 lg:px-10 ">
                    <div className=" id_anim_txt   translate-y-[105%] block overflow-hidden text-5xl  lg:text-8xl font-semibold uppercase leading-none">
                        <p className='id_anim_txt   translate-y-[105%]'  >
                            {work?.title.split(" ").slice(0, 2).join(" ")}
                        </p>
                    </div>
                    <div className="  block overflow-hidden text-5xl  lg:text-8xl font-semibold uppercase leading-none">
                        <p className='id_anim_txt   translate-y-[105%]'  >
                            {work?.title.split(" ").slice(2).join(" ")}
                        </p>
                    </div>

                    <div className="w-full text-xs md:text-base font-semibold mt-10 lg:mt-20 uppercase flex items-center justify-between md:grid md:grid-cols-12 ">
                        <div className="w-full  block overflow-hidden md:col-span-6">
                            <p className='id_anim_txt   translate-y-[105%]' >Grange, QLD</p>
                        </div>
                        <div className="w-full  block overflow-hidden  md:col-span-2">
                            <p className='id_anim_txt   translate-y-[105%]' >Australia</p>
                        </div>
                        <div className="w-full  overflow-hidden flex justify-end whitespace-nowrap  md:col-span-4">
                            <p className='id_anim_txt   translate-y-[105%]' >(scroll to explore)</p>
                        </div>
                    </div>


                    <div className="w-full text-xs md:text-base grid uppercase grid-cols-4 md:grid-cols-12 ">

                        <div className="w-full overflow-hidden opacity-0 hidden lg:block  lg:col-span-6 ">
                            <p className='id_anim_txt   translate-y-[105%]' >Grange, QLD</p>
                        </div>

                        <div className=" w-full  col-span-2 md:col-span-6 lg:col-span-2">
                            <div className="  space-y-5  lg:space-y-10">
                                <div className=" pt-10">
                                    <div className=' block overflow-hidden capitalize font-semibold'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Date Completed
                                        </p>
                                    </div>
                                    <div className=' block overflow-hidden capitalize font-black'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            2024
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=' block overflow-hidden  capitalize font-semibold'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Collaborators
                                        </p>
                                    </div>
                                    <div className=' font-black'>
                                        <div className=' block overflow-hidden  '>
                                            <p className='id_anim_txt  translate-y-[105%]'>
                                                Porter and Co Construction
                                            </p>
                                        </div>
                                        <div className=' block overflow-hidden  '>
                                            <p className='id_anim_txt  translate-y-[105%]'>
                                                ECRU Landscape Architecture
                                            </p>
                                        </div>
                                        <div className=' block overflow-hidden  '>
                                            <p className='id_anim_txt  translate-y-[105%]'>
                                                Rogue Engineering
                                            </p>
                                        </div>
                                        <div className=' block overflow-hidden  '>
                                            <p className='id_anim_txt  translate-y-[105%]'>
                                                Urbicus Town Planning
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" w-full  col-span-2 lg:col-span-4">
                            <div className=" space-y-5  lg:space-y-10">
                                <div className="pt-10">
                                    <div className=' block overflow-hidden capitalize font-semibold'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Project Type
                                        </p>
                                    </div>
                                    <div className=' block overflow-hidden font-black'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            New Build
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=' block overflow-hidden capitalize font-semibold'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Photography
                                        </p>
                                    </div>
                                    <div className=' block overflow-hidden font-black'>
                                        <p className='id_anim_txt  translate-y-[105%]'>
                                            Andy Macpherson
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full gap-3 lg:gap-5 pt-3 lg:pt-5 px-3 lg:px-10 mb-10 lg:mb-20 grid grid-cols-12">
                {work?.images.map((item, i) => {
                    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

                    let height = "auto";
                    let gridColumn = "span 12 / span 12";

                    if (isMobile) {
                        if (item.type === "portrait") {
                            height = "70vh";
                            gridColumn = "span 12 / span 12";
                        } else {
                            height = "30vh";
                            gridColumn = "span 12 / span 12";
                        }
                    } else {
                        if (item.type === "portrait") {
                            height = "100vh";
                            gridColumn = "span 6 / span 6";
                        } else {
                            height = "100vh";
                            gridColumn = "span 12 / span 12";
                        }
                    }

                    return (
                        <div
                            key={i}
                            className="w-full overflow-hidden"
                            style={{
                                gridColumn,
                                height,
                            }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={item.img}
                                alt={`grid-img-${i}`}
                            />
                        </div>
                    );
                })}
            </div>


            <Footer />

        </div>
    )
}

export default index