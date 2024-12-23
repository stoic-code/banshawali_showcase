"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useAudio } from "../audio/useAudio";
import Typewriter from "typewriter-effect";
import Fade from "../animation/Fade";
import { constellations } from "@/data/constellation";
import { useMediaQuery } from "react-responsive";

export default function Constellation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [brahma, setBrahma] = useState<{} | any>(constellations[0]);
  const [childrenStars, setChildrenStars] = useState<[] | any>([]);
  const [selectedParentStar, setSelectedParentStar] = useState("");
  const isSmallScreen = useMediaQuery({ maxWidth: 400 });

  function handleStarHover(starName: string) {
    console.log("star name", starName);

    const filtered = constellations.find((c: any) => {
      console.log("c k ho", c);
      if (c.title === starName) {
        return c;
      }
    });
    console.log("filtreede hai", filtered);
    setBrahma(filtered);
  }

  function handleStarClick(starName: string) {
    console.log("star name slected", starName);
    setSelectedParentStar(starName);
    const filtered = constellations.find((c: any) => {
      if (c.title === starName) {
        return c;
      }
    });
    setChildrenStars(filtered?.children);
  }
  console.log("childrensss", childrenStars);
  console.log("selected patenr star", selectedParentStar);

  return (
    <div
      style={{
        background: "url(/home/stars.svg) center/cover",
      }}
      className="last min-h-screen flex flex-col sm:flex-row  items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {brahma.photo && (
          <motion.div
            key={brahma.photo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className=" absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
            <img
              src={brahma.photo}
              alt="brahma"
              width={400}
              height={400}
              className=" w-[300px] sm:w-[400px]"
            />
            <span className="absolute z-50 text-white text-center ml-20">
              {" "}
              {brahma.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={` ${
          isSmallScreen ? "w-full" : "w-[70%]"
        } h-[40vh]  px-2   overflow-hidden sm:w-[40%] relative`}
      >
        <div
          onMouseEnter={() => handleStarHover("star1")}
          onClick={() => handleStarClick("star1")}
          id="star1"
          className=" cursor-pointer h-6 w-6 rounded-full bg-white absolute top-8 left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          {/* CHILDREN STARS */}
          <AnimatePresence>
            {selectedParentStar === "star1" &&
              childrenStars?.map((child: any, idx: number) => {
                return (
                  <motion.div
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: child.left,
                      y: child.top,
                      opacity: 1,
                    }}
                    exit={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8 }}
                    key={child.title}
                  >
                    <div
                      // onMouseEnter={() => handleStarHover("star1")}
                      id={child.title}
                      className={`   transition-all duration-300 cursor-pointer h-4 w-4 rounded-full bg-white absolute  overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]`}
                    ></div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
          {/* <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c1"
            className=" cursor-pointer h-4 w-4 rounded-full bg-white absolute top-14 left-2 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c2"
            className=" cursor-pointer h-4 w-4 rounded-full bg-white absolute top-8 left-8 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c3"
            className=" cursor-pointer h-4 w-4 rounded-full bg-white absolute top-16  left-14 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div> */}
        </div>
        <div
          onMouseEnter={() => handleStarHover("star2")}
          onClick={() => handleStarClick("star2")}
          id="star2"
          className="cursor-pointer h-6 w-6 rounded-full bg-white absolute top-4 left-20 overflow-visible  hover:shadow-rainbow-1   hover:border-rainbow-1   border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <AnimatePresence>
            {selectedParentStar === "star2" &&
              childrenStars?.map((child: any, idx: number) => {
                return (
                  <motion.div
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: child.left,
                      y: child.top,
                      opacity: 1,
                    }}
                    exit={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8 }}
                    key={child.title}
                  >
                    <div
                      // onMouseEnter={() => handleStarHover("star1")}
                      id={child.title}
                      className={`   transition-all duration-300 cursor-pointer h-4 w-4 rounded-full bg-white absolute  overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]`}
                    ></div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
          {/* <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c1"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-red-500 absolute top-10 left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c2"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-green-600 absolute top-8 -left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c3"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-white absolute top-20   -left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div> */}
        </div>
        <div
          onMouseEnter={() => handleStarHover("star3")}
          id="star3"
          className="cursor-pointer h-6 w-6 rounded-full bg-white absolute top-14 left-32 overflow-visible  hover:shadow-rainbow-2   hover:border-rainbow-2  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <AnimatePresence>
            {selectedParentStar === "star3" &&
              childrenStars?.map((child: any, idx: number) => {
                return (
                  <motion.div
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: child.left,
                      y: child.top,
                      opacity: 1,
                    }}
                    exit={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8 }}
                    key={child.title}
                  >
                    <div
                      // onMouseEnter={() => handleStarHover("star1")}
                      id={child.title}
                      className={`   transition-all duration-300 cursor-pointer h-4 w-4 rounded-full bg-white absolute  overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]`}
                    ></div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c1"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-red-500 absolute top-10 left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c2"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-green-600 absolute top-8 -left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c3"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-white absolute top-20   -left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
        </div>
        <div
          onMouseEnter={() => handleStarHover("star4")}
          id="star4"
          className="cursor-pointer h-6 w-6 rounded-full bg-white absolute top-24 left-44 overflow-visible  hover:shadow-rainbow-3   hover:border-rainbow-3  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c1"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-red-500 absolute top-10 -left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c2"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-green-600 absolute top-8 -left-14 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c3"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-white absolute top-20   -left-16 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c4"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-fuchsia-400 absolute top-32   -left-20 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c5"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-orange-400 absolute top-36   -left-8 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c6"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-pink-500 absolute top-20   -left-6 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
        </div>
        <div
          onMouseEnter={() => handleStarHover("star5")}
          id="star5"
          className="cursor-pointer h-6 w-6 rounded-full bg-white absolute top-44 left-48 overflow-visible  hover:shadow-rainbow-4   hover:border-rainbow-4   border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c1"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-red-500 absolute top-10 left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
          <div
            // onMouseEnter={() => handleStarHover("star1")}
            id="star1-c2"
            className="hidden cursor-pointer h-4 w-4 rounded-full bg-green-600 absolute top-8 -left-4 overflow-visible hover:shadow-rainbow-7    hover:border-rainbow-7  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          ></div>
        </div>
        <div
          onMouseEnter={() => handleStarHover("star6")}
          id="star6"
          className="cursor-pointer h-6 w-6 rounded-full bg-white absolute top-44 left-72 overflow-visible  hover:shadow-rainbow-5    hover:border-rainbow-5  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        ></div>
        <div
          onMouseEnter={() => handleStarHover("star7")}
          id="star7"
          className="cursor-pointer h-6 w-6 rounded-full bg-white absolute top-24 left-80 overflow-visible  hover:shadow-rainbow-6   hover:border-rainbow-6  border shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        ></div>
      </div>
    </div>
  );
}
