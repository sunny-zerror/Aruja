import { useRouter } from 'next/router';
import React from 'react'

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

    const router = useRouter();
    const title = router.query.id;

    const decodedTitle = decodeURIComponent(title || "");
    const work = worksData.find((item) => item.title === decodedTitle);

    if (!work) {
        return <p className="p-10">Project not found</p>;
    }

    return (
        <div>
            <div className="w-full h-[170vh] relative text-[#FFFDF4] ">
                <img className='brightness-90 w-full h-full object-cover'
                    src={work.HeroImg}
                    alt={work.title} />
                <div className="absolute w-full top-[30vw] px-10 ">
                    <p className="text-8xl font-semibold uppercase leading-none">
                        {work.title.split(" ").slice(0, 2).join(" ")}
                        <br />
                        {work.title.split(" ").slice(2).join(" ")}
                    </p>

                    <div className="w-full font-semibold mt-20 uppercase grid grid-cols-12 ">
                        <div className="w-full col-span-6">
                            <p>Grange, QLD</p>
                        </div>
                        <div className="w-full  col-span-2">
                            <p>Australia</p>
                        </div>
                        <div className="w-full flex justify-end  col-span-4">
                            <p>(scroll to explore)</p>
                        </div>
                    </div>


                    <div className="w-full grid uppercase grid-cols-12 ">

                        <div className="w-full opacity-0 col-span-6 ">
                            <p>Grange, QLD</p>
                        </div>

                        <div className=" w-full  col-span-2">
                            <div className=" space-y-10">
                                <div className=" pt-10">
                                    <p className='capitalize font-semibold'>Date Completed</p>
                                    <p className=' font-black'>2024</p>
                                </div>
                                <div className="">
                                    <p className='capitalize font-semibold'>Collaborators</p>
                                    <div className=' font-black'>
                                        <p>
                                            Porter and Co Construction
                                        </p>
                                        <p>
                                            ECRU Landscape Architecture
                                        </p>
                                        <p>
                                            Rogue Engineering
                                        </p>
                                        <p>
                                            Urbicus Town Planning
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" w-full  col-span-4">
                            <div className="space-y-10">
                                <div className="pt-10">
                                    <p className='capitalize font-semibold'>Project Type</p>
                                    <p className='font-black'>New Build</p>
                                </div>
                                <div className="">
                                    <p className='capitalize font-semibold'>Photography</p>
                                    <p className='font-black'>Andy Macpherson</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full gap-5 pt-5 px-10 mb-10 grid grid-cols-12">
                {work.images.map((item, i) => (
                    <div
                        key={i}
                        className="w-full overflow-hidden"
                        style={{
                            gridColumn: `span ${item.span} / span ${item.span}`,
                            height: item.height,
                        }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={item.img}
                            alt={`grid-img-${i}`}
                        />
                    </div>

                ))}
            </div>

        </div>
    )
}

export default index