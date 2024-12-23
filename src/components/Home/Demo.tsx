"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Demo() {
  const box = useRef(null);
  const textRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const imgContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".myimg1", {
        scrollTrigger: {
          trigger: ".imgCont1",
          // pin: ".imgCont1 .pinSection",
          pin: true,
          // markers: true,
          scrub: 4,
          id: "img1111",

          start: "50% 50%",
          end: "+=1000 center",
        },
        // opacity: 1,
        transform: "translateZ(1000px)",
        ease: "back.out(2)",
        // stagger: {
        //   amount: 3,
        //   from: "start",
        // },
        keyframes: [
          {
            opacity: 1,
            ease: "none",
            duration: 0.2,
          }, // 20% of the total duration
          {
            opacity: 1,
            duration: 0.7,
          }, // 60% of the total duration
          { opacity: 0, duration: 0.1 }, // Final 20% of the total duration
        ],
      });
      gsap.to(".myText", {
        scrollTrigger: {
          trigger: ".imgCont1",
          // pin: ".imgCont1 .pinSection",
          // pin: true,
          // markers: true,
          id: "text111",
          scrub: 4,
          start: "50% 50%",
          end: "+=1000 center",
        },
        // opacity: 1,
        // transform: "translateZ(2000px)",
        ease: "back.out(4)",
        // stagger: {
        //   amount: 3,
        //   from: "random",
        // },
        keyframes: [
          {
            opacity: 1,
            // fontSize: "2rem",
            duration: 0.2,
          }, // 20% of the total duration
          {
            opacity: 1,
            // scale: 2,
            // fontSize: "2rem",
            duration: 0.3,
            // scale: 150,
          }, // 60% of the total duration
          {
            opacity: 0,
            duration: 0.5,
            transform: "translateZ(2000px)",
            // fontSize: "4rem",
          }, // Final 20% of the total duration
        ],
      });
      gsap.to(".myimg2", {
        scrollTrigger: {
          trigger: ".imgCont2",
          // pin: ".imgCont1 .pinSection",
          pin: true,
          // markers: true,
          id: "image2",
          scrub: 4,
          start: "50% 50%",
          end: "+=1000 bottom",
        },
        // opacity: 1,
        transform: "translateZ(1000px)",
        ease: "back.out(4)",
        // stagger: {
        //   amount: 3,
        //   from: "start",
        // },
        keyframes: [
          {
            opacity: 1,
            ease: "none",
            duration: 0.2,
          }, // 20% of the total duration
          {
            opacity: 1,
            duration: 0.7,
          }, // 60% of the total duration
          { opacity: 0, duration: 0.1 }, // Final 20% of the total duration
        ],
      });
      gsap.to(".myText2", {
        scrollTrigger: {
          trigger: ".imgCont2",
          // pin: ".imgCont1 .pinSection",
          // pin: true,
          // markers: true,
          id: "text2",
          scrub: 4,
          start: "50% 50%",
          end: "+=1000 bottom",
        },
        // opacity: 1,
        // transform: "translateZ(2000px)",
        ease: "back.out(4)",
        // stagger: {
        //   amount: 3,
        //   from: "random",
        // },
        keyframes: [
          {
            opacity: 1,
            // fontSize: "2rem",
            duration: 0.2,
          }, // 20% of the total duration
          {
            opacity: 1,
            // scale: 2,
            // fontSize: "2rem",
            duration: 0.3,
            // scale: 150,
          }, // 60% of the total duration
          {
            opacity: 0,
            duration: 0.5,
            transform: "translateZ(2000px)",
            // fontSize: "4rem",
          }, // Final 20% of the total duration
        ],
      });
    },
    { scope: box }
  );

  return (
    <section ref={box} className=" overflow-hidden h-auto w-screen">
      <div
        // ref={imgContainer}
        className="imgCont1 perspective    h-[50vh] w-screen   flex flex-col items-center justify-center "
      >
        <div className="pinSection relative  sm:flex-row flex-col perspective  flex items-center   justify-center">
          <img
            // ref={img1}
            src="/home/brahma.svg"
            alt="parallax"
            width={300}
            height={300}
            className="myimg1 relative z-20  opacity-0  scale-75  w-[200px] sm:w-[300px]"
          />
          <div className="myText max-w-lg mx-auto  leading-10    text-white  text-sm text-center  opacity-0   sm:text-4xl font-bold">
            Do you find it challenging to keep your traditional family records
            up to date?
          </div>
          <img
            // ref={img1}
            src="/home/brahma.svg"
            alt="parallax"
            width={300}
            height={300}
            className="myimg1 relative z-20 opacity-0  scale-75  w-[200px] sm:w-[300px]"
          />
        </div>
      </div>
      <div
        // ref={imgContainer}
        className="imgCont2  perspective  h-screen w-screen     flex flex-col items-center justify-center "
      >
        <div className="pinSection  sm:flex-row flex-col perspective  flex items-center   justify-center">
          <img
            // ref={img1}
            src="/home/brahma.svg"
            alt="parallax"
            width={300}
            height={300}
            className="myimg2 relative z-20  opacity-0  scale-75  w-[200px] sm:w-[300px]"
          />
          <div className="myText2 max-w-lg mx-auto  leading-10    text-white  text-sm text-center  opacity-0   sm:text-4xl font-bold">
            Do you find it challenging to keep your traditional family records
            up to date?
          </div>
          <img
            // ref={img1}
            src="/home/brahma.svg"
            alt="parallax"
            width={300}
            height={300}
            className="myimg2 relative z-20 opacity-0  scale-75  w-[200px] sm:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
