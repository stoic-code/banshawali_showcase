"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Parallax() {
  const box = useRef(null);
  const textRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const imgContainer = useRef(null);

  useGSAP(
    () => {
      let myTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".imgCont",
          start: "0% 0%",
          end: "+=900 center",

          // end: "100% 50%",
          pin: true,
          scrub: 1,

          markers: true,
        },
      });

      // gsap.from(".myimg3", {
      //   scrollTrigger: {
      //     trigger: ".imgCont2",
      //     pin: true,
      //     markers: true,
      //     scrub: 2,
      //     start: "center center",
      //     end: "+=900 center",
      //   },
      //   opacity: 0,
      //   transform: "translateZ(4000px)",
      //   ease: "back.out(4)",
      //   // stagger: {
      //   //   amount: 3,
      //   //   from: "random",
      //   // },
      // });

      gsap.to(".myimg3", {
        scrollTrigger: {
          trigger: ".imgCont2",
          pin: true,
          markers: true,
          scrub: 2,
          start: "center center",
          end: "+=900 center",
        },
        opacity: 1,
        transform: "translateZ(4000px)",
        ease: "back.out(4)",
        // stagger: {
        //   amount: 3,
        //   from: "random",
        // },
      });
      gsap.to(".myimg4", {
        scrollTrigger: {
          trigger: ".imgCont2",
          pin: true,
          markers: true,
          scrub: 2,
          start: "center center",
          end: "+=900 center",
        },
        opacity: 1,
        transform: "translateZ(4000px)",
        ease: "back.out(4)",
        // stagger: {
        //   amount: 3,
        //   from: "random",
        // },
      });

      myTl
        .to(
          ".myimg",
          {
            transform: " translateZ(4000px) translateY(-500px)",
            scale: 50,
            opacity: 100,
          },
          0
        )
        .to(
          ".myimg2",
          {
            transform: " translateZ(4000px) translateY(500px)",
            scale: 50,
            opacity: 100,
          },
          0
        )
        .to(
          ".myText",
          {
            transform: "translateZ(5000px) ",
            fontSize: "10rem",
            // width: "100%",
            opacity: 100,
          },
          0.001
        );
    },
    { scope: box }
  );

  return (
    <section ref={box} className="  bg-green-600  h-auto w-screen">
      <div
        ref={imgContainer}
        className="imgCont overflow-hidden  h-screen w-screen bg-red-600  flex flex-col items-center justify-center "
      >
        <div className="  flex items-center flex-col perspective  justify-center">
          <img
            ref={img1}
            src="/parallax/question1a.svg"
            alt="parallax"
            width={300}
            height={300}
            className="myimg relative z-20  scale-50  opacity-0  w-[300px]"
          />
          <h2
            ref={textRef}
            className="myText    text-white  text-sm text-center  opacity-0  text-nowrap sm:font-4xl font-bold"
          >
            Do you find it challenging to keep your traditional family records
            up to date?
          </h2>
          <img
            ref={img2}
            src="/parallax/question1b.svg"
            alt="parallax"
            width={300}
            height={300}
            className="myimg2 relative z-20  scale-50 opacity-0  w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
