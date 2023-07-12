"use client";
import React from "react";
import ReactDOM from "react-dom/client";

import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonials from "@/components/Testimonials";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhatWeDo />
        <Testimonials slides={SLIDES} options={OPTIONS} />
      </main>
    </>
  );
}
