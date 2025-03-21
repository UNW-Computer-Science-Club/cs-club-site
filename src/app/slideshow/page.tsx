import { Element, Frame, Slideshow } from "@/components/slideshow";

export default function Page() {
  return (
    <div className="right-0 w-full fixed h-full">
      <Slideshow
        advanceTime={5}
        animationDistance={20}
        inBetweenTime={0.2}
        animationTime={3}
      >
        <Frame>
          <Element x={0.5} y={0.5} animationDirection="up">
            <p>Hello, 1a</p>
          </Element>
          <Element x={0} y={0} animationDirection="up">
            <p>Hello, 1b</p>
          </Element>
        </Frame>
        <Frame>
          <Element x={0} y={0} animationDirection="up">
            <p>Hello, 2a</p>
          </Element>
          <Element x={0} y={0} animationDirection="up">
            <p>Hello, 2b</p>
          </Element>
        </Frame>
      </Slideshow>
    </div>
  );
}
