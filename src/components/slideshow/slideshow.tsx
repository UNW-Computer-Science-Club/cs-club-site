"use client";
import {
  createContext,
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
  ReactElement,
  useLayoutEffect,
} from "react";

import { FrameProps } from "./slideshow-frame";

export interface SlideshowContextType {
  animationDistance: number;
  animationTime: number;
  width: number;
  height: number;
}

export const SlideshowContext = createContext({
  animationDistance: 20,
  animationTime: 20,
  width: 0,
  height: 0,
} as SlideshowContextType);

export interface SlideshowProps {
  advanceTime?: number;
  inBetweenTime?: number;
  animationDistance?: number;
  animationTime?: number;
  previewFrame?: number | null;
  children: ReactElement<FrameProps>[];
}

export function Slideshow({
  advanceTime = 7,
  animationDistance = 20,
  inBetweenTime = 0.2,
  animationTime = 1,
  previewFrame = null,
  children,
}: SlideshowProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const timeouts = useRef<NodeJS.Timeout[]>([]); // Track timeouts
  const containerRef = useRef<HTMLDivElement>(null); // FIXME: we need to wait until this is set before rendering things.
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: -1,
    height: -1,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width: width, height: height });
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Schedule slide advances
  useEffect(() => {
    if (previewFrame == null) {
      const scheduleFrame = () => {
        // Timeout to start animating out
        timeouts.current.push(
          setTimeout(() => {
            setAnimateIn(false);

            // Timeout for in-between state
            timeouts.current.push(
              setTimeout(() => {
                // Timeout to advance slide
                timeouts.current.push(
                  setTimeout(() => {
                    setCurrentFrame(
                      (prevFrame) => (prevFrame + 1) % Children.count(children)
                    );
                    setAnimateIn(true);

                    // Schedule next cycle
                    scheduleFrame();
                  }, inBetweenTime * 1000)
                );
              }, animationTime * 1000)
            );
          }, advanceTime * 1000)
        );
      };

      scheduleFrame();

      return () => {
        // Cleanup timeouts when component unmounts
        timeouts.current.forEach(clearTimeout);
        timeouts.current = [];
      };
    } else {
      setCurrentFrame(previewFrame);
    }
  }, [advanceTime, animationTime, children, inBetweenTime, previewFrame]); // Run effect when `children` change

  return (
    <SlideshowContext
      value={{
        animationDistance,
        animationTime,
        width: size.width,
        height: size.height,
      }}
    >
      <div ref={containerRef} className="relative h-full w-full">
        {Children.map(
          children,
          (child, index) =>
            currentFrame == index &&
            cloneElement(child, {
              animIn: animateIn,
            })
        )}
      </div>
    </SlideshowContext>
  );
}
