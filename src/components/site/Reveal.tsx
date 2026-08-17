"use client";

import * as m from "motion/react-client";
import type { ReactNode } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/** Entrada única por seção. Motion respeita prefers-reduced-motion. */
export function Reveal({ children, className }: RevealProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </m.div>
  );
}
