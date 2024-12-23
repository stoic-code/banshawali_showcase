"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function TypewriterAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; //resets to 0
      audioRef.current.loop = true;
      audioRef.current
        .play()
        .catch((err) => console.log("Error during playing audio", err));
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.loop = false;
      audioRef.current.pause();
    }
  };
  return (
    <div>
      {" "}
      <audio ref={audioRef} src="/sounds/typewritter.mp3" />
    </div>
  );
}
