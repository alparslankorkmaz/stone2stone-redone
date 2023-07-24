"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import { testimonialByIndex, reviewerByIndex } from "./TestimonialByIndex";

const Testimonials = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  return (
    <div className="relative overflow-hidden lg:py-20 mb-28">
      <h4 className="font-playfair text-3xl text-center font-bold mb-10 lg:mb-32">
        Trusted by Technology Companies Everywhere
      </h4>
      <img
        src="/images/quote1.png"
        alt="quote sign"
        className="absolute lg:top-52 lg:left-96 w-24 z-10"
      />
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {slides.map((index) => (
              <div
                className="embla__slide mx-10 lg:mx-20 flex justify-center items-center "
                key={index}
              >
                <div className="embla__slide__div bg-tab-gray p-16 rounded-xl">
                  <h6 className="font-playfair text-xl font-bold">
                    {testimonialByIndex(index)}
                  </h6>
                  <p className="font-montserrat font-light mt-5">
                    {reviewerByIndex(index)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/quote2.png"
          alt="quote sign"
          className="absolute bottom-5 right-0 lg:bottom-10 lg:right-96 w-24 z-10"
        />

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
