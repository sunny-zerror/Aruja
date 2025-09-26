import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(ScrollToPlugin, Draggable);

const ReviewSection = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 470; // card width + gap
      const targetX =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      gsap.to(scrollRef.current, {
        scrollTo: { x: targetX },
        duration: 1.5,
      ease: "power3.out",
      });
    }
  };

  return (
    <div>
      <div className="w-full relative px-10 py-28">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <div className="text-4xl uppercase flex">
            <p>what our</p>
            <h2 className="mx-3 italic">client</h2>
            <p>say</p>
          </div>
          <div className="flex h-full gap-5 items-center">
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
          <div className="w-[220px] h-[300px] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/Images/HomePage/reviews/heroReview.png"
              alt=""
            />
          </div>

          {/* Scrollable reviews */}
          <div
            ref={scrollRef}
            className="w-full scroller_none relative overflow-x-scroll gap-5 flex"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
                  “arujaK turned our vision into reality with clarity and zero
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
