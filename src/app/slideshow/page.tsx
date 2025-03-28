import { Element, Frame, Slideshow } from "@/components/slideshow";

export default function Page() {
  return (
    <div className="bg-background fixed top-0 right-0 z-51 h-full w-full">
      <Slideshow
        advanceTime={10}
        animationDistance={10}
        inBetweenTime={1}
        animationTime={1.5}
      >
        <Frame paddingSize={5}>
          <Element
            x={25}
            y={10}
            width={50}
            height={20}
            animationDirection="up"
            paddingPosition="topLeft"
          >
            <div className="flex h-full w-full items-center justify-center rounded-md bg-emerald-900">
              <h1 className="text-7xl">Austin Long</h1>
            </div>
          </Element>
          <Element
            x={25}
            y={60}
            width={50}
            height={80}
            animationDirection="left"
            paddingPosition="bottomLeft"
          >
            <div className="h-full w-full bg-emerald-200 rounded-md" />
          </Element>
        </Frame>
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
            <div className="h-full w-full bg-blue-300 rounded-md" />
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
            <div className="h-full w-full bg-green-300 rounded-md" />
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
            <div className="h-full w-full bg-green-300 rounded-md" />
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
            <div className="h-full w-full bg-blue-300 rounded-md" />
          </Element>
        </Frame>
      </Slideshow>
    </div>
  );
}
