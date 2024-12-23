"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useAudio } from "../audio/useAudio";
import Typewriter from "typewriter-effect";
import Fade from "../animation/Fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PopUp from "../animation/PopUp";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Brahmma() {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef(null);
  const imgRef = useRef(null);
  const inView = useInView(ref);
  const inView2 = useInView(ref2);
  const { playAudio, stopAudio, audioRef } = useAudio();
  const isBigScreen = useMediaQuery({ maxWidth: 1555, minWidth: 1440 });
  const isMediumScreen = useMediaQuery({ maxWidth: 1439, minWidth: 768 });
  const isMediumSmallScreen = useMediaQuery({ maxWidth: 767, minWidth: 400 });
  const isSmallScreen = useMediaQuery({ maxWidth: 399, minWidth: 300 });
  console.log("window type", typeof window);

  console.log("view ma xa?", inView);
  useEffect(() => {
    if (!inView) {
      stopAudio();
    }
  }, [inView]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mybrahma",
          start: "80% 40%", //img is animated when 80% of bg is moved //when bg 80% reaches 20% from top of viewport
          end: "130% 10%",
          scrub: 1,
          // markers: true,
          id: "brahmma-move",
          // onLeave: () => {
          //   // Cleanup or disable GSAP when scrolling past this section
          //   ScrollTrigger.getById("brahmma-move")?.kill();
          // },
          // onLeaveBack: () => {
          //   // Optional: Re-enable the animation when scrolling back
          //   ScrollTrigger.getById("brahmma-move")?.refresh();
          // },
        },
      });
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
      // });

      // tl.to(".myimg", { y: 200 });
    },
    { scope: bgRef }
  );

  // useLayoutEffect(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //     let ctx = gsap.context(() => {
  //       const mm = gsap.matchMedia();
  //       // ScrollTrigger for background
  //       ScrollTrigger.create({
  //         trigger: bgRef.current,
  //         start: "50% 50%",
  //         endTrigger: ".last",
  //         end: "bottom top",
  //         markers: true,
  //         id: "brahmma-bg",
  //         onLeave: () => {
  //           // Cleanup or disable GSAP when scrolling past this section
  //           ScrollTrigger.getById("brahmma-bg")?.kill();
  //         },
  //         onLeaveBack: () => {
  //           // Optional: Re-enable the animation when scrolling back
  //           ScrollTrigger.getById("brahmma-bg")?.refresh();
  //         },
  //       });

  //       // Timeline for image movement
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: imgRef.current,
  //           scrub: 1,
  //           start: "80% 40%", //img is animated when 80% of bg is moved //when bg 80% reaches 20% from top of viewport
  //           end: "130% 10%",
  //           id: "brahmma-move",
  //           onLeave: () => {
  //             // Cleanup or disable GSAP when scrolling past this section
  //             ScrollTrigger.getById("brahmma-move")?.kill();
  //           },
  //           onLeaveBack: () => {
  //             // Optional: Re-enable the animation when scrolling back
  //             ScrollTrigger.getById("brahmma-move")?.refresh();
  //           },
  //         },
  //       });

  //       // Adjustments for mobile screens

  //       // When screen width is less than 768px (mobile screens)
  //       mm.add("(max-width:400px)", () => {
  //         tl.to(imgRef.current, { y: "220%", x: "-0%" }, 0);
  //       });
  //       mm.add("(min-width:400px) and (max-width:767px)", () => {
  //         tl.to(imgRef.current, { y: "200%", x: "-0%" }, 0);
  //       });
  //       mm.add("(min-width:768px) and (max-width:1023px)", () => {
  //         tl.to(imgRef.current, { y: "170%", x: "-40%" }, 0);
  //       });
  //       // When screen width is more than 768px (desktop screens)
  //       mm.add("(min-width: 1024px) and (max-width:1439px)", () => {
  //         // Animation for desktop screens (769px and above)
  //         tl.to(imgRef.current, { y: "170%", x: "-50%" }, 0);
  //       });
  //       mm.add("(min-width: 1440px)", () => {
  //         // Animation for desktop screens (769px and above)
  //         tl.to(imgRef.current, { y: "190%", x: "-90%" }, 0);
  //       });
  //     });

  //     return () => {
  //       return ctx.revert();
  //     };
  //   }
  // }, []);
  console.log(isBigScreen, isMediumScreen, isMediumSmallScreen, isSmallScreen);

  return (
    <div
      ref={bgRef}
      style={
        {
          // background: "url(/home/stars.svg) center/cover",
        }
      }
      className=" min-h-screen  flex flex-col items-center justify-center"
    >
      <audio ref={audioRef} src="/sounds/typewritter.mp3" />
      <section className=" flex flex-col min-h-screen   items-center justify-center">
        <div
          ref={ref}
          className=" text-white   text-center px-4 tracking-wide sm:text-3xl text-[0.8rem] font-medium"
        >
          {inView ? (
            <Typewriter
              options={{ delay: 50 }}
              onInit={(typewriter) => {
                playAudio();
                typewriter
                  .typeString(
                    ` Brahma awoke within the lotus, his mind filled with the knowledge and power to create the universe.`
                  )
                  .callFunction(() => {
                    // console.log("String typed out!");
                    stopAudio();
                  })
                  .callFunction(() => {
                    // console.log("All strings were deleted");
                  })
                  // .changeDelay(50)
                  .start();
              }}
            />
          ) : null}
        </div>

        <div className=" mt-8">
          <Fade delay={0.4}>
            <img
              ref={imgRef}
              src="/home/brahma.svg"
              alt="brahma"
              width={400}
              height={400}
              className="mybrahma w-[300px] relative z-30 md:w-[400px]"
            />
          </Fade>
        </div>
      </section>

      <section className="  grid w-full place-items-center md:grid-cols-2  min-h-screen">
        <div className=" relative h-full     w-full">
          <div
            className={` 
            
       custom-big:bottom-0 custom-big:translate-y-[20%] custom-big:w-fit  custom-big:right-0 custom-big:-translate-x-28
       custom-medium:bottom-0 custom-medium:-translate-y-[40%] custom-medium:w-fit   custom-medium:right-0 custom-medium:translate-x-4
       custom-medium-small:bottom-0 custom-medium-small:translate-y-[60%] custom-medium-small:w-fit  custom-medium-small:left-[50%] custom-medium-small:-translate-x-[50%]
       custom-small:bottom-0 custom-small:translate-y-[60%] custom-small:w-full  custom-small:left-[50%] custom-small:-translate-x-[50%]
          
             
             
           
            absolute  z-0   sm:px-0 `}
          >
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
        </div>
        <section className=" col-span-1   h-full flex items-center justify-center flex-col gap-8   ">
          <div
            ref={ref2}
            className="last text-white  bg-black   flex items-center justify-center  col-span-2  text-center px-4 tracking-wide sm:text-xl text-[0.8rem] font-medium"
          >
            {inView2 ? (
              <Typewriter
                onInit={(typewriter) => {
                  playAudio();

                  typewriter
                    .typeString(
                      ` Brahma awoke within the lotus, his mind filled with the knowledge and power to create the universe.`
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                      stopAudio();
                    })
                    //   .pauseFor(2500)
                    // .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    // .changeDelay(2000)
                    .start();
                }}
              />
            ) : null}
          </div>
        </section>
      </section>
    </div>
  );
}
