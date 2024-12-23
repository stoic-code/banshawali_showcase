"use client";
import React, { use, useEffect, useRef } from "react";
import FadeIn from "../animation/FadeIn";
import FadeInText from "../animation/FadeInText";
import { motion, useInView } from "framer-motion";
import mouse3 from "@/components/lottie/mouse3.json";
import dynamic from "next/dynamic";
// import Lottie from "lottie-react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const wrapperRef = useRef<any | null>(null);
  let mousePosition = useRef({ x: 0, y: 0 });
  const dot = useRef<HTMLDivElement | null>();

  const inView = useInView(wrapperRef, { once: true });

  useEffect(() => {
    const circle = wrapperRef.current.querySelector(".circle");

    dot.current = circle;
  }, []);
  function handleMouseEnter(e: any) {
    let devContainer = wrapperRef?.current.getBoundingClientRect();

    mousePosition.current.x = e.clientX - devContainer.left;
    mousePosition.current.y = e.clientY - devContainer.top; // to make the circle just below the cursor

    animateCircle();
    // applyGlowEffect();
  }
  function animateCircle() {
    const { x, y } = mousePosition.current;
    // console.log("x", x);
    // console.log("y", y);
    // console.log("dot k xa", dot);
    if (dot.current) {
      dot.current.style.left = `${x - 40}px`;
      dot.current.style.top = `${y - 50}px`;
    }
  }

  return (
    <div className=" h-[90vh] sm:min-h-screen relative">
      <div className=" flex items-center flex-col  justify-center pt-28 ">
        {/* wrapper */}

        <div
          onMouseMove={(e) => handleMouseEnter(e)}
          ref={wrapperRef}
          className="text-wrapper relative  text-[1.2rem] sm:text-4xl md:text-5xl space-y-2 sm:space-y-6 text-center bg-gradient-to-t from-slate-900 via-white via-35% to-slate-900 bg-clip-text"
        >
          <div
            style={{
              background: "radial-gradient(circle, white 40%, gray 80%)",
              filter: "blur(15px)",
            }}
            className="circle absolute z-0 h-28 w-28    blur-sm  rounded-full mix-blend-overlay pointer-events-none"
          ></div>

          <div className=" flex gap-4 justify-center  ">
            <FadeInText delay={0.2}>
              <h2 className=" glow-text    text-transparent font-bold tracking-wide">
                WELCOME
              </h2>
            </FadeInText>
            <FadeInText delay={0.3}>
              <motion.h2 className=" glow-text  text-transparent  font-bold tracking-wide">
                TO
              </motion.h2>
            </FadeInText>
            <FadeInText delay={0.4}>
              <h2 className="   bg-clip-text  glow-text text-transparent font-bold tracking-wide">
                NEPAL&apos;S
              </h2>
            </FadeInText>
            <FadeInText delay={0.5}>
              <h2 className="   bg-clip-text  glow-text text-transparent  font-bold tracking-wide">
                FIRST
              </h2>
            </FadeInText>
          </div>
          <div className=" flex gap-4 justify-center">
            <FadeInText delay={0.6}>
              <h2 className="   bg-clip-text glow-text  text-transparent font-bold tracking-wide">
                ADVANCE
              </h2>
            </FadeInText>
            <FadeInText delay={0.7}>
              <h2 className="   bg-clip-text glow-text  text-transparent  font-bold tracking-wide">
                DIGITAL
              </h2>
            </FadeInText>
            <FadeInText delay={0.8}>
              <h2 className="   bg-clip-text glow-text  text-transparent  font-bold tracking-wide">
                BANSHAWALI
              </h2>
            </FadeInText>
          </div>
        </div>
      </div>
      {/* SCROLL TO START JOURNEY */}
      <div className=" absolute bottom-4 sm:bottom-8 left-[50%] -translate-x-[50%] text-white flex flex-col gap-2">
        <div className=" flex flex-col gap-1 items-center">
          <h2 className=" text-nowrap tracking-wide text-xs sm:text-sm">
            SCROLL TO START YOUR JOURNEY
          </h2>
          <Lottie animationData={mouse3} className="w-20  rounded-full h-20" />
        </div>
      </div>
    </div>
  );
}
