import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase);

const StaticImage = () => {

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".show_reel_paren",
                start: "top top",
                end: "+=1500",
                scrub: true,
                pin: true,
                // markers: true
            }
        })
        gsap.fromTo(".show_reel_1", {
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
        }, {
            scrollTrigger: {
                trigger: ".show_reel_paren",
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers: true
            },
            scale: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 3,
            ease: "linear",
        })
        tl.fromTo(".show_reel_2", {
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
            y: 600
        }, {
            scale: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 3,
            ease: "linear",
        }, "pp")
        tl.to(".det_1", {
            y: -200,
            opacity: 0,
            duration: 3,
            ease: "linear",
        }, "pp")
        tl.to(".vid_1", {
            filter: "brightness(0.2)",
            duration: 3,
            ease: "linear",
        }, "pp")
        tl.fromTo(".show_reel_3", {
            clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
            y: 600
        }, {
            scale: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 3,
            ease: "linear",
        }, "pp2")
        tl.to(".det_2", {
            y: -200,
            opacity: 0,
            duration: 3,
            ease: "linear",
        }, "pp2")
         tl.to(".vid_2", {
            filter: "brightness(0.2)",
            duration: 3,
            ease: "linear",
        }, "pp2")


    }, [])


    return (
        <div>
            <div className=" show_reel_paren w-full h-screen center ">
                <div
                    style={{ clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)" }}
                    className="show_reel_1 absolute z-[1]  w-full h-screen scale-[.3]   center text-white">
                    <video className='vid_1 w-full brightness-75 h-full object-cover' loop autoPlay muted playsInline src="https://player.vimeo.com/progressive_redirect/playback/1068143296/rendition/1080p/file.mp4?loc=external&log_user=0&signature=45361f1c168c38505d5268bc534b24c38799b90f005a0dcf990cb1d69f610d7a"></video>
                    <div className=" det_1 absolute flex gap-10  top-10 ">
                        <h2> 1 </h2>
                        <h2> /</h2>
                        <h2>3</h2>
                    </div>
                    <div className=" det_1 absolute w-full flex items-center justify-between px-10">
                        <p className='capitalize'>Big blue</p>
                        <h2 className=' text-7xl uppercase '>Wild Blueberry</h2>
                        <p className='capitalize'>Corporate film</p>
                    </div>
                </div>
                <div
                    style={{ clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)" }}
                    className=" show_reel_2 absolute z-[2] w-full h-full scale-[.3]  center text-white">
                    <video className=' vid_2 w-full brightness-75 h-full object-cover' loop autoPlay muted playsInline src="https://player.vimeo.com/progressive_redirect/playback/1068143135/rendition/1080p/file.mp4?loc=external&log_user=0&signature=abdc701b62153e9c8dbb6b85bb14d8923c40ce6ae5be190bc090f62abc6e6d9b"></video>
                    <div className=" det_2 absolute flex gap-10  top-10 ">
                        <h2> 2 </h2>
                        <h2> /</h2>
                        <h2>3</h2>
                    </div>
                    <div className=" det_2 absolute w-full flex items-center justify-between px-10">
                        <p className='capitalize'>Pool club</p>
                        <h2 className=' text-7xl uppercase '>the best of summer</h2>
                        <p className='capitalize'>advertisement</p>
                    </div>
                </div>
                <div
                    style={{ clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)" }}
                    className=" show_reel_3 absolute z-[3] w-full h-full scale-[.3]  center text-white">
                    <video className='w-full brightness-75 h-full object-cover' loop autoPlay muted playsInline src="https://player.vimeo.com/progressive_redirect/playback/1068143296/rendition/1080p/file.mp4?loc=external&log_user=0&signature=45361f1c168c38505d5268bc534b24c38799b90f005a0dcf990cb1d69f610d7a"></video>
                    <div className="absolute flex gap-10  top-10 ">
                        <h2> 3 </h2>
                        <h2> /</h2>
                        <h2>3</h2>
                    </div>
                    <div className=" absolute w-full flex items-center justify-between px-10">
                        <p className='capitalize'>Genome Quebec</p>
                        <h2 className=' text-7xl uppercase '>Genomics</h2>
                        <p className='capitalize'>Corporate film</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticImage