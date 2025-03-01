"use client";

import {
  AnimationControls,
  motion,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import { ElementType, ReactNode } from "react";

interface MotionProps {
  tag?: ElementType;
  children: ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  animate?:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | AnimationControls
    | undefined;
  transition: object;
  className?: string;
}

export const Motion = ({
  tag = "div",
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition,
  className = "",
}: MotionProps) => {
  const MotionContainer = motion(tag);
  return (
    <MotionContainer
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </MotionContainer>
  );
};
