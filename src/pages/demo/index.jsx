import React, { useEffect, useRef } from 'react'
import Lenis from "lenis";

const worksData = [
  {
    title: "Beyond the Frame",
    HeroImg: "/Images/HomePage/HeroImg.png",
  },
  {
    title: "Urban Calm",
    HeroImg: "/Images/HomePage/cdcs.webp",
  },
  {
    title: "The Flexible Studio",
    HeroImg: "/Images/HomePage/erec.webp",
  },
  {
    title: "Sleek Sanctuary",
    HeroImg: "/Images/HomePage/FooterImg.webp",
  },
]

const index = () => {

  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollWrapper.current || undefined,
      content: scrollContent.current || undefined,
      duration: 5,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      direction: "horizontal",
      gestureDirection: "vertical",
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
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

  return (
    <div className='w-full h-screen center'>
      <div ref={scrollWrapper} className="w-full h-full px-10 pr-10 overflow-x-auto scroller_none">
        <div
          ref={scrollContent}
          className="w-full  gap-5   flex "
        >
          {[...worksData, ...worksData].map((item, idx) => (
            <Link key={idx} href={`/work/${item.title}`}>
              <div className="shrink-0 w-[360px] h-full">
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
  )
}

export default index