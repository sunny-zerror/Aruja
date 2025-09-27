import gsap from 'gsap';
import Link from 'next/link';
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from 'react'
import Footer from '@/components/common/Footer';

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
]

const Index = () => {
  const [view, setView] = useState("horizontal");

  const verticalRef = useRef(null);
  const horizontalRef = useRef(null);

  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollWrapper.current || undefined,
      content: scrollContent.current || undefined,
      duration: 1.5,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);


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
    <div
      className="w-full pt-16 lg:pt-12  relative   flex-col justify-between">
      <div className="w-full center">
        <div className="leading-none flex gap-2 uppercase -translate-x-2 lg:-translate-x-7 text-[16.9vw] lg:text-[17.9vw]">
          <p className="text-clip-img">our</p>
          <h2 className="italic">work</h2>
        </div>
      </div>

      <div className="w-full  relative  center ">
        <div className=" text-sm lg:text-base absolute top-4 lg:top-2 z-[99] w-[60%] lg:w-[18%]">
          <p className="leading-none font-semibold">
            Every project at arujaK is crafted with flow, proportion, and
            precision. Explore some of our featured spaces:
          </p>
          <div className="flex mt-2 lg:mt-5 font-semibold gap-5">
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

      <div
        ref={horizontalRef}
        className="w-full"
        style={{ opacity: 1, display: "flex" }}
      >
        <div
          ref={scrollWrapper} className="w-full flex items-end pb-10 md:pb-[1vw] absolute h-screen z-[9] top-0 left-0 px-3 lg:px-10 pr-3 lg:pr-10 overflow-x-auto scroller_none">
          <div
            ref={scrollContent}
            className=" gap-3 lg:gap-5  flex "
          >
            {worksData.map((item, idx) => (
              <Link key={idx} href={`/work/${item.title}`}>
                <div className="shrink-0 w-[80vw] md:w-[23.25vw] lg:w-[22.8vw] h-full">
                  <p className="text-sm font-semibold mb-2 uppercase">{item.title}</p>
                  <div className="w-full h-full overflow-hidden">
                    <img
                      className="w-full h-[250px] object-cover"
                      src={item.HeroImg}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={verticalRef}
        className={`w-full mt-32 lg:mt-44 mb-10 lg:mb-24 px-3 lg:px-10 grid gap-y-5 lg:gap-y-14 gap-x-3 lg:gap-x-5 grid-cols-1 lg:grid-cols-2`}
        style={{ opacity: 1, display: "grid" }}
      >
        {worksData.map((item, idx) => (
          <Link key={idx} href={`/work/${item.title}`}>
            <div className="shrink-0 w-full aspect-[14/9] lg:aspect-video">
              <p className=" text-sm lg:text-base font-semibold mb-0.5 lg:mb-2 uppercase">{item.title}</p>
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
      {view === "vertical" && <Footer />}
    </div>
  );
};

export default Index;
