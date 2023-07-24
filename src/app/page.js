import React from "react";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonials from "@/components/Testimonials";
import WhyS2S from "@/components/WhyS2S";

export const metadata = {
  title: "Stone2Stone",
  description:
    "We're the B2B marketing agency built for technology companies. Our dedicated experts value your time, budget & vision, and can’t wait to start a conversation today.",
};

const OPTIONS1 = { loop: true };
const SLIDE_COUNT1 = 6;
const SLIDES1 = Array.from(Array(SLIDE_COUNT1).keys());

const OPTIONS2 = { loop: true };
const SLIDE_COUNT2 = 4;
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys());

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhatWeDo />
        <Testimonials slides={SLIDES1} options={OPTIONS1} />
        <WhyS2S slides={SLIDES2} options={OPTIONS2} />
      </main>
    </>
  );
}
