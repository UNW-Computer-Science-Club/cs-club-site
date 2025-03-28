"use client";
import { createContext, ReactElement } from "react";
import { ElementProps } from "./slideshow-element";

export interface FrameContextType {
  isCurrent: boolean;
  isKeyFrame: boolean;
  paddingSize?: number;
}

export const FrameContext = createContext({
  isCurrent: false,
  isKeyFrame: false,
  paddingSize: 0,
} as FrameContextType);

export interface FrameProps {
  children: ReactElement<ElementProps>[];
  // These are set by React.cloneElement.
  isCurrent?: boolean;
  isKeyFrame?: boolean;
  paddingSize?: number;
}

// Warning: isCurrent and isKeyFrame are set by React.cloneElement.
export function Frame({
  children,
  isCurrent,
  isKeyFrame,
  paddingSize = 0,
}: FrameProps) {
  if (isCurrent == null || isKeyFrame == null) {
    throw new Error("Frame must be a child of Slideshow.");
  }
  return (
    <FrameContext value={{ isCurrent, isKeyFrame, paddingSize }}>
      <div className="fixed h-full w-full">{children}</div>
    </FrameContext>
  );
}
