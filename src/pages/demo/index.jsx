import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const InfiniteHorizontalScroll = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.2,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smooth: true,
      infinite: false,
    });

    const cloneCount = 3;
    const originalChildren = Array.from(content.children);
    for (let i = 0; i < cloneCount - 1; i++) {
      originalChildren.forEach((child) => {
        const clone = child.cloneNode(true);
        content.appendChild(clone);
      });
    }

    const totalWidth = content.scrollWidth / cloneCount;

    const raf = (time) => {
      lenis.raf(time);
      const scrollLeft = lenis.scroll;
      if (scrollLeft >= totalWidth) {
        lenis.scrollTo(scrollLeft - totalWidth, { immediate: true });
      } else if (scrollLeft <= 0) {
        lenis.scrollTo(scrollLeft + totalWidth, { immediate: true });
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden h-screen flex items-center relative w-full"
    >
      <div ref={contentRef} className="flex gap-5">
        {[...items , ...items , ...items].map((item) => (
          <div
            key={item}
            className="w-[25vw] h-[250px] shrink-0 border border-black flex items-center justify-center text-xl font-medium"
          >
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
