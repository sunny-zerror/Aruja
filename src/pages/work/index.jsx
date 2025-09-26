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

const Index = () => {
  const [view, setView] = useState("both");

  const verticalRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    if (view === "both") {
      gsap.to(verticalRef.current, {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
        display: "grid",
      });
      gsap.to(horizontalRef.current, {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
        display: "flex",
      });
    } else if (view === "vertical") {
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

  useEffect(() => {
    gsap.to(".text-clip-img", {
      backgroundPosition: "21% -30%",
      duration: 3,
      scrollTrigger: {
        trigger: ".text-clip-img",
        start: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full pt-12 flex-col center">
      {/* Header */}
      <div className="leading-none flex gap-3 -translate-x-5 uppercase text-[17.5vw]">
        <p className="text-clip-img">Our</p>
        <h2 className="italic">work</h2>
      </div>

      {/* Buttons */}
      <div className="w-full center mt-5">
        <div className="w-[18%]">
          <p className="leading-none font-semibold">
            Every project at arujaK is crafted with flow, proportion, and
            precision. Explore some of our featured spaces:
          </p>
          <div className="flex mt-5 font-semibold gap-5">
            <button
              onClick={() => setView("vertical")}
              className={`uppercase text-sm transition-opacity duration-300 ${
                view === "vertical" ? "underline opacity-100" : "opacity-50"
              }`}
            >
              Vertical
            </button>

            <button
              onClick={() => setView("horizontal")}
              className={`uppercase text-sm transition-opacity duration-300 ${
                view === "horizontal" ? "underline opacity-100" : "opacity-50"
              }`}
            >
              Horizontal
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll first */}
      <div
        ref={horizontalRef}
        className="w-full overflow-x-scroll scroller_none gap-5 my-28 px-10 flex h-[280px]"
        style={{ opacity: 1, display: "flex" }}
      >
        {worksData.map((item, idx) => (
          <a key={idx} href={`/work/${item.title}`}>
            <div className="shrink-0 w-[420px] h-full">
              <p className="text-sm font-semibold mb-2 uppercase">{item.title}</p>
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.HeroImg}
                  alt=""
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Vertical layout below */}
      <div
        ref={verticalRef}
        className={`w-full ${view === "both" ? "my-0 mb-28" : " my-28"} px-10 grid gap-y-14 gap-x-5 grid-cols-2`}
        style={{ opacity: 1, display: "grid" }}
      >
        {worksData.map((item, idx) => (
          <a key={idx} href={`/work/${item.title}`}>
            <div className="shrink-0 w-full aspect-video">
              <p className="font-semibold mb-2 uppercase">{item.title}</p>
              <div className="w-full h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.HeroImg}
                  alt=""
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;
