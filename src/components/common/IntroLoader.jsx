import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(CustomEase);

const IntroLoader = () => {
    const [count, setCount] = useState(0);
    CustomEase.create("in-out-quint", "0.83,0,0.17,1");

    useEffect(() => {
        let current = 0;
        const duration = 1700;
        const minJump = 1;
        const maxJump = 2;

        const minSteps = Math.ceil(100 / maxJump);
        const maxSteps = Math.floor(100 / minJump);
        const steps = Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps;

        const intervalTime = duration / steps;

        const jumps = new Array(steps).fill(minJump);
        let remaining = 100 - minJump * steps;

        for (let i = 0; i < steps && remaining > 0; i++) {
            const extra = Math.min(maxJump - minJump, remaining);
            const add = Math.floor(Math.random() * (extra + 1));
            jumps[i] += add;
            remaining -= add;
        }

        if (remaining > 0) jumps[steps - 1] += remaining;

        let index = 0;
        const interval = setInterval(() => {
            current += jumps[index];
            setCount(current);
            index++;

            if (index >= jumps.length) {
                clearInterval(interval);
                setCount(100);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {

        gsap.to(".loader_div", {
            top: "15%",
            duration: 1.2,
            delay: 0.5,
            ease: "in-out-quint",
            onComplete: () => {
                gsap.to(".loader_div", {
                    opacity: 0,
                    duration: .5,
                    delay: 2,
                });
            }
        });
        gsap.to(".loader_parent", {
            backgroundColor: "transparent",
            duration: 0,
            delay: 2.3,
            ease: "in-out-quint",
        });
        gsap.to(".left_txt", {
            left: "93%",
            duration: 1.2,
            delay: 1.7,
            ease: "in-out-quint",
        });
        gsap.to(".right_txt", {
            right: "91.5%",
            duration: 1.2,
            delay: 1.7,
            ease: "in-out-quint",
        });

        gsap.set(".center_txt , .left_txt , .right_txt", {
            display: "none",
            delay: 2.25,
            ease: "in-out-quint",
        });

    }, [])



    return (
        <div>
            <div className=" loader_parent pointer-events-none w-full h-screen fixed top-0 left-0 bg-black z-[99]">


                <div className="loader_div uppercase text-white text-xs font-semibold absolute left-1 top-[40%] -translate-y-1/2 leading-none">
                    <p>{count} percent</p>
                    <p>Loaded experience</p>
                </div>

                <p className='  left_txt text-sm font-semibold  uppercase absolute top-1/2 left-1 -translate-y-1/2  text-white'>Looking for</p>
                <p className=' right_txt  text-sm font-semibold  uppercase absolute top-1/2 right-1 -translate-y-1/2  text-white'>new emotions ?</p>

                <p className='center_txt text-4xl font-light    tracking-[1.2vw] uppercase absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white'>Aruja</p>

            </div>
        </div>
    )
}

export default IntroLoader