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
    <div className="embla w-full relative ">
      <div className="embla__viewport overflow-x-auto" ref={emblaRef}>
        <div className="embla__container flex gap-4 lg:gap-6">{children}</div>
        <button
          className="embla__prev hidden lg:flex absolute -left-[2%] -translate-y-1/2 top-1/2"
          onClick={scrollPrev}
        >
          <img src="/assets/icons/arrow-left.svg" alt="" />
        </button>
      </div>
      <button
        className="embla__next hidden lg:flex absolute -right-[2%] -translate-y-1/2 top-1/2"
        onClick={scrollNext}
      >
        <img src="/assets/icons/arrow-right.svg" alt="" />
      </button>
    </div>
  );
};
export default Carousel;
