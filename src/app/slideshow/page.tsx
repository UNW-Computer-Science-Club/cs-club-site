"use client";
import { Element, Frame, Slideshow } from "@/components/slideshow";
import { useEffect, useState } from "react";
import AustinFrame from "@/app/students/austin-long/frame";

export default function Page() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onHashChange() {
      if (window.location.hash.includes("fullscreen")) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    }

    window.addEventListener("hashchange", onHashChange);

    onHashChange();

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div
      className={`bg-background aspect-video ${isFullscreen ? "fixed top-0 left-0 z-51 h-screen w-screen" : ""}`}
    >
      <Slideshow
        advanceTime={20}
        animationDistance={10}
        inBetweenTime={1}
        animationTime={1.5}
      >
        <AustinFrame />
        <Frame paddingSize={5}>
          <Element
            x={25}
            y={25}
            width={50}
            height={50}
            animationDirection="left"
            paddingPosition="topLeft"
            animationDelay={0}
          >
            <div className="h-full w-full rounded-md bg-blue-300" />
          </Element>
          <Element
            x={75}
            y={25}
            width={50}
            height={50}
            animationDirection="up"
            paddingPosition="topRight"
            animationDelay={10}
          >
            <div className="h-full w-full rounded-md bg-green-300" />
          </Element>
          <Element
            x={25}
            y={75}
            width={50}
            height={50}
            animationDirection="down"
            paddingPosition="bottomLeft"
            animationDelay={20}
          >
            <div className="h-full w-full rounded-md bg-green-300" />
          </Element>
          <Element
            x={75}
            y={75}
            width={50}
            height={50}
            animationDirection="right"
            paddingPosition="bottomRight"
            animationDelay={30}
          >
            <div className="h-full w-full rounded-md bg-blue-300" />
          </Element>
        </Frame>
      </Slideshow>
    </div>
  );
}
