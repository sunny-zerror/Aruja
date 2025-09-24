import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const ParallaxImgScroll = () => {

    useEffect(() => {

        gsap.fromTo(".parallex_img", {
            y: -100,
        },{
            y: 100,
            duration: 4,
            ease:"linear",
            scrollTrigger: {
                trigger: ".static_image_parent",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        })

    }, [])
    
  return (
    <div>
        <div className=" static_image_parent w-full h-[120vh] overflow-hidden relative center">
            <img className=' parallex_img  w-full h-full object-cover' src="/HomePage/Static image.png" alt="" />
        </div>
    </div>
  )
}

export default ParallaxImgScroll