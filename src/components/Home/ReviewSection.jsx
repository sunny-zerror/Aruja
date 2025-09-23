import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const ReviewSection = () => {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 460; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse move → animate cursor position with GSAP
  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX -35,
        y: e.clientY -130,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  // Fade in cursor
  const handleMouseEnter = () => {
    setIsVisible(true);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  // Fade out cursor
  const handleMouseLeave = () => {
    setIsVisible(false);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { autoAlpha: 0, duration: 0.3, ease: "power2.in" });
    }
  };

  useEffect(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { autoAlpha: 0 }); // hide initially
    }
  }, []);

  return (
    <div>
      <div className="w-full relative px-10 py-20">
        {/* Floating drag cursor */}
        <div
          ref={cursorRef}
          className="absolute z-50 text-xs px-4 py-2 bg-[#2E2D2B] text-[#FFFDF4] uppercase  pointer-events-none"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2>
          drag
          </h2>
        </div>

        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <div className="text-4xl uppercase flex">
            <p>what our</p>
            <h2 className="mx-3 italic">client</h2>
            <p>say</p>
          </div>
          <div className="flex h-full gap-8 items-center">
            <button
              onClick={() => handleScroll("left")}
              className="size-10 center uppercase bg-[#2E2D2B] text-[#FFFDF4]"
            >
              <img src="/icons/arrow_left.svg" alt="" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="size-10 center uppercase bg-[#2E2D2B] text-[#FFFDF4]"
            >
              <img src="/icons/arrow_right.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="w-full h-[300px] scroller_none gap-5 flex mt-14">
          <div className="w-[200px] h-[300px] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/Images/HomePage/reviews/heroReview.png"
              alt=""
            />
          </div>

          {/* Scrollable reviews */}
          <div
            ref={scrollRef}
            className="w-full scroller_none relative overflow-x-scroll gap-5 flex scroll-smooth cursor-none "
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-full w-[450px] flex flex-col justify-between border border-black/50 shrink-0 px-8 py-5"
              >
                <div className="w-full flex items-center gap-3">
                  <div className="size-12 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/Images/HomePage/reviews/pic.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-3xl capitalize">Ananya Singh</p>
                    <p className="text-sm uppercase">Entrepreneur</p>
                  </div>
                </div>
                <h2 className="text-2xl leading-none capitalize">
                  “ arujaK turned our vision into reality with clarity and zero
                  delays”.
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
