import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ReviewSection = () => {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Move scroll by button clicks
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 460; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Custom cursor follow
  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    }

    // while dragging → update scroll
    if (isDragging.current && scrollRef.current) {
      const walk = (e.clientX - startX.current) * 1.2; // sensitivity
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
    }
    isDragging.current = false;
  };

  // Drag start
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current.scrollLeft;

    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 0.9, borderRadius:"4px", duration: 0.2, ease: "power2.out" });
    }
  };

  // Drag end
  const handleMouseUp = () => {
    isDragging.current = false;

    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 1, borderRadius:"0px", duration: 0.2, ease: "power2.out" });
    }
  };

  useEffect(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 0, scale: 1 });
    }
  }, []);

  return (
    <div>
      {/* Floating custom cursor */}
      <div
        ref={cursorRef}
        className="fixed z-[99] top-0 left-0 text-xs px-4 font-semibold py-2 bg-[#2E2D2B] text-[#FFFDF4] uppercase pointer-events-none "
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <h2>
        drag
        </h2>
      </div>

      <div className="w-full relative px-10 py-20">
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
            className="w-full scroller_none relative overflow-x-scroll gap-5 flex scroll-smooth cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
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
