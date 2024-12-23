"use client";
import React, { useEffect, useRef } from "react";
import FadeUpRotate from "../animation/FadeUpRotate";
import Typewriter from "typewriter-effect";
import { useInView } from "framer-motion";
import { useAudio } from "../audio/useAudio";
export default function First() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const { playAudio, stopAudio, audioRef } = useAudio();

  console.log("view ma xa?", inView);
  useEffect(() => {
    if (!inView) {
      stopAudio();
    }
  }, [inView]);

  return (
    <div
      style={{
        background: "url(/home/stars.svg) center/cover",
      }}
      className="  h-[90vh] sm:min-h-screen text-white flex items-center justify-center"
    >
      <audio ref={audioRef} src="/sounds/typewritter.mp3" />

      <div
        ref={ref}
        className=" text-white   text-center px-4 tracking-wide sm:text-3xl text-[0.8rem] font-medium"
      >
        {inView ? (
          <Typewriter
            onInit={(typewriter) => {
              playAudio();

              typewriter
                .typeString(
                  ` In the beginning, there was nothing but the boundless void of space ,
                an infinite expanse of primordial darkness.`
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
    </div>
  );
}
