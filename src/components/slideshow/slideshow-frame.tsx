"use client";
import { createContext, ReactElement } from "react";
import { ElementProps } from "./slideshow-element";

export interface FrameContextType {
  animIn: boolean;
  paddingSize?: number;
}

export const FrameContext = createContext({
  animIn: false,
  paddingSize: 0,
} as FrameContextType);

export interface FrameProps {
  children: ReactElement<ElementProps>[];
  // These are set by React.cloneElement.
  animIn?: boolean;
  paddingSize?: number;
}

// Warning: animIn is set by React.cloneElement.
export function Frame({ children, animIn, paddingSize = 0 }: FrameProps) {
  if (animIn == null) {
    throw new Error("Frame must be a child of Slideshow.");
  }
  return (
    <FrameContext value={{ animIn, paddingSize }}>
      <div className="absolute h-full w-full">{children}</div>
    </FrameContext>
  );
}
