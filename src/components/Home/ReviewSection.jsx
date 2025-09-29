import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(ScrollToPlugin, Draggable);

const ReviewSection = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const handleScroll = (direction) => {
    if (window.innerWidth < 1024) {
      if (scrollRef2.current) {
        const scrollAmount = 300;
        const targetX =
          scrollRef2.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount);

        gsap.to(scrollRef2.current, {
          scrollTo: { x: targetX },
          duration: 1.5,
          ease: "power3.out",
        });
      }
    } else {
      if (scrollRef.current) {
        const scrollAmount = 470;
        const targetX =
          scrollRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount);

        gsap.to(scrollRef.current, {
          scrollTo: { x: targetX },
          duration: 1.5,
          ease: "power3.out",
        });
      }
    }
  };

  return (
    <div>
      <div className="w-full relative px-3 lg:px-10 py-16 lg:py-28">
        {/* Header */}
        <div className="w-full flex  lg:items-center justify-between">
          <div className=" text-2xl lg:text-4xl uppercase flex">
            <p className="whitespace-nowrap">what our</p>
            <h2 className=" mx-2 lg:mx-3 italic">client</h2>
            <p>say</p>
          </div>
          <div className=" w-full flex h-full  gap-2  lg:gap-5 justify-end lg:items-center">
            <button
              onClick={() => handleScroll("left")}
              className=" size-8 lg:size-10 center uppercase bg-[#2E2D2B] text-[#FFFDF4]"
            >
              <img src="/icons/arrow_left.svg" alt="loading" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className=" size-8 lg:size-10 center uppercase bg-[#2E2D2B] text-[#FFFDF4]"
            >
              <img src="/icons/arrow_right.svg" alt="loading" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          ref={scrollRef2}
          className="w-full h-[200px] lg:h-[300px] lg:hidden overflow-x-scroll lg:overscroll-none scroller_none gap-5 flex mt-10 lg:mt-14"
        >
          <div className=" w-[150px] lg:w-[220px] h-[200px] lg:h-[300px] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/Images/HomePage/reviews/heroReview.png"
              alt="loading"
            />
          </div>

          {/* Scrollable reviews */}
          <div
            ref={scrollRef}
            className="scroller_none  relative flex gap-5 shrink-0"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-full w-[300px] lg:w-[450px] flex flex-col justify-between border border-black/50 shrink-0 px-5 lg:px-8 py-3 lg:py-5"
              >
                <div className="w-full flex items-center gap-3">
                  <div className="size-12 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/Images/HomePage/reviews/pic.png"
                      alt="loading"
                    />
                  </div>
                  <div>
                    <p className=" text-2xl lg:text-3xl capitalize">Ananya Singh</p>
                    <p className=" text-xs lg:text-sm uppercase">Entrepreneur</p>
                  </div>
                </div>
                <h2 className=" text-lg lg:text-2xl leading-none capitalize">
                  “arujaK turned our vision into reality with clarity and zero
                  delays”.
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full hidden h-[200px] lg:h-[300px] overflow-x-scroll lg:overscroll-none scroller_none gap-5 lg:flex mt-10 lg:mt-14">
          <div className=" w-[150px] lg:w-[220px] h-[200px] lg:h-[300px] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/Images/HomePage/reviews/heroReview.png"
              alt="loading"
            />
          </div>

          {/* Scrollable reviews */}
          <div
            ref={scrollRef}
            className="w-full scroller_none relative lg:overflow-x-scroll gap-5 flex"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-full w-[300px] lg:w-[450px] flex flex-col justify-between border border-black/50 shrink-0 px-5 lg:px-8 py-3 lg:py-5"
              >
                <div className="w-full flex items-center gap-3">
                  <div className="size-12 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/Images/HomePage/reviews/pic.png"
                      alt="loading"
                    />
                  </div>
                  <div>
                    <p className=" text-2xl lg:text-3xl capitalize">Ananya Singh</p>
                    <p className=" text-xs lg:text-sm uppercase">Entrepreneur</p>
                  </div>
                </div>
                <h2 className=" text-lg lg:text-2xl leading-none capitalize">
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
