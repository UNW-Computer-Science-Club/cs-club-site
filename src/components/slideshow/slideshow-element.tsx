"use client";
import { useContext, useRef, ReactNode } from "react";
import { motion } from "motion/react";
import { SlideshowContext } from "./slideshow";
import { FrameContext } from "./slideshow-frame";

export type StringAnimationDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none"
  | AnimationDirection;

export type PaddingSpecifier =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "none"
  | "all"
  | "notLeft"
  | "notRight"
  | "notUp"
  | "notDown";

export interface ElementProps {
  children: ReactNode;
  x: number;
  y: number;
  animationDirection: StringAnimationDirection;
  width: number;
  height: number;
  paddingPosition?: PaddingSpecifier;
  animationDelay?: number;
  animationLength?: number;
}

export interface AnimationDirection {
  x: number;
  y: number;
}

function createAnimationDirection(x: number, y: number): AnimationDirection {
  return { x: x, y: y };
}

export const customAnimationDirection = createAnimationDirection;

function calculateRelativePosition(pos: number, slideshowLength: number) {
  return slideshowLength * (pos / 100);
}

function parseAnimationDirection(
  animationDirection: StringAnimationDirection,
  animationDistance: number
): AnimationDirection {
  if (typeof animationDirection === "object") {
    return animationDirection;
  } else {
    switch (animationDirection) {
      case "up":
        return createAnimationDirection(0, -animationDistance);
      case "down":
        return createAnimationDirection(0, animationDistance);
      case "left":
        return createAnimationDirection(-animationDistance, 0);
      case "right":
        return createAnimationDirection(animationDistance, 0);
      case "none":
        return createAnimationDirection(0, 0);
    }
  }
}

function parsePaddingSpecifier(
  specifier: PaddingSpecifier,
  paddingSize: number
) {
  let paddings: object;
  switch (specifier) {
    case "left":
      paddings = { paddingLeft: paddingSize };
      break;
    case "right":
      paddings = { paddingRight: paddingSize };
      break;
    case "top":
      paddings = { paddingTop: paddingSize };
      break;
    case "bottom":
      paddings = { paddingBottom: paddingSize };
      break;
    case "topLeft":
      paddings = { paddingLeft: paddingSize, paddingTop: paddingSize };
      break;
    case "topRight":
      paddings = { paddingRight: paddingSize, paddingTop: paddingSize };
      break;
    case "bottomLeft":
      paddings = { paddingLeft: paddingSize, paddingBottom: paddingSize };
      break;
    case "bottomRight":
      paddings = { paddingRight: paddingSize, paddingBottom: paddingSize };
      break;
    case "notUp":
      paddings = {
        paddingLeft: paddingSize,
        paddingRight: paddingSize,
        paddingBottom: paddingSize,
      };
      break;
    case "notLeft":
      paddings = {
        paddingRight: paddingSize,
        paddingBottom: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "notRight":
      paddings = {
        paddingLeft: paddingSize,
        paddingBottom: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "notDown":
      paddings = {
        paddingLeft: paddingSize,
        paddingRight: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "all":
      paddings = {
        paddingLeft: paddingSize,
        paddingRight: paddingSize,
        paddingBottom: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "none":
      paddings = {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
      };
      break;
  }

  return {
    paddingLeft: paddingSize / 2,
    paddingRight: paddingSize / 2,
    paddingTop: paddingSize / 2,
    paddingBottom: paddingSize / 2,
    ...paddings,
  };
}

function calculateRelativeTime(time: number, fullTime: number) {
  return time * fullTime;
}

export function Element({
  children,
  x,
  y,
  width,
  height,
  animationDirection,
  paddingPosition,
  animationDelay = 0,
  animationLength = 100,
}: ElementProps) {
  const slideshowContext = useContext(SlideshowContext);
  const frameContext = useContext(FrameContext);
  const elementRef = useRef<HTMLDivElement>(null);

  const isKeyFrame = frameContext.isKeyFrame;
  const isCurrent = frameContext.isCurrent;
  const paddingSize = frameContext.paddingSize ?? 0;

  const size = {
    width: slideshowContext.width * (width / 100),
    height: slideshowContext.height * (height / 100),
  };

  const parsedAnimationDirection = parseAnimationDirection(
    animationDirection,
    slideshowContext.animationDistance
  );

  const relX = calculateRelativePosition(50, size.width);
  const relY = calculateRelativePosition(50, size.height);

  const iniPosX =
    calculateRelativePosition(
      x + parsedAnimationDirection.x,
      slideshowContext.width
    ) - relX;
  const iniPosY =
    calculateRelativePosition(
      y + parsedAnimationDirection.y,
      slideshowContext.height
    ) - relY;
  const posX = calculateRelativePosition(x, slideshowContext.width) - relX;
  const posY = calculateRelativePosition(y, slideshowContext.height) - relY;

  const notCurrentState = {
    opacity: 0,
    x: iniPosX,
    y: iniPosY,
  };
  const currentState = { opacity: 1, x: posX, y: posY };
  const transition = {
    ease: "easeInOut",
    delay: calculateRelativeTime(
      animationDelay / 100,
      slideshowContext.animationTime
    ),
    duration: calculateRelativeTime(
      animationLength / 100,
      slideshowContext.animationTime
    ),
  };

  const paddings = parsePaddingSpecifier(
    paddingPosition ?? "none",
    (paddingSize / 100) *
      Math.sqrt(slideshowContext.width * slideshowContext.height)
  );

  const ready = !(slideshowContext.width < 0 || slideshowContext.height < 0);

  if (!ready) {
    return <></>;
  }

  return (
    <motion.div
      initial={isKeyFrame ? currentState : notCurrentState}
      animate={isCurrent ? currentState : notCurrentState}
      transition={{
        opacity: transition,
        x: transition,
        y: transition,
      }}
      className="absolute"
      style={{
        width: slideshowContext.width * (width / 100),
        height: slideshowContext.height * (height / 100),
        ...paddings,
      }}
      ref={elementRef}
    >
      {children}
    </motion.div>
  );
}
