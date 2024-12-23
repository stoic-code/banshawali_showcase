"use client";
import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

export default function FadeIn({
  children,
  delay = 0.1,
  height = 10,
  duration = 0.5,
}: {
  children: ReactNode;
  delay?: number;
  height?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, { once: true });

  return (
    <div className={`h-auto `}>
      <motion.div
        className=" bg-yellow-500 "
        ref={ref}
        // initial={{ scale: 2 }}
        // animate={{ scale: inView ? 1 : 2 }}
        initial={{ opacity: 0, translateY: -40 }}
        animate={inView ? { opacity: 1, translateY: 0 } : {}}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </div>
  );
}
