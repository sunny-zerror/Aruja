import gsap from 'gsap';
import Link from 'next/link';
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from 'react'
import Footer from '@/components/common/Footer';
import { usePageReady } from '@/components/hooks/usePageReady';
import SplitText from 'gsap/dist/SplitText';
import useNavigation from '@/store/useNavigation';
import { useRouter } from 'next/router';
gsap.registerPlugin(SplitText);

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
  const router = useRouter();
  const { navigate } = useNavigation();
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
        duration: 0,
        ease: "power2.out",
        display: "none",
      });
      const clips = document.querySelectorAll(".ver_clip_div");
      const texts = document.querySelectorAll(".ver_wrk_anim_txt_title");

      gsap.set(clips, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      gsap.set(texts, { yPercent: 105 });

      gsap.to(clips, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out",
        duration: 0.8,
        stagger: 0.05,
      });

      gsap.to(texts, {
        yPercent: 0,
        ease: "power4.out",
        duration: 0.8,
        stagger: 0.05,
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
        duration: 0,
        ease: "power2.out",
        display: "none",
      });
      const clips = document.querySelectorAll(".hori_clip_div");
      const texts = document.querySelectorAll(".hori_wrk_anim_txt_title");

      gsap.set(clips, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
      gsap.set(texts, { yPercent: 105 });

      gsap.to(clips, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out",
        duration: 0.8,
        stagger: 0.05,
      });

      gsap.to(texts, {
        yPercent: 0,
        ease: "power4.out",
        duration: 0.8,
        stagger: 0.05,
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

  usePageReady(() => {

    gsap.to(".para_anim", {
      opacity: 1,
      ease: "ease-secondary",
      delay: 1,
      duration: 2,
    });
    gsap.to(".wrk_anim_txt", {
      transform: "translateY(0%)",
      stagger: 0.05,
      ease: "ease-secondary",
      duration: 2,
    });
    gsap.to(".clip_div", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "ease-secondary",
      duration: 1.5,
      stagger: 0.1,
    })
  });



  return (
    <div
      className="w-full pt-16 lg:pt-12  relative   flex-col justify-between">
      <div className="w-full center">
        <div className="leading-none overflow-hidden flex gap-2 uppercase translate-x-1  pr-4 lg:pr-12 text-[16.9vw] lg:text-[17.9vw]">
          <p className="wrk_anim_txt translate-y-[105%] ">our</p>
          <h2 className="wrk_anim_txt translate-y-[105%]  italic">work</h2>
        </div>
      </div>

      <div className="w-full  relative  center ">
        <div className=" text-sm lg:text-base absolute top-4 lg:top-2 z-[99] w-[60%] lg:w-[18%]">
          <div className="leading-none font-semibold">
            <div className="block overflow-hidden">
              <p className='wrk_anim_txt translate-y-[105%]'   >Every project at arujaK is crafted with</p>
            </div>
            <div className="block overflow-hidden">
              <p className='wrk_anim_txt translate-y-[105%]'   >flow, proportion, and precision. </p>
            </div>
            <div className="block overflow-hidden">
              <p className='wrk_anim_txt translate-y-[105%]'   >Explore some of our featured spaces:</p>
            </div>
          </div>
          <div className="flex mt-2 lg:mt-3 font-semibold gap-5">
            <button
              onClick={() => setView("vertical")}
              className={`  block overflow-hidden  uppercase text-sm transition-opacity duration-300 ${view === "vertical" ? "underline opacity-100" : "opacity-50"
                }`}
            >
              <p className='wrk_anim_txt translate-y-[105%] '>
                Vertical
              </p>
            </button>

            <button
              onClick={() => setView("horizontal")}
              className={`  block overflow-hidden  uppercase text-sm transition-opacity duration-300 ${view === "horizontal" ? "underline opacity-100" : "opacity-50"
                }`}
            >
              <p className='wrk_anim_txt translate-y-[105%] '>
                Horizontal
              </p>
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
              <div
                key={idx}
                onClick={() => navigate(router, `/work/${item.title}`)}
                className="shrink-0 cursor-pointer w-[80vw] md:w-[23.25vw] lg:w-[22.8vw] h-full">
                <div className="text-sm font-semibold block overflow-hidden mb-2 uppercase">
                  <p className='wrk_anim_txt hori_wrk_anim_txt_title translate-y-[105%] '>
                    {item.title}
                  </p>
                </div>
                <div
                  style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
                  className=" hori_clip_div clip_div w-full h-full overflow-hidden">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={item.HeroImg}
                    alt="loading"
                  />
                </div>
              </div>
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
          <div
            key={idx}
            onClick={() => navigate(router, `/work/${item.title}`)}
            className="shrink-0 cursor-pointer w-full aspect-[14/9] lg:aspect-video">
            <div className=" block overflow-hidden text-sm lg:text-base font-semibold mb-0.5 lg:mb-2 uppercase">
              <p className='wrk_anim_txt ver_wrk_anim_txt_title translate-y-[105%] '>
                {item.title}
              </p>
            </div>
            <div
              style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", }}
              className=" ver_clip_div clip_div w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.HeroImg}
                alt="loading"
              />
            </div>
          </div>
        ))}
      </div>
      {view === "vertical" && <Footer />}
    </div>
  );
};

export default Index;
