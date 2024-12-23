"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; //resets to 0
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
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
  return { audioRef, stopAudio, playAudio };
}
