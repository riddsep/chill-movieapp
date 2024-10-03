import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-full ">
      <div className="embla__viewport overflow-x-auto " ref={emblaRef}>
        <div className="embla__container flex gap-4">{children}</div>
        <button className="embla__prev hidden" onClick={scrollPrev}>
          <img src="./assets/icons/arrow-left.svg" alt="" />
        </button>
        <button className="embla__next hidden" onClick={scrollNext}>
          <img src="./assets/icons/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
