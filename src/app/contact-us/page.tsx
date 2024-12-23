"use client";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PopUp from "@/components/animation/PopUp";
gsap.registerPlugin(ScrollTrigger);
export default function page() {
  const bgRef = useRef(null);
  const imgRef = useRef(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 400 });
  const isMediumSmallScreen = useMediaQuery({ maxWidth: 767, minWidth: 400 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      let ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        // ScrollTrigger for background
        ScrollTrigger.create({
          trigger: bgRef.current,
          start: "50% 50%",
          endTrigger: ".last",
          end: "bottom top",
          // markers: true,
        });

        // Timeline for image movement
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imgRef.current,
            scrub: 1,
            start: "80% 40%", //img is animated when 80% of bg is moved //when bg 80% reaches 20% from top of viewport
            end: "130% 10%",
          },
        });

        // Adjustments for mobile screens

        // When screen width is less than 768px (mobile screens)
        mm.add("(max-width:400px)", () => {
          tl.to(imgRef.current, { y: "220%", x: "-0%" }, 0);
        });
        mm.add("(min-width:400px) and (max-width:767px)", () => {
          tl.to(imgRef.current, { y: "200%", x: "-0%" }, 0);
        });
        mm.add("(min-width:768px) and (max-width:1023px)", () => {
          tl.to(imgRef.current, { y: "170%", x: "-40%" }, 0);
        });
        // When screen width is more than 768px (desktop screens)
        mm.add("(min-width: 1024px) and (max-width:1439px)", () => {
          // Animation for desktop screens (769px and above)
          tl.to(imgRef.current, { y: "170%", x: "-50%" }, 0);
        });
        mm.add("(min-width: 1440px)", () => {
          // Animation for desktop screens (769px and above)
          tl.to(imgRef.current, { y: "190%", x: "-90%" }, 0);
        });
      });

      return () => {
        return ctx.revert();
      };
    }
  }, []);
  return (
    <div className=" min-h-screen">
      <div
        className={` ${
          isSmallScreen ? "h-96 w-96 bg-red-400" : "h-40 w-40 bg-green-400"
        }`}
      ></div>
      <PopUp delay={0} duration={0.5}>
        <img
          src="/home/galaxy2.png"
          alt="galaxy"
          width={500}
          height={500}
          className={` ${
            isSmallScreen
              ? "w-[300px]"
              : isMediumSmallScreen
              ? "w-[340px]  h-[340px] aspect-video flex-shrink-0"
              : "w-[500px]"
          }   rotate-6   object-contain`}
        />
      </PopUp>
    </div>
  );
}
