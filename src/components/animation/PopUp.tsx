"use client";
import { motion, useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

export default function PopUp({
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </div>
  );
}
