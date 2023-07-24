"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import {
  titleByIndex,
  textByIndex,
  imgByIndex,
  buttonByIndex,
} from "./WhyS2SByIndex";
import Link from "next/link";

const WhyS2S = (props) => {
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
      <h4 className="font-playfair text-3xl text-center font-bold mb-10 lg:mb-20">
        Why Technology Companies use S2S{" "}
      </h4>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {slides.map((index) => (
              <div
                className="embla__slide mx-10 lg:mx-10 flex justify-center items-center "
                key={index}
              >
                <div className="embla__slide__div grid grid-cols-2 gap-10 justify-center items-center bg-tab-gray p-10 rounded-xl">
                  <div className="col-span-2 lg:col-span-1">
                    <h6 className="font-playfair text-2xl font-bold">
                      {titleByIndex(index)}
                    </h6>
                    <p className="font-montserrat font-light mt-5">
                      {textByIndex(index)}
                    </p>
                    <div className="mt-10">
                      <Link
                        href="/"
                        className="bg-s2s-green px-7 py-3 rounded-xl font-playfair font-bold text-white"
                      >
                        {buttonByIndex(index)}
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-2 order-first lg:order-last w-1/2 lg:w-full lg:col-span-1">
                    <img src={imgByIndex(index)} alt="illustrations" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default WhyS2S;
