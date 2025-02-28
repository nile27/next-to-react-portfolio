import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { type CarouselApi } from "../../components/ui/carousel";
import { useState, useEffect } from "react";

import { projectData } from "../../lib/dummyData";

export function CarouselBox(props: {
  idx: number;
  width: number;
  height: number;
}) {
  const { idx, width, height } = props;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={`w-[100%] max-w-[${width}px]  max-h-[${height}px]  relative `}
    >
      <div className="bg-gradient-to-b from-transparent to-black/30 w-full h-[100%] absolute z-[1]"></div>
      <Carousel
        setApi={setApi}
        className={`relative w-[100%] h-[${height}px] overflow-y-hidden `}
      >
        <CarouselContent className="h-full">
          {projectData[idx].imgSrc.map((item, idx) => {
            return (
              <CarouselItem key={idx} className="relative overflow-y-hidden">
                <div
                  className={` w-[${width}] h-[${height}px] textBoxHalf:w-[${
                    width + 100
                  }px] relative overflow-y-hidden`}
                >
                  <img
                    src={item}
                    alt="img"
                    className=" !relative !h-[unset] overflow-y-hidden fill"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className=" flex justify-between absolute z-10 w-[100%]  left-0 top-[50%] h-auto">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <div className="flex justify-center absolute z-10 w-[100%] left-[0%] bottom-[5%] h-auto gap-2">
          {projectData[idx].imgSrc.map((_, idx) => {
            return (
              <div
                key={idx}
                className={`w-[8px] h-[8px] ${
                  current !== idx + 1 ? "bg-white" : "bg-purple-500"
                }  rounded-full`}
              ></div>
            );
          })}
        </div>
      </Carousel>
    </div>
  );
}
