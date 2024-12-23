"use client";
import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

export default function Fade({
  children,
  delay = 0.1,
  height = 10,
  duration = 0.88,
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
        className=""
        ref={ref}
        initial={{ opacity: 0, translateY: 20 }}
        animate={inView ? { opacity: 1, translateY: 0 } : {}}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </div>
  );
}
